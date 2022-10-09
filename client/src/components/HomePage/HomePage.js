import { useEffect } from "react";
import Filters from "../common/Filters/Filters";
import News from "../News/News";
import { useStyles } from "./style";
import useSearch from "../../hooks/useSearch";
import { gql, useQuery } from "@apollo/client";
import useTouggleCategories from "../../hooks/useTouggleCategories";

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

const HomePage = ({ searchInput, category }) => {
  const { onChangeCategory, currentCategory } = useTouggleCategories();
  const { data, loading, error } = useQuery(GET_FILTERED_NEWS, {
    variables: { section: currentCategory.section },
  });

  useEffect(() => {
    onChangeCategory(category);
  }, []);

  const [filteredNews] = useSearch(data, searchInput);

  const classes = useStyles();

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
