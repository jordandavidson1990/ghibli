import React, { useEffect, useState } from "react";
import { fetchFilms } from "../api/requests";
import { FilmSelect, FilmDetail } from "../components";

export default function MainContainer() {
  const [films, setFilms] = useState([]);
  const [selectedFilm, setSelectedFilm] = useState({});

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    fetchFilms().then((res) => setFilms(res.data));
  }

  const handleChange = (film) => {
    setSelectedFilm(film);
  };
  return (
    <>
      <FilmSelect films={films} onChange={handleChange} />
      <FilmDetail film={selectedFilm} />
    </>
  );
}
