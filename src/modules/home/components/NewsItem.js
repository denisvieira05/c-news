import React from 'react';
import Colors from '../../../assets/Colors'
import Strings from '../../../assets/Strings'

const NewsItem = ({ title, image, author, authorImage, description }) => (
  <div style={styles.container}>

    { image ? (
        <img style={styles.newsMainImageStyle} src={image} />
    ) : null }

    <h3 style={styles.newsTitleStyle}>{title}</h3>
    
    <div style={styles.byAuthorContainer}>
      <img style={styles.avatarImgStyle}src={authorImage}/>
      <label style={styles.authorNameStyle}>{Strings.by} {author}</label>
    </div>

    <p>{description}</p>
  </div>
);

const styles = {
  container: {
    width: '16.375em',
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer',
  },
  newsMainImageStyle: {
    width: '262px',
    height: '167px',
  },
  byAuthorContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  avatarImgStyle: {
    width: '32px',
    height: '32px',
    borderRadius: '50%'
  },
  authorNameStyle: {
    color: Colors.lightGray,
    fontStyle: 'italic',
    fontSize: '0.813em',
    marginLeft: '0.5em'
  },
  newsTitleStyle: {
    fontSize: '1.063em'
  }
}

export default NewsItem