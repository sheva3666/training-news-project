import React, { useState } from "react";
import { useStyles } from "./style";

const Form = ({ setSearchItem }) => {
  const [searchText, setSearchText] = useState("");
  const classes = useStyles();

  // get search value and clean input
  const onSubmit = (e) => {
    e.preventDefault();
    setSearchItem(searchText);
    setSearchText("");
  };
  return (
    <div className={classes.container}>
      <form onSubmit={onSubmit} className={classes.form} action="submit">
        <input
          className={classes.input}
          onChange={(e) => setSearchText(e.target.value)}
          type="text"
          placeholder="Type yout text..."
        />
        <button className={classes.btn} type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default Form;
