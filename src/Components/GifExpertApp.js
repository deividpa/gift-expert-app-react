import React, { useState } from "react";

import AddCategory from "./AddCategory";

const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "One Punch man",
    "Dragon Ball",
    "Naruto",
  ]);

  const handleAdd = (el) => {
    setCategories([...categories, "Hunter x Hunter"]);
  };

  return (
    <>
      <h2>GiftExpertApp - Título</h2>
      <h3>Categorías: </h3>
      <ol>
        {categories.map((el) => {
          return <li key={el}>{el}</li>;
        })}
      </ol>
      <AddCategory />
      <hr />
    </>
  );
};

export default GifExpertApp;
