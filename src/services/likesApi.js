import axios from "axios";

const likesApi = axios.create({
  baseURL: "http://localhost:3030/likes",
});

export const getAllLikes = async () => {
  try {
    const response = await likesApi.get("/likes");
    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error("Erreur lors de la récupération des likes :", err.message);
    }
    throw new Error(err.response?.data?.error || "Une erreur s'est produite");
  }
};

export const getLike = async (id) => {
  try {
    const response = await likesApi.get(`/likes/${id}`);
    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error(
        "Erreur lors de la récupération du like par ID :",
        err.message
      );
    }
    throw new Error(err.response?.data?.error || "Une erreur s'est produite");
  }
};

export const createLike = async ({ photo_id, user_id }) => {
  try {
    const response = await likesApi.post("/", { photo_id, user_id });
    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error("Erreur lors de la création du like :", err.message);
    }
    throw new Error(err.response?.data?.error || "Une erreur s'est produite");
  }
};

export const updateLike = async (id, updatedData) => {
  try {
    const response = await likesApi.put(`/likes/${id}`, updatedData);
    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error("Erreur lors de la mise à jour du like :", err.message);
    }
    throw new Error(err.response?.data?.error || "Une erreur s'est produite");
  }
};

export const deleteLike = async (id) => {
  try {
    const response = await likesApi.delete(`/likes/${id}`);
    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error("Erreur lors de la suppression du like :", err.message);
    }
    throw new Error(err.response?.data?.error || "Une erreur s'est produite");
  }
};

export default likesApi;
