import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, withRouter, Redirect } from 'react-router-dom'
import SignInForm from './components/SignInForm'
import SignUpForm from './components/SignUpForm'
import GeneralHeader from '../../components/GeneralHeader'

class Authentication extends Component {

  render() {
    const { isAuthenticated } = this.props

    if(isAuthenticated) {
      return <Redirect to="/" />
    }

    return (
        <div>
          <GeneralHeader />
          <Router>
            <div>
              <Route exact path="/" render={() => (
                <Redirect to="/signin" />
              )} />
              <Route exact path="/signin" component={SignInForm} />
              <Route exact path="/signup" component={SignUpForm} />
            </div>
          </Router>
      </div>
    );
  }
}

const styles = {
  authGeneralContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 2fr 1fr',    
  },
  item: {
    margin: '5px',
    background: 'tomato',
    textAlign: 'center',
    fontSize: '1.5em',
  }

}

const mapStateToProps = (state) => ({
  isAuthenticated: state.authentication.isAuthenticated,
})

export default withRouter(connect(mapStateToProps, null)(Authentication));
