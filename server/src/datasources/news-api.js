const { RESTDataSource } = require("apollo-datasource-rest");
const { API_KEY } = require("../config");

class NewsApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `https://api.nytimes.com`;
  }

  getTopNews() {
    return this.get(`/svc/topstories/v2/home.json?api-key=${API_KEY}`);
  }

  getFilteredNews(section) {
    return this.get(`/svc/topstories/v2/${section}.json?api-key=${API_KEY}`);
  }

  getSearchNews(searchItem) {
    return this.get(
      `/svc/search/v2/articlesearch.json?q=${searchItem}&api-key=${API_KEY}`
    );
  }
}

module.exports = NewsApi;
