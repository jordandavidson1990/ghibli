import React from "react";
import "./FilmDetail.css";

export default function FilmDetail({
  film: { title, description, director, release_date, id },
}) {
  if (!title) return null;
  return (
    <>
      <h1>{title}</h1>
      <img src={`${id}.png`} alt={title} />
      <p>Director: {director}</p>
      <p>Release Date: {release_date}</p>
      <p className="description">{description}</p>
    </>
  );
}
