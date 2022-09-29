import React from "react";
import useStyles from "./style";

const SecondTitle = ({ title }) => {
  const classes = useStyles();

  return <h2 className={classes.title}>{title}</h2>;
};

export default SecondTitle;
