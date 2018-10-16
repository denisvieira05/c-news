import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import * as HomeActions from './HomeActions'
import NewsItem from './components/NewsItem'
import injectSheet from 'react-jss'
import { news01, news02, news03, userImg } from '../../assets/Images'
import { ClipLoader } from 'react-spinners';
import Colors from '../../assets/Colors'

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
    console.log('')
    return (
      <div>
        {isFetchingNews ? (
          <div
            className={classes.spinnerContainerStyle}>
            <ClipLoader
              sizeUnit={"px"}
              size={50}
              color={Colors.gray}
              loading={true}
            />
          </div>
          ) : (
            <div className={classes.newsContainer}>
              {
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
              }
            </div>
          )
        }
      </div>
    )
  }
}

const styles = {
  newsContainer: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: "3.313em"
  },
  newItemContainer: {
    padding: "1.875em"
  },
  spinnerContainerStyle: {
    display: "flex",
    marginTop: "5em",
    alignItems: "center",
    justifyContent: "center"
  }
};

const mapStateToProps = (state) => ({
  news: state.home.news,
  isFetchingNews: state.home.isFetchingNews,
})

const mapDispatchToProps = {
  loadNews: HomeActions.loadNews,
}

export default injectSheet(styles)(connect(mapStateToProps, mapDispatchToProps)(Home))
