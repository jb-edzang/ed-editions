/*import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:3030", // Assurez-vous de mettre la bonne URL de votre API
  //timeout: 5000, // Durée d'attente maximale pour chaque requête (ms)
});*/

export const getAllComments = async () => {
  try {
    const response = await api.get("/comments");
    return response.data;
  } catch (err) {
    throw new Error(err.response.data.error);
  }
};

export const createComment = async (commentData) => {
  try {
    const response = await api.post("/comments", commentData);
    return response.data;
  } catch (err) {
    throw new Error(err.response.data.error);
  }
};

export const updateComment = async (commentId, commentData) => {
  try {
    const response = await api.put(`/comments/${commentId}`, commentData);
    return response.data;
  } catch (err) {
    throw new Error(err.response.data.error);
  }
};

export const deleteComment = async (commentId) => {
  try {
    const response = await api.delete(`/comments/${commentId}`);
    return response.data;
  } catch (err) {
    throw new Error(err.response.data.error);
  }
};
