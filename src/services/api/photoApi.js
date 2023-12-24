import axios from "axios";

const photoApi = axios.create({
  baseURL: "https://localhost:3030", // Assurez-vous d'adapter l'URL à votre API
  //timeout: 5000, // Durée d'attente maximale pour chaque requête (ms)
});

export const getAllPhotos = async () => {
  try {
    const response = await photoApi.get("/photos");
    return response.data;
  } catch (err) {
    throw new Error(err.response.data.error);
  }
};

export const createPhoto = async (photoData) => {
  try {
    const response = await photoApi.post("/photos", photoData);
    return response.data;
  } catch (err) {
    throw new Error(err.response.data.error);
  }
};

export const updatePhoto = async (id, updatedData) => {
  try {
    const response = await photoApi.put(`/photos/${id}`, updatedData);
    return response.data;
  } catch (err) {
    throw new Error(err.response.data.error);
  }
};

export const deletePhoto = async (id) => {
  try {
    const response = await photoApi.delete(`/photos/${id}`);
    return response.data;
  } catch (err) {
    throw new Error(err.response.data.error);
  }
};
