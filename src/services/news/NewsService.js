import ServiceDataSource from "../ServiceDataSource";
import FakeNewsApiDataSource from "./FakeNewsApiDataSource";
import NewsApiDataSource from "./NewsApiDataSource";

class NewsService extends ServiceDataSource {
  constructor() {
    super(FakeNewsApiDataSource, NewsApiDataSource);
  }

  getNews() {
    return this.datasource().getNews();
  }
}

export default NewsService;
