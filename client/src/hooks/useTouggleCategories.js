import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useTouggleCategories = () => {
  const [currentCategory, setCurrentCategory] = useState({
    section: "home",
  });

  const navigate = useNavigate();

  const onChangeCategory = (category) => {
    setCurrentCategory({ ...currentCategory, section: category });
    navigate(`/${category === "home" ? "" : category}`);
  };
  return { onChangeCategory, currentCategory };
};

export default useTouggleCategories;
