import newsResponse from './news.json'
import NewsConverter from './NewsConverter'

class FakeNewsApiDataSource {

    getNews() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const news = new NewsConverter().mapperResponsesToEntities(newsResponse)
                
                resolve(news)
            }, 2000)
        })
    }

}

export default FakeNewsApiDataSource