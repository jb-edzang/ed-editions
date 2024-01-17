import axios from "axios";

const photoApi = axios.create({
  baseURL: "http://localhost:3030/photos", // Assurez-vous d'adapter l'URL à votre API
});

export const getAllPhotos = async () => {
  try {
    const response = await photoApi.get("/photos");
    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error("Erreur lors de la récupération des photos :", err.message);
    }
    throw new Error(err.response?.data?.error || "Une erreur s'est produite");
  }
};

export const createPhoto = async ({
  id,
  title,
  description,
  image_url,
  user_id,
  created_at,
  updated_at,
  price,
}) => {
  try {
    const response = await photoApi.post("/", {
      id,
      title,
      description,
      image_url,
      user_id,
      created_at,
      updated_at,
      price,
    });
    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error("Erreur lors de la création de la photo :", err.message);
    }
    throw new Error(err.response?.data?.error || "Une erreur s'est produite");
  }
};

export const updatePhoto = async (id, updatedData) => {
  try {
    const response = await photoApi.put(`/photos/${id}`, updatedData);
    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error("Erreur lors de la mise à jour de la photo :", err.message);
    }
    throw new Error(err.response?.data?.error || "Une erreur s'est produite");
  }
};

export const deletePhoto = async (id) => {
  try {
    const response = await photoApi.delete(`/photos/${id}`);
    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error("Erreur lors de la suppression de la photo :", err.message);
    }
    throw new Error(err.response?.data?.error || "Une erreur s'est produite");
  }
};

export default photoApi;
