import axios from "axios";

const theyardAxios = axios.create({
  baseURL: "http://localhost:8080",
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
  },
});

export default theyardAxios;