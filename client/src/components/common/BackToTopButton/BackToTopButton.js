import React, { useState, useEffect } from "react";
import { useStyles } from "./style";

const BackToTopButton = () => {
  const [onTop, setOnTop] = useState(true);

  const classes = useStyles();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 200 ? setOnTop(true) : setOnTop(false);
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <div>
      {onTop && (
        <button onClick={() => scrollUp()} className={classes.button}>
          Up
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;
