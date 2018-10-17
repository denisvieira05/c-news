import React from "react";
import Colors from "../assets/Colors";
import injectSheet from "react-jss";

const NavList = ({ items, onClickNavItem, classes }) => (
  <div className={classes.navContainer}>
    {items.map((itemName, index) => (
      <span
        key={index}
        className={classes.navItem}
        onClick={onClickNavItem && (() => onClickNavItem(index))}
      >
        {itemName.text}
      </span>
    ))}
  </div>
);

const styles = {
  navContainer: props => ({
    display: "flex",
    flexDirection: props.isVertical ? "column" : "row",
    flex: 2,
    justifyContent: "flex-end",
    marginRight: "3.375em"
  }),
  navItem: props => ({
    color: Colors.gray,
    textDecoration: "none",
    textTransform: "uppercase",
    fontSize: props.isVertical ? "1em" : "0.875em",
    marginTop: props.isVertical ? "1.563em" : "0",
    marginLeft: "2em",
    cursor: "pointer"
  })
};

export default injectSheet(styles)(NavList);
