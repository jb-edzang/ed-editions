import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:3030",
  //timeout: 5000, // Durée d'attente maximale pour chaque requête (ms)
});

export default api;
