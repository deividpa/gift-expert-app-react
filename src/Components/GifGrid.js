import React, { useState, useEffect } from "react";

import GifGridItem from "./GifGridItem";

const GifGrid = ({ category }) => {
  //const APIKey = "purMBIhqH6ky12aZCh1QFOKpfeOXufq2";

  const [images, setImages] = useState([]);

  useEffect(() => {
    getGifs();
  }, []);

  const getGifs = async () => {
    const url =
      "https://api.giphy.com/v1/gifs/search?q=Rick y morty&limit=10&api_key=purMBIhqH6ky12aZCh1QFOKpfeOXufq2";

    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        image: img.images?.downsized_medium.url,
      };
    });

    console.log(gifs);
    setImages(gifs);
  };

  //getGifs();

  return (
    <div>
      <h3>{category}</h3>
      {images.map((image) => {
        return <GifGridItem key={image.id} {...image} />;
      })}
    </div>
  );
};

export default GifGrid;
