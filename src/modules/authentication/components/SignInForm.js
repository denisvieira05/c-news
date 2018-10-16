import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import * as AuthenticationActions from '../AuthenticationActions'
import InputField, { INPUT_FIELD_STYLES } from '../../../components/InputField'
import Button from '../../../components/Button'
import Strings from '../../../assets/Strings'
import Colors from '../../../assets/Colors'
import injectSheet from 'react-jss'

class SignInForm extends Component {

  state = {
    email: '',
    password: '',
  };
  
  _onSubmitSignForm() {
    const { password, email} = this.state

    this.props.signIn(email, password)
  }

  render() {
    const { signInError, classes, isAuthenticating } = this.props

    return (
      <div className={classes.signIncontainer}>

        <h2 className={classes.signInTitleStyle}>{Strings.userArea}</h2>

        <InputField
          fieldStyle={INPUT_FIELD_STYLES.COLUMN}
          title={Strings.email}
          type="text" 
          onChange={(text) => this.setState({ email: text.target.value })}
          value={this.state.email} 
          />

        <InputField
          fieldStyle={INPUT_FIELD_STYLES.COLUMN}
          title={Strings.password}
          type="password" 
          onChange={(text) => this.setState({ password: text.target.value })} 
        />

        <Button 
          onClick={() => this._onSubmitSignForm()} 
          title={Strings.login}
          isLoading={isAuthenticating}
        />

        <label className={classes.errorStyle}>{signInError}</label>

        <Link to="signup" className={classes.linkButtonStyle}>{Strings.signUp}</Link>

        <a href="/" className={classes.linkButtonStyle}>{Strings.backToHome}</a>

      </div>
    );
  }
}

const styles = {
  signInTitleStyle: {
    color: Colors.gray,
    fontSize: '1.5em',
    textTransform: 'uppercase',
    alignSelf: 'center',
    marginBottom: '2em',
    marginTop: '2em'
  },
  errorStyle: {
    alignSelf: 'center',
    color: Colors.red,
    marginTop: '1em',
  },
  linkButtonStyle: {
    alignSelf: 'center',
    marginTop: '1em',
    textDecoration: 'none',
    color: Colors.blue
  },
  signIncontainer: { 
    display: 'flex',
    flexDirection: 'column',
    width: '25em',
  },
}

const mapStateToProps = (state) => ({
  isAuthenticating: state.authentication.isAuthenticating,
  signInError: state.authentication.signInError,
})

const mapDispatchToProps = {
  signIn: AuthenticationActions.signIn,
}

export default injectSheet(styles)(connect(mapStateToProps, mapDispatchToProps)(SignInForm));
