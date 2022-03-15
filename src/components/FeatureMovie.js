/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./FeatureMovie.css";
export default ({ item }) => {
  return (
    <section
      className="featured"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
      }}
    >
      <div className="featured--vertical">
        <div className="featured--horizontal">
          <div className="featured--information">
            <div className="featured--name">{item.original_name}</div>
            <div className="featured--classification">{`${item.vote_average} Pontos`}</div>
            <div className="featured--data">{item.first_air_date.slice(0, 4)}</div>
            <div className="featured--seasons">{`${item.number_of_seasons} temporadas`}</div>
          </div>
        </div>
      </div>
    </section>
  );
};
