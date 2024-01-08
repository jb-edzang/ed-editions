import axios from "axios";

const tagsApi = axios.create({
  baseURL: "https://localhost:3030",
});

export const getAllTags = async () => {
  try {
    const response = await tagsApi.get("/tags");
    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error("Erreur lors de la récupération des tags :", err.message);
    }
    throw new Error(err.response?.data?.error || "Une erreur s'est produite");
  }
};

export const getTagById = async (id) => {
  try {
    const response = await tagsApi.get(`/tags/${id}`);
    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error(
        "Erreur lors de la récupération du tag par ID :",
        err.message
      );
    }
    throw new Error(err.response?.data?.error || "Une erreur s'est produite");
  }
};

export const createTag = async (tagData) => {
  try {
    const response = await tagsApi.post("/tags", tagData);
    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error("Erreur lors de la création du tag :", err.message);
    }
    throw new Error(err.response?.data?.error || "Une erreur s'est produite");
  }
};

export const updateTag = async (id, updatedData) => {
  try {
    const response = await tagsApi.put(`/tags/${id}`, updatedData);
    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error("Erreur lors de la mise à jour du tag :", err.message);
    }
    throw new Error(err.response?.data?.error || "Une erreur s'est produite");
  }
};

export const deleteTag = async (id) => {
  try {
    const response = await tagsApi.delete(`/tags/${id}`);
    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error("Erreur lors de la suppression du tag :", err.message);
    }
    throw new Error(err.response?.data?.error || "Une erreur s'est produite");
  }
};

export default tagsApi;
