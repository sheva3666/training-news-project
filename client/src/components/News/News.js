import React, { useEffect } from "react";
import useStyles from "./style";
import { CircularProgress } from "@material-ui/core";

import NewsCard from "../common/NewsCard/NewsCard";
import Title from "../common/Title/Title";

const News = ({
  currentNews,
  loadinNews,
  newsError,
  currentCategory,
  onRedirect,
}) => {
  const classes = useStyles();

  useEffect(() => {}, [currentCategory]);

  if (loadinNews)
    return (
      <div className={classes.loader}>
        <CircularProgress />
      </div>
    );
  if (newsError) return <h2>error {newsError}</h2>;
  return (
    <div className={classes.container}>
      <Title name={currentCategory.section} />
      <div className={classes.newsBox}>
        {currentNews?.length < 1 ? (
          <p className={classes.message}>No news Found! Please try againe.</p>
        ) : (
          currentNews?.map((news) => (
            <NewsCard key={news.abstract} news={news} />
          ))
        )}
      </div>
    </div>
  );
};

export default News;
