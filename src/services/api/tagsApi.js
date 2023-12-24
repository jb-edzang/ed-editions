import axios from "axios";

const tagsApi = axios.create({
  baseURL: "https://localhost:3030", // Assurez-vous d'adapter l'URL à votre API
  //timeout: 5000, // Durée d'attente maximale pour chaque requête (ms)
});

export const getAllTags = async () => {
  try {
    const response = await tagsApi.get("/tags");
    return response.data;
  } catch (err) {
    throw new Error(err.response.data.error);
  }
};

export const getTagById = async (id) => {
  try {
    const response = await tagsApi.get(`/tags/${id}`);
    return response.data;
  } catch (err) {
    throw new Error(err.response.data.error);
  }
};

export const createTag = async (tagData) => {
  try {
    const response = await tagsApi.post("/tags", tagData);
    return response.data;
  } catch (err) {
    throw new Error(err.response.data.error);
  }
};

export const updateTag = async (id, updatedData) => {
  try {
    const response = await tagsApi.put(`/tags/${id}`, updatedData);
    return response.data;
  } catch (err) {
    throw new Error(err.response.data.error);
  }
};

export const deleteTag = async (id) => {
  try {
    const response = await tagsApi.delete(`/tags/${id}`);
    return response.data;
  } catch (err) {
    throw new Error(err.response.data.error);
  }
};
