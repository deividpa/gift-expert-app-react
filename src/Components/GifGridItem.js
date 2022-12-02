import React from "react";

const GifGridItem = ({ id, title, image }) => {
  console.log(image);
  return (
    <div className="card">
      <img src={image} alt={title} title={title} />
      <span>{title}</span>
    </div>
  );
};

export default GifGridItem;
