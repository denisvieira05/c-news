import React, { PureComponent } from 'react';
import * as ProfileActions from './ProfileActions'
import { connect } from 'react-redux'
import Tag from './components/Tag'
import Button from '../../components/Button'
import Colors from '../../assets/Colors';
import Strings from '../../assets/Strings';

const DEFAULT_INTERESTS = { 
  POLITICS: { 
    text: Strings.politics,
    isActive: false,
    color: Colors.red,
  }, 
  BUSINESS: { 
    text: Strings.business,
    isActive: false,
    color: Colors.pink,
  }, 
  TECH: { 
    text: Strings.tech,
    isActive: false,
    color: Colors.blue,
  }, 
  SCIENCE: { 
    text: Strings.science,
    isActive: false,
    color: Colors.green,
  }, 
  SPORTS: { 
    text: Strings.sports,
    isActive: false,
    color: Colors.yellow,
  }, 
}

class Profile extends PureComponent {
  state = {
    personalInterests: Object.values(DEFAULT_INTERESTS),
  };

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
})

const mapDispatchToProps = {
  loadMyInterests: ProfileActions.loadMyInterests,
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
