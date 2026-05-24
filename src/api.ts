import axios from "axios";

const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2"
});

export default api;

export const getApiPath = (url: string) =>
  url.replace("https://pokeapi.co/api/v2", "");
