import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import * as AuthenticationActions from '../AuthenticationActions'

class SignUpForm extends Component {

  state = {
    name: '',
    email: '',
    password: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();

  }

  _onSubmitSignUpForm() {
    const { name, password, email, } = this.state

    this.props.signUp(name, email, password)
  }


  render() {
    const { signUpError } = this.props

    return (
      <div className="container">
        <label><b>Username</b></label>
        <input type="text" placeholder="Enter Username" required
          onChange={(text) => this.setState({ name: text.target.value })}/>

        <label><b>Email</b></label>
        <input type="text" placeholder="Enter Email" required
          onChange={(text) => this.setState({ email: text.target.value })}/>

        <label><b>Password</b></label>
        <input type="password" placeholder="Enter Password" required
          onChange={(text) => this.setState({ password: text.target.value })}/>

        <button type="submit" onClick={() => this._onSubmitSignUpForm()}>Cadastrar</button>

        <label>{signUpError}</label>

        <Link to="/signin">Voltar</Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticating: state.authentication.isAuthenticating,
  signUpError: state.authentication.signUpError,
})

const mapDispatchToProps = {
  signUp: AuthenticationActions.signUp,
}

const styles = {
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
