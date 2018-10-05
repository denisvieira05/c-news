import React from 'react';
import Colors from '../assets/Colors'
import injectSheet from 'react-jss'


const Button = ({ title, onClick, classes }) => (
  <button 
    className={classes.default}
    onClick={() => onClick()}>
    {title}
  </button>
);

const styles = {
  default: {
    backgroundColor: Colors.blue,
    color: Colors.white,
    fontSize: '1em',
    height: '52px',
    textTransform: 'uppercase',
    padding: '0',
    border: 'none',
    display: 'table-cell',
    verticalAlign: 'middle',
    lineHeight: '1.2em',
  }
}

export default injectSheet(styles)(Button)