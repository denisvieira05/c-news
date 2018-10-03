import React from 'react';
import Colors from '../assets/Colors'

const Button = ({ title, onClick }) => (
  <button 
    {...this.props}
    style={styles.default}
    onClick={() => onClick()}>
    {title}
  </button>
);

const styles = {
  default: {
    display: 'flex',
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

export default Button