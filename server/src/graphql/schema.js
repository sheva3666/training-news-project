const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    #get last news
    getTopNews: News
    #get news by filter categories
    getFilteredNews(section: String!): News
    #get searched news
    getSearchNews(searchItem: String!): SearchNews
  }

  type News {
    copyright: String
    last_updated: String
    num_results: Int
    results: [Story!]!
    section: String
  }

  type SearchNews {
    copyright: String
    response: Stories
    status: String
  }

  type Stories {
    docs: [SearchStory]
    meta: Meta
  }

  type Meta {
    hits: Int
    offset: Int
    time: Int
  }

  type SearchStory {
    abstract: String
    byline: String
    document_type: String
    headline: Title
    pub_date: String
    des_facet: [Facet]
    geo_facet: [Location]
    item_type: String
    kicker: String
    material_type_facet: String
    multimedia: [Image]
    web_url: String
  }

  type Title {
    content_kicker: String
    kicker: String
    main: String
    name: String
    print_headline: String
    seo: String
    sub: String
  }
  type Story {
    abstract: String
    byline: String
    created_date: String
    des_facet: [Facet]
    geo_facet: [Location]
    item_type: String
    kicker: String
    material_type_facet: String
    multimedia: [Image]
    org_facet: [Organization]
    per_facet: [Person]
    published_date: String
    section: String
    short_url: String
    subsection: String
    title: String!
    updated_date: String
    uri: String
    url: String
  }

  type Facet {
    Facet: String
  }

  type Location {
    location: String
  }

  type Image {
    caption: String
    copyright: String
    format: String
    height: Int
    subtype: String
    type: String
    url: String
    width: Int
  }

  type Organization {
    organization: String
  }

  type Person {
    person: String
  }
`;

module.exports = typeDefs;
