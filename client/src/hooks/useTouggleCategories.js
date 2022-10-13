import { useState } from "react";
import { useNavigate } from "react-router-dom";

// This hook returns a function that
// sets the current category and redirects to the
// corresponding url, and also returns the value of
// the current category, which is later used to query data via useQuery hook.

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
