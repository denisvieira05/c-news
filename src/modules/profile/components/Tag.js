import React from "react";
import Colors from "../../../assets/Colors";
import injectSheet from "react-jss";

const Tag = ({ text, onClickTag, classes }) => (
  <label className={classes.tagContainerStyle} onClick={() => onClickTag()}>
    {text}
  </label>
);

const styles = {
  tagContainerStyle: props => ({
    marginRight: "0.625em",
    marginBottom: "0.625em",
    fontSize: "1em",
    textTransform: "uppercase",
    padding: "1em",
    borderRadius: "2em",
    textAlign: "center",
    cursor: "pointer",
    border: "1px solid " + props.color,
    background: props.isActive ? props.color : Colors.transparent,
    color: props.isActive ? Colors.white : props.color
  })
};

export default injectSheet(styles)(Tag);
