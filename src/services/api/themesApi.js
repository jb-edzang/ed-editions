import axios from "axios";

const themesApi = axios.create({
  baseURL: "https://localhost:3030",
});

export const getAllThemes = async () => {
  try {
    const response = await themesApi.get("/themes");
    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error("Erreur lors de la récupération des thèmes :", err.message);
    }
    throw new Error(err.response?.data?.error || "Une erreur s'est produite");
  }
};

export const getThemeById = async (id) => {
  try {
    const response = await themesApi.get(`/themes/${id}`);
    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error(
        "Erreur lors de la récupération du thème par ID :",
        err.message
      );
    }
    throw new Error(err.response?.data?.error || "Une erreur s'est produite");
  }
};

export const createTheme = async (themeData) => {
  try {
    const response = await themesApi.post("/themes", themeData);
    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error("Erreur lors de la création du thème :", err.message);
    }
    throw new Error(err.response?.data?.error || "Une erreur s'est produite");
  }
};

export const updateTheme = async (id, updatedData) => {
  try {
    const response = await themesApi.put(`/themes/${id}`, updatedData);
    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error("Erreur lors de la mise à jour du thème :", err.message);
    }
    throw new Error(err.response?.data?.error || "Une erreur s'est produite");
  }
};

export const deleteTheme = async (id) => {
  try {
    const response = await themesApi.delete(`/themes/${id}`);
    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error("Erreur lors de la suppression du thème :", err.message);
    }
    throw new Error(err.response?.data?.error || "Une erreur s'est produite");
  }
};

export default themesApi;
