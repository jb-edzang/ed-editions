// services/api/api.js

import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:3030/api",
  // timeout: 5000, // Durée d'attente maximale pour chaque requête (ms)
});

// Ajout d'un intercepteur pour gérer les erreurs
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (axios.isAxiosError(error)) {
      // Gérer l'erreur Axios ici
      console.error("Une erreur Axios s'est produite :", error.message);
    }
    return Promise.reject(error);
  }
);

export default api;
