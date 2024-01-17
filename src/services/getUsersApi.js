import axios from "axios";

const getUsersApi = axios.create({
  baseURL: "http://localhost:3030/users",
});

export const getUsers = async () => {
  try {
    const response = await getUsersApi.get("/users");
    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error(
        "Erreur lors de la récupération des utilisateurs :",
        err.message
      );
    }
    throw new Error(err.response?.data?.error || "Une erreur s'est produite");
  }
};

export const createUser = async (userData) => {
  try {
    const response = await getUsersApi.post("/users", userData);
    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error(
        "Erreur lors de la création de l'utilisateur :",
        err.message
      );
    }
    throw new Error(err.response?.data?.error || "Une erreur s'est produite");
  }
};

export const updateUser = async (id, updatedData) => {
  try {
    const response = await getUsersApi.put(`/users/${id}`, updatedData);
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

export const deleteUser = async (id) => {
  try {
    const response = await getUsersApi.delete(`/users/${id}`);
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

export default getUsersApi;
