import React from "react";

const Movie = ({ movie }) => {
  const {
    id,
    original_title,
    overview,
    popularity,
    title,
    vote_average,
    poster_path,
    backdrop_path,
  } = movie;
  return (
    <div className="card">
      <img src={`https://image.tmdb.org/t/p/w200/${poster_path}`} />
      <div className="card-body">
        <h3 className="card-title">
          {title.length < 20 ? `${title}` : `${title.substring(0, 20)}..`}
        </h3>
      </div>
    </div>
  );
};

export default Movie;
