import React, { PureComponent } from 'react';
import * as ProfileActions from './ProfileActions'
import { connect } from 'react-redux'

class Profile extends PureComponent {
  state = {
    personalInterests: this.props.dogs || []
  };

  render() {
    return (
        <div>
          <label>PROFILE SCREEN</label>
        </div>
    );
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
