import React from "react";

export default function FilmSelect({ films, onChange }) {
  if (!films) return "Loading...";

  const options = films.map((film) => {
    return (
      <option value={film.id} key={film.id}>
        {film.title}
      </option>
    );
  });

  const findFilmById = (id) => {
    return films.find((film) => film.id === id);
  };

  const handleChange = (e) => {
    const filmId = e.target.value;
    const foundFilm = findFilmById(filmId);
    onChange(foundFilm);
  };
  return (
    <select defaultValue="DEFAULT" onChange={handleChange}>
      <option disabled value="DEFAULT">
        Choose a film...
      </option>
      {options}
    </select>
  );
}
