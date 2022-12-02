import React, { useState, useEffect } from "react";
import getGifs from "../helpers/getGifs";

import GifGridItem from "./GifGridItem";

const GifGrid = ({ category }) => {
  //const APIKey = "purMBIhqH6ky12aZCh1QFOKpfeOXufq2";

  const [images, setImages] = useState([]);

  useEffect(() => {
    getGifs(category).then((imgs) => setImages(imgs));
  }, []);

  //getGifs();

  return (
    <div>
      <h3>{category}</h3>
      <section id="cardContainer">
        {images.map((image) => {
          return <GifGridItem key={image.id} {...image} />;
        })}
      </section>
    </div>
  );
};

export default GifGrid;
