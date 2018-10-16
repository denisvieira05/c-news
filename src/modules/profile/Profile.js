import React, { PureComponent } from 'react';
import * as ProfileActions from './ProfileActions'
import * as AuthenticationActions from '../authentication/AuthenticationActions'
import { connect } from 'react-redux'
import Tag from './components/Tag'
import Button from '../../components/Button'
import Colors from '../../assets/Colors';
import Strings from '../../assets/Strings';
import { DEFAULT_INTERESTS } from './ProfileTypes'
import injectSheet from 'react-jss'
import { ClipLoader } from 'react-spinners';

class Profile extends PureComponent {
  state = {
    personalInterests: Object.values(DEFAULT_INTERESTS),
  };

  componentWillMount() {
    this.props.loadMyInterests()
    this.props.getLoggedUser()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.myInterests !== this.state.personalInterests) {
      this._mapDefaultInterestsWithMyInterests(nextProps.myInterests)
    }
  }

  _mapDefaultInterestsWithMyInterests(newMyInterests){
    let newPersonalInterests = Object.values(DEFAULT_INTERESTS)
    
    newPersonalInterests.forEach((item, index) => {
      if (newMyInterests.includes(item.id)) {
        item.isActive = true
      }
    });

    this._updatePersonalInterests(newPersonalInterests)
  }

  async _onClickCategory(clickedIndex){
    let newPersonalInterests = [...this.state.personalInterests]

    await newPersonalInterests.map((item, index) => {
      if (index === clickedIndex){
        item.isActive = !item.isActive
        return true
      }

      return false
    });

    this._updatePersonalInterests(newPersonalInterests)
  }

  _updatePersonalInterests(newInterests) {
    this.setState({ personalInterests: newInterests })
  }

  _onSaveInterests() {
    const { personalInterests } = this.state

    const personalInterestsSelected = personalInterests.filter((value, index) => ( value.isActive === true))

    let myInterests = []
    
    personalInterestsSelected.forEach(element => {
      myInterests.push(element.id)
    });

    this.props.saveMyInterests(myInterests)
  }

  render() {
    const { personalInterests } = this.state 
    const { signOut, classes, isFetchingMyInterests, isSavingMyInterests, loggedUser } = this.props
    return (
      <div className={classes.profileContainer}>

        <div className={classes.welcomeContainer}>
          <label
            className={classes.welcomeTitle}>{Strings.welcome},  </label>

          <label
            className={classes.welcomeTitleUsername}>
            {loggedUser ? loggedUser.username : null} </label>
        </div>

        <div>
          <label className={classes.interestsTitle}>{Strings.myInterests}</label>
          { isFetchingMyInterests ? (
              <div
                className={classes.spinnerContainerStyle}>
                <ClipLoader
                  sizeUnit={"px"}
                  size={50}
                  color={Colors.gray}
                  loading={true}
                />
              </div>
            ) : personalInterests.map((item, index) => (
                <Tag
                  text={item.text}
                  color={item.color}
                  isActive={item.isActive}
                  key={index}
                  onClickTag={() => this._onClickCategory(index)}
                /> ))
          }
        </div>

        <div className={classes.saveInterestsContainer}>
          <Button
            style={styles.saveButtonStyle}
            onClick={() => this._onSaveInterests()}
            title={Strings.save}
            isLoading={isSavingMyInterests}
            />
        </div>
        
        <a href="/" className={classes.linkButtonStyle}>{Strings.backToHome}</a>

        <label className={classes.linkButtonStyle} onClick={() => signOut()}>Log Out</label>

      </div>
    );
  }
}

const styles = {
  welcomeContainer:{
    marginTop: '3em',
    marginBottom: '3em',
  },
  welcomeTitle: {
    fontSize: '1.813em',
    textTransform: 'uppercase',
  },
  welcomeTitleUsername: {
    fontSize: '1.813em',
    textTransform: 'uppercase',
    color: Colors.blue
  },
  saveButtonStyle:{
    width: '15.125em'
  },
  interestsTitle: {
    display: 'flex',
    alignSelf: 'flex-start',
    textTransform: 'uppercase',
    color: Colors.gray,
    marginBottom: '2em'
  },
  linkButtonStyle: {
    alignSelf: 'center',
    marginTop: '1em',
    textDecoration: 'none',
    color: Colors.blue
  },
  saveInterestsContainer: {
    display: 'flex',
    marginTop: '3.563em',
    marginBottom: '1.688em'
  },
  backToHomeContainer: {
    display: 'flex',
  },
  backToHomeTextStyle: {
    textTransform: 'uppercase',
    color: Colors.blue
  },
  profileContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },
  spinnerContainerStyle: {
    display: 'flex',
    marginTop: '5em',
    alignItems: 'center',
    justifyContent: 'center',
  }
}

const mapStateToProps = (state) => ({
  loggedUser: state.authentication.loggedUser,
  isAuthenticated: state.authentication.isAuthenticated,
  myInterests: state.profile.myInterests,
  isFetchingMyInterests: state.profile.isFetchingMyInterests,
  isSavingMyInterests: state.profile.isSavingMyInterests,
  loggedUser: state.authentication.loggedUser,
})

const mapDispatchToProps = {
  signOut: AuthenticationActions.signOut,
  loadMyInterests: ProfileActions.loadMyInterests,
  saveMyInterests: ProfileActions.saveMyInterests,
  getLoggedUser: AuthenticationActions.getLoggedUser,
}

export default injectSheet(styles)(connect(mapStateToProps, mapDispatchToProps)(Profile))
