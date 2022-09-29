import React from "react";
import useStyles from "./style";

const Image = ({ image }) => {
  const classes = useStyles();
  return (
    <div className={classes.imageContainer}>
      <img className={classes.img} src={image.url} alt="" />
    </div>
  );
};

export default Image;
