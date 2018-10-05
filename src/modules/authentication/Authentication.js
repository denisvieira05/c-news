import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, withRouter, Redirect } from 'react-router-dom'
import SignInForm from './components/SignInForm'
import SignUpForm from './components/SignUpForm'
import injectSheet from 'react-jss'

class Authentication extends Component {

  render() {
    const { isAuthenticated, classes } = this.props

    if(isAuthenticated) {
      return <Redirect to="/" />
    }

    return (
        <div>
          <Router>
            <div className={classes.mainContainer}>
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
  mainContainer: {
    display: 'flex',
    justifyContent: 'center'
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.authentication.isAuthenticated,
})

export default injectSheet(styles)(withRouter(connect(mapStateToProps, null)(Authentication)));
