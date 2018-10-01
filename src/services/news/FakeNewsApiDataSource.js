import news from './news.json'

class FakeNewsApiDataSource {

    getNews() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(news)
            }, 2000)
        })
    }

}

export default FakeNewsApiDataSource