import { useState } from "react";

const useTouggleCategories = () => {
  const [currentCategory, setCurrentCategory] = useState({
    section: "home",
  });

  const onChangeCategory = (category) => {
    setCurrentCategory({ ...currentCategory, section: category });
  };
  return { onChangeCategory, currentCategory };
};

export default useTouggleCategories;
