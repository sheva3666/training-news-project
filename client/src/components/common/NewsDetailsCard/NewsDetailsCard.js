import React from "react";
import Image from "../Image/Image";
import SecondTitle from "../SecondTitle/SecondTitle";
import useStyles from "./style";

const NewsDetailsCard = ({ news }) => {
  const classes = useStyles();
  // get news only with images and choose which one we need
  const image = !news.multimedia
    ? ""
    : news.multimedia !== null && news.multimedia[0];
  return (
    <div className={classes.newsCard}>
      <Image image={image} />

      <div className={classes.description}>
        <SecondTitle title={news.title ? news.title : news.headline.main} />

        <p>{news.abstract}</p>

        <div className={classes.urlContainer}>
          <a href={news.url} className={classes.url}>
            Go to source
          </a>
        </div>
        <p>The article has been published: {news.byline}</p>
        <p className={classes.time}>
          Posted:
          {news.updated_date
            ? news.updated_date.slice(0, 10)
            : news.pub_date.slice(0, 10)}
        </p>
      </div>
    </div>
  );
};

export default NewsDetailsCard;
