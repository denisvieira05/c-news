import React from 'react';
import Colors from '../../../assets/Colors'

const Tag = ({ text, onClickTag, color, isActive, tagStyle }) => (
  <label
    style={getTagColorStyle(color, isActive, tagStyle)}
    onClick={() => onClickTag()}
    >
    {text}
  </label>
);

const getTagColorStyle = (tagColor, isActive, tagStyle) => {
  let tagColorStyle = {
    border: '1px solid ' + tagColor,
    ...styles.container,
    ...tagStyle
  }

  if (isActive) {
    tagColorStyle['background'] = tagColor
    tagColorStyle['color'] = Colors.white
  } else {
    tagColorStyle['background'] = Colors.transparent
    tagColorStyle['color'] = tagColor
  }

  return tagColorStyle
}

const styles = {
  container: {
    fontSize: '1em',
    textTransform: 'uppercase',
    padding: '1em',
    borderRadius: '2em',
    cursor: 'pointer',
  },
}

export default Tag