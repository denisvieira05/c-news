import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as AuthenticationActions from "../AuthenticationActions";
import InputField from "../../../components/InputField";
import Button from "../../../components/Button";
import Strings from "../../../assets/Strings";
import Colors from "../../../assets/Colors";
import injectSheet from "react-jss";

class SignUpForm extends Component {
  state = {
    name: "",
    email: "",
    password: ""
  };

  _onSubmitSignUpForm(event) {
    event.preventDefault();
    const { name, password, email } = this.state;

    this.props.signUp(name, email, password);
  }

  render() {
    const { signUpError, classes, isAuthenticating } = this.props;

    return (
      <form
        className={classes.signUpcontainer}
        onSubmit={event => this._onSubmitSignUpForm(event)}
      >
        <h2 className={classes.signUpTitleStyle}>{Strings.userArea}</h2>

        <InputField
          isColumnStyle
          title={Strings.userName}
          type="text"
          inputName="username"
          onChange={text => this.setState({ name: text.target.value })}
          value={this.state.name}
        />

        <InputField
          isColumnStyle
          title={Strings.email}
          type="text"
          inputName="email"
          onChange={text => this.setState({ email: text.target.value })}
          value={this.state.email}
        />

        <InputField
          isColumnStyle
          title={Strings.password}
          type="password"
          inputName="senha"
          onChange={text => this.setState({ password: text.target.value })}
        />

        <Button
          type="submit"
          title={Strings.signUp}
          isLoading={isAuthenticating}
        />

        <label className={classes.errorStyle}>{signUpError}</label>

        <Link to="signin" className={classes.linkButtonStyle}>
          {Strings.back}
        </Link>
      </form>
    );
  }
}

const styles = {
  signUpTitleStyle: {
    color: Colors.gray,
    fontSize: "1.5em",
    textTransform: "uppercase",
    alignSelf: "center",
    marginBottom: "2em"
  },
  errorStyle: {
    alignSelf: "center",
    color: Colors.red,
    marginTop: "1em"
  },
  linkButtonStyle: {
    alignSelf: "center",
    marginTop: "1em",
    textDecoration: "none",
    color: Colors.blue
  },
  signUpcontainer: {
    display: "flex",
    flexDirection: "column",
    width: "25em"
  }
};

const mapStateToProps = state => ({
  isAuthenticating: state.authentication.isAuthenticating,
  signUpError: state.authentication.signUpError
});

const mapDispatchToProps = {
  signUp: AuthenticationActions.signUp
};

export default injectSheet(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SignUpForm)
);
