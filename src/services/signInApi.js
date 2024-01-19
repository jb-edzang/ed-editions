import axios from "axios";

const signInApi = axios.create({
  baseURL: "http://localhost:3030/signin",
});

export const signInUser = async (userData) => {
  try {
    const response = await signInApi.post("/signin", userData);
    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error(
        "Erreur lors de la connexion de l'utilisateur :",
        err.message
      );
    }
    throw new Error(err.response?.data?.error || "Une erreur s'est produite");
  }
};

export const getUser = async (userId) => {
  try {
    const response = await signInApi.get(`/users/${userId}`);
    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error(
        "Erreur lors de la récupération de l'utilisateur :",
        err.message
      );
    }
    throw new Error(err.response?.data?.error || "Une erreur s'est produite");
  }
};

export const updateUser = async (userId, updatedUserData) => {
  try {
    const response = await signInApi.put(`/users/${userId}`, updatedUserData);
    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error(
        "Erreur lors de la mise à jour de l'utilisateur :",
        err.message
      );
    }
    throw new Error(err.response?.data?.error || "Une erreur s'est produite");
  }
};

export const deleteUser = async (userId) => {
  try {
    const response = await signInApi.delete(`/users/${userId}`);
    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error(
        "Erreur lors de la suppression de l'utilisateur :",
        err.message
      );
    }
    throw new Error(err.response?.data?.error || "Une erreur s'est produite");
  }
};

export default signInApi;
