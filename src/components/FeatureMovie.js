/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./FeatureMovie.css";
export default ({ item }) => {

      let genres = [];

      for(let i in item.genres){
        genres.push(item.genres[i].name);
      }

   console.log(genres);
  return (
    <section
      className="featured"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
      }}
    >
      <div className="featured--vertical">
        <div className="featured--horizontal">
          <div className="logo-netflix">NETFLIX</div>
            <div className="featured--name">{item.original_name}</div>
              <div className="featured--information">
              <div className="featured--classification">{`${item.vote_average} Pontos`}</div>
              <div className="featured--data">{item.first_air_date.slice(0, 4)}</div>
              <div className="featured--seasons">{`${item.number_of_seasons} temporadas`}</div>
            </div>
          <div className="featured-description">
            <h1>{item.overview}</h1>
          </div>
           <div className="buttons">
             <a href={`/watch/${item.id}`} className="button_play"> ►Assistir</a> 
             <a href={`/list/add/${item.id}`} className="button_list"> + Minha Lista</a>
           </div>
           <div className="featured--genres"><strong>Gêneros:</strong>{genres.join(', ')}</div>


        </div>
      </div>
    </section>
  );
};
