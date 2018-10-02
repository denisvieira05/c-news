import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import * as AuthenticationActions from '../AuthenticationActions'

class SignInForm extends Component {

  state = {
    email: '',
    password: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();

    // this.props.form.validateFields((err, values) => {
    //   if (!err) {
    //     const { email, password } = values
    //     this.props.signIn(email, password)
    //     console.log('Received values of form: ', values);
    //   }
    // });
  }

  _onSubmitSignForm() {
    const { password, email} = this.state

    this.props.signIn(email, password)
  }

  render() {
    const { signInError } = this.props

    return (
      <div className="container">
        <label><b>Email</b></label>
        <input 
          type="text" 
          placeholder="Enter Email" 
          onChange={(text) => this.setState({ email: text.target.value })}
          value={this.state.email} 
          />

        <label><b>Password</b></label>
        <input type="password" placeholder="Enter Password" onChange={(text) => this.setState({ password: text.target.value })} required />

        <button type="submit" onClick={() => this._onSubmitSignForm()}>Login</button>

        <label>{signInError}</label>

        <Link to="signup">Cadastrar</Link>

        <a href="/">Voltar</a>
      </div>
    );
  }
}

const styles = {
 
}

const mapStateToProps = (state) => ({
  isAuthenticating: state.authentication.isAuthenticating,
  signInError: state.authentication.signInError,
})

const mapDispatchToProps = {
  signIn: AuthenticationActions.signIn,
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
