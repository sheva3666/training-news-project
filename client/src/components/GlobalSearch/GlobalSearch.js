import { useState } from "react";
import Form from "../common/Form/Form";
import News from "../News/News";
import { useStyles } from "./style";
import { gql, useQuery } from "@apollo/client";

const GET_FILTERED_NEWS = gql`
  query GetSearchNews($searchItem: String!) {
    getSearchNews(searchItem: $searchItem) {
      response {
        docs {
          web_url
          abstract
          pub_date
          headline {
            main
          }
        }
      }
    }
  }
`;

const GlobalSearch = () => {
  const [searchItem, setSearchItem] = useState("");
  const { data, loading, error } = useQuery(GET_FILTERED_NEWS, {
    variables: { searchItem: searchItem },
  });

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Form setSearchItem={setSearchItem} />
      <News
        currentCategory={searchItem}
        currentNews={data?.getSearchNews?.response?.docs}
        loadinNews={loading}
        newsError={error}
      />
    </div>
  );
};

export default GlobalSearch;
