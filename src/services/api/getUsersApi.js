import axios from "axios";

const getUsersApi = axios.create({
  baseURL: "https://localhost:3030", // Assurez-vous d'adapter l'URL à votre API
  //timeout: 5000, // Durée d'attente maximale pour chaque requête (ms)
});

export const getUsers = async () => {
  try {
    const response = await getUsersApi.get("/users");
    return response.data;
  } catch (err) {
    throw new Error(err.response.data.error);
  }
};

export const createUser = async (userData) => {
  try {
    const response = await getUsersApi.post("/users", userData);
    return response.data;
  } catch (err) {
    throw new Error(err.response.data.error);
  }
};

export const updateUser = async (id, updatedData) => {
  try {
    const response = await getUsersApi.put(`/users/${id}`, updatedData);
    return response.data;
  } catch (err) {
    throw new Error(err.response.data.error);
  }
};

export const deleteUser = async (id) => {
  try {
    const response = await getUsersApi.delete(`/users/${id}`);
    return response.data;
  } catch (err) {
    throw new Error(err.response.data.error);
  }
};
