import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useStyles } from "./style";
import { linksCategories } from "../../constants";
import useTouggleCategories from "../../../hooks/useTouggleCategories";

const Header = ({ onSearch }) => {
  const { onChooseCategory } = useTouggleCategories();
  const classes = useStyles();
  const handleChange = (value) => {
    onSearch(value);
  };

  return (
    <div className={classes.header}>
      <Link
        onClick={() => onChooseCategory("home")}
        className={classes.navLogo}
        to={"/"}
      >
        <h6>News</h6>
      </Link>

      <div className={classes.navigation}>
        <input
          className={classes.search}
          onChange={(e) => handleChange(e.target.value)}
          type="search"
          placeholder="Search..."
          id=""
        />
        {linksCategories.map((category) => (
          <NavLink key={category} className={classes.link} to={`/globalSearch`}>
            {category}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Header;
