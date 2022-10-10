import React from "react";
import { useStyles } from "./style";
import { FiltersNames } from "../../constants";

const Filters = ({ onChangeCategory }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {FiltersNames.map((name) => {
        return (
          <div
            key={name}
            onClick={() => onChangeCategory(name)}
            className={classes.filter}
          >
            {name}
          </div>
        );
      })}
    </div>
  );
};

export default Filters;
