import React from "react";
import { useStyles } from "./style";
import { FiltersNames } from "../../constants";
import { useNavigate } from "react-router-dom";

const Filters = ({ onChangeCategory }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const onChooseCategory = (name) => {
    onChangeCategory(name);
    navigate(`/${name === "home" ? "" : name}`);
  };

  return (
    <div className={classes.container}>
      {FiltersNames.map((name) => {
        return (
          <div
            key={name}
            onClick={() => onChooseCategory(name)}
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
