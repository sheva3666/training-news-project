import React from "react";
import useStyles from "./style";

const Title = ({ name, date }) => {
  const classes = useStyles();
  return (
    <div className={classes.topTitle}>
      <h2>{name}</h2>
    </div>
  );
};

export default Title;
