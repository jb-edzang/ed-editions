import axios from "axios";

const commentApi = axios.create({
  baseURL: "https://localhost:3030",
});

export const getAllComments = async () => {
  try {
    const response = await commentApi.get("/comments");
    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error(
        "Erreur lors de la récupération des commentaires :",
        err.message
      );
    }
    throw new Error(err.response?.data?.error || "Une erreur s'est produite");
  }
};

export const createComment = async (commentData) => {
  try {
    const response = await commentApi.post("/comments", commentData);
    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error("Erreur lors de la création du commentaire :", err.message);
    }
    throw new Error(err.response?.data?.error || "Une erreur s'est produite");
  }
};

export const updateComment = async (commentId, commentData) => {
  try {
    const response = await commentApi.put(
      `/comments/${commentId}`,
      commentData
    );
    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error(
        "Erreur lors de la mise à jour du commentaire :",
        err.message
      );
    }
    throw new Error(err.response?.data?.error || "Une erreur s'est produite");
  }
};

export const deleteComment = async (commentId) => {
  try {
    const response = await commentApi.delete(`/comments/${commentId}`);
    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error(
        "Erreur lors de la suppression du commentaire :",
        err.message
      );
    }
    throw new Error(err.response?.data?.error || "Une erreur s'est produite");
  }
};

export default commentApi;
