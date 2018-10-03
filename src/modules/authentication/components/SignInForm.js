import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import * as AuthenticationActions from '../AuthenticationActions'
import InputField, { INPUT_FIELD_STYLES } from '../../../components/InputField'
import Button from '../../../components/Button'
import Strings from '../../../assets/Strings'
import Colors from '../../../assets/Colors'

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
    const { signInError } = this.props

    return (
      <div style={styles.signIncontainer}>

        <h2 style={styles.signInTitleStyle}>{Strings.userArea}</h2>

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
        />

        <label>{signInError}</label>

        <Link to="signup">{Strings.signUp}</Link>

        <a href="/">{Strings.back}</a>

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
    marginBottom: '2em'
  },
  signIncontainer: { 
    display: 'flex',
    flexDirection: 'column',
  },
}

const mapStateToProps = (state) => ({
  isAuthenticating: state.authentication.isAuthenticating,
  signInError: state.authentication.signInError,
})

const mapDispatchToProps = {
  signIn: AuthenticationActions.signIn,
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
