import axios from "axios";

const themesApi = axios.create({
  baseURL: "https://localhost:3030", // Assurez-vous d'adapter l'URL à votre API
  //timeout: 5000, // Durée d'attente maximale pour chaque requête (ms)
});

export const getAllThemes = async () => {
  try {
    const response = await themesApi.get("/themes");
    return response.data;
  } catch (err) {
    throw new Error(err.response.data.error);
  }
};

export const getThemeById = async (id) => {
  try {
    const response = await themesApi.get(`/themes/${id}`);
    return response.data;
  } catch (err) {
    throw new Error(err.response.data.error);
  }
};

export const createTheme = async (themeData) => {
  try {
    const response = await themesApi.post("/themes", themeData);
    return response.data;
  } catch (err) {
    throw new Error(err.response.data.error);
  }
};

export const updateTheme = async (id, updatedData) => {
  try {
    const response = await themesApi.put(`/themes/${id}`, updatedData);
    return response.data;
  } catch (err) {
    throw new Error(err.response.data.error);
  }
};

export const deleteTheme = async (id) => {
  try {
    const response = await themesApi.delete(`/themes/${id}`);
    return response.data;
  } catch (err) {
    throw new Error(err.response.data.error);
  }
};
