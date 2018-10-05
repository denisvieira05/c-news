import React from 'react';
import Colors from '../assets/Colors'
import injectSheet from 'react-jss'


export const INPUT_FIELD_STYLES = { ROW: 'ROW', COLUMN: 'COLUMN'}

const InputField = ({ title, type, fieldStyle, onChange }) => (
  <div style={getCorrectFieldStyle(fieldStyle)}>
    <label style={styles.fieldTitleStyle}>{title}</label>
    <input
      onChange={onChange}
      type={type}
      style={styles.inputStyle}
    />
  </div>
);

const getCorrectFieldStyle = (fieldStyle) => {
  switch (fieldStyle) {
    case INPUT_FIELD_STYLES.ROW: 
      return styles.rowContainerStyle
    case INPUT_FIELD_STYLES.COLUMN: 
      return styles.columnContainerStyle
    default:
      return styles.columnContainerStyle
  }
}

const styles = {
  inputStyle: {
    fontSize: '1em',
    height: '40px',
    marginBottom: '1em',
    padding: '0.3em',
  },
  rowContainerStyle: {
    display: 'flex',
    flexDirection: 'row'
  },
  columnContainerStyle: {
    display: 'flex',
    flexDirection: 'column'
  },
  fieldTitleStyle: {
    textTransform: 'uppercase',
    marginBottom: '1em',
    color: Colors.gray
  }
}

export default injectSheet(styles)(InputField)