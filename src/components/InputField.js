import React from "react";
import Colors from "../assets/Colors";
import injectSheet from "react-jss";

const InputField = ({ title, type, onChange, classes, inputName }) => (
  <div className={classes.fieldContainerStyle}>
    <label style={styles.fieldTitleStyle}>{title}</label>
    <input
      onChange={onChange}
      type={type}
      style={styles.inputStyle}
      name={inputName}
    />
  </div>
);

const styles = {
  inputStyle: {
    fontSize: "1em",
    height: "40px",
    marginBottom: "1em",
    padding: "0.3em"
  },
  fieldContainerStyle: props => ({
    display: "flex",
    flexDirection: props.isColumnStyle ? "column" : "row"
  }),
  fieldTitleStyle: {
    textTransform: "uppercase",
    marginBottom: "1em",
    color: Colors.gray
  }
};

export default injectSheet(styles)(InputField);
