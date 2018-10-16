import React from 'react';
import Colors from '../assets/Colors'
import injectSheet from 'react-jss'

const SideMenu = ({ items, show, classes }) => (
  <div className={classes.sideMenuContainer}>
    <a href="#" className={classes.navItem}>Contact</a>
  </div>
);

const styles = {
  "@media screen and (min-width: 320px)": {
    sideMenuIconContainer: props => ({
      width: props.show ? "250px !important" : "0",
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
  navItem: {
    color: Colors.gray,
    textDecoration: "none",
    textTransform: "uppercase",
    fontSize: "0.875em",
    marginRight: "2em",
    display: "block",
    transition: "0.3s"
  }
};

export default injectSheet(styles)(SideMenu)