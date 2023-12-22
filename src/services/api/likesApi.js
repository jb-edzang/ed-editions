/*import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:3030", // Assurez-vous d'adapter l'URL à votre API
  //timeout: 5000, // Durée d'attente maximale pour chaque requête (ms)
}); */

export const getAllLikes = async () => {
  try {
    const response = await api.get("/likes");
    return response.data;
  } catch (err) {
    throw new Error(err.response.data.error);
  }
};

export const getLikeById = async (id) => {
  try {
    const response = await api.get(`/likes/${id}`);
    return response.data;
  } catch (err) {
    throw new Error(err.response.data.error);
  }
};

export const createLike = async (likeData) => {
  try {
    const response = await api.post("/likes", likeData);
    return response.data;
  } catch (err) {
    throw new Error(err.response.data.error);
  }
};

export const updateLike = async (id, updatedData) => {
  try {
    const response = await api.put(`/likes/${id}`, updatedData);
    return response.data;
  } catch (err) {
    throw new Error(err.response.data.error);
  }
};

export const deleteLike = async (id) => {
  try {
    const response = await api.delete(`/likes/${id}`);
    return response.data;
  } catch (err) {
    throw new Error(err.response.data.error);
  }
};
