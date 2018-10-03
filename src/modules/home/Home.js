import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import * as HomeActions from './HomeActions'
import { Link } from 'react-router-dom'
import GeneralHeader from '../../components/GeneralHeader'

class Home extends PureComponent {
  
  componentWillMount() {
    this.props.loadNews()
  }
  
  render() {
    const { isFetchingNews, news } = this.props
    return (
      <div>
        <GeneralHeader />
        <h1>TESTE HOME</h1>
          {
            isFetchingNews ? (
              <p>Carregando ...</p>
            ) : (
              <div>
              {
                news.map((item, index) => (
                  <p key={index}>{item.title}</p>
                ))
              }
              </div>
            )
          }
      </div>
    )
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
