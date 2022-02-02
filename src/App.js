/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useState } from "react";
import tmdb from "./tmdb";
import './App.css'
import MovieRow from './components/MovieRow'


export default () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const load = async () => {
      let list = await tmdb.getHomeList();
      setMovieList(list);
    };
    load();
  }, []);

  return (
    <div className="page">
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  );
}
