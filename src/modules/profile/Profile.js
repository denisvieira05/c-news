import React, { PureComponent } from 'react';
import * as ProfileActions from './ProfileActions'
import { connect } from 'react-redux'
import Tag from './components/Tag'
import Button from '../../components/Button'
import Colors from '../../assets/Colors';
import Strings from '../../assets/Strings';

const DEFAULT_INTERESTS = { 
  POLITICS: {
    id: 'POLICITS', 
    text: Strings.politics,
    isActive: false,
    color: Colors.red,
  }, 
  BUSINESS: { 
    id: 'BUSINESS', 
    text: Strings.business,
    isActive: false,
    color: Colors.pink,
  }, 
  TECH: { 
    id: 'TECH', 
    text: Strings.tech,
    isActive: false,
    color: Colors.blue,
  }, 
  SCIENCE: { 
    id: 'SCIENCE', 
    text: Strings.science,
    isActive: false,
    color: Colors.green,
  }, 
  SPORTS: { 
    id: 'SPORTS', 
    text: Strings.sports,
    isActive: false,
    color: Colors.yellow,
  }, 
}

class Profile extends PureComponent {
  state = {
    personalInterests: Object.values(DEFAULT_INTERESTS),
  };

  componentWillMount() {
    this.props.loadMyInterests()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.myInterests != this.state.personalInterests) {
      this._mapDefaultInterestsWithMyInterests(nextProps.myInterests)
    }
  }

  _mapDefaultInterestsWithMyInterests(newMyInterests){
    let newPersonalInterests = Object.values(DEFAULT_INTERESTS)
    
    newPersonalInterests.map((item, index) => {
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
      }
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
    return (
      <div style={styles.profileContainer}>

        <h3 style={styles.interestsTitle}>{Strings.myInterests}</h3>

        <div>
          {
            personalInterests.map((item, index) => (
              <Tag
                tagStyle={styles.tagItemStyle}
                text={item.text}
                color={item.color}
                isActive={item.isActive}
                key={index}
                onClickTag={() => this._onClickCategory(index)}
              />
            ))
          }
        </div>

        <div style={styles.saveInterestsContainer}>
          <Button
            onClick={() => this._onSaveInterests()}
            title={Strings.save}
            />
        </div>

        <div style={styles.backToHomeContainer}>
          <a href="/" style={styles.backToHomeTextStyle}>{Strings.backToHome}</a>
        </div>

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
  loadMyInterests: ProfileActions.loadMyInterests,
  saveMyInterests: ProfileActions.saveMyInterests,
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
