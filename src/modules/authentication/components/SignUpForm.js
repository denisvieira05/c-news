import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import * as AuthenticationActions from '../AuthenticationActions'
import InputField, { INPUT_FIELD_STYLES } from '../../../components/InputField'
import Button from '../../../components/Button'
import Strings from '../../../assets/Strings'
import Colors from '../../../assets/Colors'

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
    const { signUpError } = this.props

    return (
      <div style={styles.signUpcontainer}>

        <h2 style={styles.signUpTitleStyle}>{Strings.userArea}</h2>

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
        />

        <label>{signUpError}</label>

        <Link to="/signin">{Strings.back}</Link>

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
  signUpcontainer: {
    display: 'flex',
    flexDirection: 'column',
  },
}

const mapStateToProps = (state) => ({
  isAuthenticating: state.authentication.isAuthenticating,
  signUpError: state.authentication.signUpError,
})

const mapDispatchToProps = {
  signUp: AuthenticationActions.signUp,
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
