const { ApolloServer } = require("apollo-server");
const resolvers = require("./resolvers");

const NewsAPI = require("./datasources/news-api");

const typeDefs = require("./graphql/schema");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      newsAPI: new NewsAPI(),
    };
  },
});

server.listen().then(() => {
  console.log(`
    🚀  Server is running!
    🔉  Listening on port 4000
    📭  Query at http://localhost:4000
  `);
});
