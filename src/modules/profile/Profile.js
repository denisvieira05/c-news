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

class Profile extends PureComponent {
  state = {
    personalInterests: Object.values(DEFAULT_INTERESTS),
  };

  componentWillMount() {
    this.props.loadMyInterests()
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
    const { signOut, classes } = this.props
    return (
      <div className={classes.profileContainer}>

        <h3 className={classes.interestsTitle}>{Strings.myInterests}</h3>

        <div>
          {
            personalInterests.map((item, index) => (
              <Tag
                tagStyle={classes.tagItemStyle}
                text={item.text}
                color={item.color}
                isActive={item.isActive}
                key={index}
                onClickTag={() => this._onClickCategory(index)}
              />
            ))
          }
        </div>

        <div className={classes.saveInterestsContainer}>
          <Button
            onClick={() => this._onSaveInterests()}
            title={Strings.save}
            />
        </div>



        <div className={classes.backToHomeContainer}>
          <a href="/" className={classes.backToHomeTextStyle}>{Strings.backToHome}</a>
        </div>

        <label className={classes.linkStyle} onClick={() => signOut()}>Log Out</label>

      </div>
    );
  }
}

const styles = {
  tagItemStyle: {
    marginRight: '0.5em'
  },
  interestsTitle: {
    display: 'flex',
    alignSelf: 'flex-start',
    textTransform: 'uppercase',
    color: Colors.gray,
    marginBottom: '2em'
  },
  saveInterestsContainer: {
    display: 'flex',
    marginTop: '2em',
    marginBottom: '2em'
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
  }
}

const mapStateToProps = (state) => ({
  loggedUser: state.authentication.loggedUser,
  isAuthenticated: state.authentication.isAuthenticated,
  myInterests: state.profile.myInterests
})

const mapDispatchToProps = {
  signOut: AuthenticationActions.signOut,
  loadMyInterests: ProfileActions.loadMyInterests,
  saveMyInterests: ProfileActions.saveMyInterests,
}

export default injectSheet(styles)(connect(mapStateToProps, mapDispatchToProps)(Profile))
