import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import * as HomeActions from './HomeActions'
import { Link } from 'react-router-dom'
import NewsItem from './components/NewsItem'

class Home extends PureComponent {
  
  componentWillMount() {
    this.props.loadNews()
  }
  
  render() {
    const { isFetchingNews, news } = this.props
    return (
      <div style={styles.newsContainer}>
          {
            isFetchingNews ? (
              <p>Carregando ...</p>
            ) : (
                news.map((item, index) => (
                  <div style={styles.newItemContainer}>
                    <NewsItem 
                      key={index}
                      title={item.title}
                      image={item.imageUrl}
                      author={item.authorName}
                      authorImage={item.authorImageUrl} 
                      description={item.description}
                    />
                  </div>
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
    flexWrap: 'wrap'
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

export default connect(mapStateToProps, mapDispatchToProps)(Home)
