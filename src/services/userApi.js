import axios from "axios";
import bcrypt from "bcryptjs";

const userApi = axios.create({
  baseURL: "http://localhost:3030/users",
});

export const createUser = async ({ username, email, pwdHash }) => {
  try {
    const hashedPassword = await bcrypt.hash(pwdHash, 10);

    const response = await userApi.post("/", {
      username,
      email,
      pwdHash: hashedPassword,
    });

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

export const getUsers = async (userId) => {
  try {
    const response = await userApi.get(`/users/${userId}`);
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

export const getUser = async (userId) => {
  try {
    const response = await userApi.get(`/users/${userId}`);
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
    const response = await userApi.put(`/users/${userId}`, updatedUserData);
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
    const response = await userApi.delete(`/users/${userId}`);
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

export default userApi;
