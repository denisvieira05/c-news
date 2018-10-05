import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import * as HomeActions from './HomeActions'
import NewsItem from './components/NewsItem'
import injectSheet from 'react-jss'
import {news01, news02, news03, userImg} from '../../assets/Images'

const DEFAULT_MOCK_IMAGES = [ news01, news02, news03]

class Home extends PureComponent {
  
  componentWillMount() {
    this.props.loadNews()
  }
  
  _getCorrectNewsImageUrlOrObject(imageUrl, itemIndex){
    if(imageUrl){
      if (this._isAPIEnviroment(imageUrl)) {
        return imageUrl
      } else {
        const imageRequired = DEFAULT_MOCK_IMAGES[itemIndex]
        return imageRequired
      }
    }

    return null
  }
  
  _getCorrectUserImageUrlOrObject(imageUrl){
    if(imageUrl){
      if (this._isAPIEnviroment(imageUrl)) {
        return imageUrl
      } else {
        return userImg
      }
    }

    return null
  }

  _isAPIEnviroment(imageUrl){
    return imageUrl.includes('http')
  }

  render() {
    const { isFetchingNews, news, classes } = this.props
    return (
      <div className={classes.newsContainer}>
          {
            isFetchingNews ? (
              <p>Carregando ...</p>
            ) : (
                news.map((item, index) => (
                    <NewsItem 
                      categoryName={item.categories[0]}
                      style={styles.newItemContainer}
                      isFeaturedStyle={index === 0 ? true : false}
                      key={index}
                      title={item.title}
                      image={this._getCorrectNewsImageUrlOrObject(item.imageUrl, index)}
                      author={item.authorName}
                      authorImage={this._getCorrectUserImageUrlOrObject(item.authorImageUrl)} 
                      description={item.description}
                    />
                ))
            )
          }
      </div>
    )
  }
}

const styles = {
  newsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  newItemContainer: {
    padding: '2em'
  }
}

const mapStateToProps = (state) => ({
  news: state.home.news,
  isFetchingNews: state.home.isFetchingNews,
})

const mapDispatchToProps = {
  loadNews: HomeActions.loadNews,
}

export default injectSheet(styles)(connect(mapStateToProps, mapDispatchToProps)(Home))
