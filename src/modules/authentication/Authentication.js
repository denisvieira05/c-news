import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, withRouter, Redirect } from 'react-router-dom'

class Authentication extends PureComponent {

  render() {
    const { isAuthenticated } = this.props

    if(isAuthenticated) {
      return <Redirect to="/" />
    }

    return (
      <div
        className="auth-container">

        <h1>LOGIN</h1>

      </div>
      
    );
  }
}

const styles = {
}

const mapStateToProps = (state) => ({
})

export default withRouter(connect(mapStateToProps, null)(Authentication));
