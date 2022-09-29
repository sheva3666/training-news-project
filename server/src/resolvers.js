const resolvers = {
  Query: {
    getTopNews: (_, __, { dataSources }) => {
      return dataSources.newsAPI.getTopNews();
    },
    getFilteredNews: (_, { section }, { dataSources }) => {
      return dataSources.newsAPI.getFilteredNews(section);
    },
    getSearchNews: (_, { searchItem }, { dataSources }) => {
      return dataSources.newsAPI.getSearchNews(searchItem);
    },
  },
};

module.exports = resolvers;
