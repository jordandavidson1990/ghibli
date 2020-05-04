import axios from "axios";

export function fetchFilms() {
  return axios.get("https://ghibliapi.herokuapp.com/films");
}
