import React from 'react';
import Colors from '../assets/Colors'
import injectSheet from 'react-jss'
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as AuthenticationActions from "../modules/authentication/AuthenticationActions";

const SideMenu = ({
  items,
  classes,
  isAuthenticated,
  loggedUser,
  onClickItem
}) => (
  <div className={classes.sideMenuContainer}>
    {items.map((item, index) => (
      <span
        href="/"
        className={classes.navItem}
        key={index}
        onClick={() => onClickItem(index)}
      >
        {item.text}
      </span>
    ))}
    {isAuthenticated ? (
      <Link to="/profile" className={classes.linkStyle}
          onClick={() => onClickItem()}>
        {loggedUser ? loggedUser.username : null}
      </Link>
    ) : null}
    {isAuthenticated ? null : (
      <Link to="/auth" className={classes.linkStyle}
          onClick={() => onClickItem()}>
        Log In
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
    display: "block",
  },
  navItem: {
    color: Colors.gray,
    textDecoration: "none",
    textTransform: "uppercase",
    fontSize: "1em",
    marginLeft: "2em",
    marginTop: "1.563em",
    display: "block",
    transition: "0.3s",
    cursor: "pointer"
  }
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.authentication.isAuthenticated,
  loggedUser: state.authentication.loggedUser,
})

const mapDispatchToProps = {
  getLoggedUser: AuthenticationActions.getLoggedUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(injectSheet(styles)(SideMenu))