import React, { useState } from "react";

import AddCategory from "./AddCategory";
import GifGrid from "./GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Dragon Ball"]);

  return (
    <>
      <h2>GiftExpertApp - Título</h2>
      <h3>Categorías: </h3>
      <ol>
        {categories.map((cat) => (
          <GifGrid key={cat} category={cat} />
        ))}
        <AddCategory setCategories={setCategories} />
      </ol>
      <hr />
    </>
  );
};

export default GifExpertApp;
