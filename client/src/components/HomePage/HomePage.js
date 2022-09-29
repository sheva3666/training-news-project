import { useState } from "react";
import Filters from "../common/Filters/Filters";
import News from "../News/News";
import { useStyles } from "./style";
import useSearch from "../../hooks/useSearch";
import { gql, useQuery } from "@apollo/client";

const GET_FILTERED_NEWS = gql`
  query Query($section: String!) {
    getFilteredNews(section: $section) {
      last_updated
      results {
        section
        updated_date
        multimedia {
          url
        }
        abstract
        title
      }
    }
  }
`;

const HomePage = ({ searchInput }) => {
  const [currentCategory, setCurrentCategory] = useState({ section: "home" });
  const { data, loading, error } = useQuery(GET_FILTERED_NEWS, {
    variables: { section: currentCategory.section },
  });

  const [filteredNews] = useSearch(data, searchInput);

  const classes = useStyles();

  const onChangeCategory = (name) => {
    setCurrentCategory({ ...currentCategory, section: name });
  };

  return (
    <div className={classes.container}>
      <div className={classes.leftColumn}>
        <Filters onChangeCategory={onChangeCategory} />
      </div>
      <div className={classes.rightColumn}>
        <News
          currentCategory={currentCategory}
          currentNews={filteredNews}
          loadinNews={loading}
          newsError={error}
        />
      </div>
    </div>
  );
};

export default HomePage;
