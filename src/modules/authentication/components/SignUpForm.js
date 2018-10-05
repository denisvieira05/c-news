import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import * as AuthenticationActions from '../AuthenticationActions'
import InputField, { INPUT_FIELD_STYLES } from '../../../components/InputField'
import Button from '../../../components/Button'
import Strings from '../../../assets/Strings'
import Colors from '../../../assets/Colors'
import injectSheet from 'react-jss'

class SignUpForm extends Component {

  state = {
    name: '',
    email: '',
    password: '',
  };

  _onSubmitSignUpForm() {
    const { name, password, email, } = this.state

    this.props.signUp(name, email, password)
  }

  render() {
    const { signUpError, classes, isAuthenticating } = this.props

    return (
      <div className={classes.signUpcontainer}>

        <h2 className={classes.signUpTitleStyle}>{Strings.userArea}</h2>

        <InputField
          fieldStyle={INPUT_FIELD_STYLES.COLUMN}
          title={Strings.userName}
          type="text"
          onChange={(text) => this.setState({ name: text.target.value })}
          value={this.state.name}
        />

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
          onClick={() => this._onSubmitSignUpForm()}
          title={Strings.signUp}
          isLoading={isAuthenticating}
        />

        <label className={classes.errorStyle}>{signUpError}</label>

        <Link to="signin" className={classes.linkButtonStyle}>{Strings.back}</Link>

      </div>
    );
  }
}

const styles = {
  signUpTitleStyle: {
    color: Colors.gray,
    fontSize: '1.5em',
    textTransform: 'uppercase',
    alignSelf: 'center',
    marginBottom: '2em'
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
  signUpcontainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '25em',
  },
}

const mapStateToProps = (state) => ({
  isAuthenticating: state.authentication.isAuthenticating,
  signUpError: state.authentication.signUpError,
})

const mapDispatchToProps = {
  signUp: AuthenticationActions.signUp,
}

export default injectSheet(styles)(connect(mapStateToProps, mapDispatchToProps)(SignUpForm));
