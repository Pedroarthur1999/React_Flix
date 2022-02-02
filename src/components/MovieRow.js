/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "./movieRow.css";

export default ({ title, items }) => {
  return (
    <div className="movieRow">
      <h2>{title}</h2>
      <div className="listArea">
        <div className="list">
            {items.results.length > 0 && items.results.map((item, key) => (
                <div className="poster" key={key}>
                  <img src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} />
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};
