import React from "react";
import Colors from "../assets/Colors";
import injectSheet from "react-jss";
import { ClipLoader } from "react-spinners";

const Button = ({ title, onClick, classes, isLoading, style }) => (
  <button style={style} className={classes.default} onClick={() => onClick()}>
    {isLoading ? (
      <ClipLoader
        sizeUnit={"px"}
        size={20}
        color={Colors.white}
        loading={isLoading}
      />
    ) : (
      title
    )}
  </button>
);

const styles = {
  default: {
    backgroundColor: Colors.blue,
    color: Colors.white,
    fontSize: "1em",
    height: "52px",
    textTransform: "uppercase",
    padding: "0",
    border: "none",
    display: "table-cell",
    verticalAlign: "middle",
    lineHeight: "1.2em"
  }
};

export default injectSheet(styles)(Button);
