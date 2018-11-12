import React from "react";
import Colors from "../assets/Colors";
import Strings from "../assets/Strings";
import injectSheet from "react-jss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as AuthenticationActions from "../modules/authentication/AuthenticationActions";
import NavList from "./NavList";

const SideMenu = ({
  items,
  classes,
  isAuthenticated,
  loggedUser,
  onClickItem
}) => (
  <div className={classes.sideMenuContainer}>
    <NavList
      isVertical
      items={items}
        onClickNavItem={clickedIndex => onClickItem(clickedIndex)}
    />
    {isAuthenticated ? (
      <Link
        to="/profile"
        className={classes.linkStyle}
        onClick={() => onClickItem()}
      >
        {loggedUser ? loggedUser.username : null}
      </Link>
    ) : null}
    {isAuthenticated ? null : (
      <Link
        to="/auth"
        className={classes.linkStyle}
        onClick={() => onClickItem()}
      >
        {Strings.signIn}
      </Link>
    )}
  </div>
);

const styles = {
  "@media screen and (min-width: 320px)": {
    sideMenuIconContainer: props => ({
      width: props.show ? "250px !important" : "0"
    })
  },
  sideMenuContainer: props => ({
    width: props.show ? "100%" : "0",
    height: "100%",
    position: "fixed",
    zIndex: "1",
    top: "53px",
    left: 0,
    "overflow-x": "hidden",
    transition: "0.5s",
    backgroundColor: Colors.white
  }),
  linkStyle: {
    color: Colors.blue,
    textDecoration: "none",
    textTransform: "uppercase",
    fontSize: "1em",
    marginLeft: "2em",
    marginTop: "1.563em",
    fontWeight: "bold",
    display: "block"
  }
};

const mapStateToProps = state => ({
  isAuthenticated: state.authentication.isAuthenticated,
  loggedUser: state.authentication.loggedUser
});

const mapDispatchToProps = {
  getLoggedUser: AuthenticationActions.getLoggedUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectSheet(styles)(SideMenu));
