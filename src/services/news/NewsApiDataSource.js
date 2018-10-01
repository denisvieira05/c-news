import ApiDataSource from '../ApiDataSource'
import NewsConverter from './NewsConverter'
import * as firebase from "firebase";

class NewsApiDataSource extends ApiDataSource {

    getNews() {
        return new Promise((resolve, reject) => {
            firebase.database().ref('/news').once('value')
                .then((snapshot) => {
                    let news = []
                    if (snapshot.val()) {
                        const newsResponse = Object.values(snapshot.val())
                        news = new NewsConverter().mapperResponsesToEntities(newsResponse)
                    }
                    resolve(news)
                })
        })
    }
}

export default NewsApiDataSource