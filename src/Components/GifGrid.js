import { useFetchGifs } from "../hooks/useFetchGifs";

import GifGridItem from "./GifGridItem";

const GifGrid = ({ category }) => {
  //const APIKey = "purMBIhqH6ky12aZCh1QFOKpfeOXufq2";

  const { data, loading } = useFetchGifs(category);

  //getGifs();

  return (
    <div>
      <h3>{category}</h3>
      {loading ? "Cargando..." : null}
      {
        <section id="cardContainer" className="animate__bounceInDown">
          {data.map((image) => {
            return <GifGridItem key={image.id} {...image} />;
          })}
        </section>
      }
    </div>
  );
};

export default GifGrid;
