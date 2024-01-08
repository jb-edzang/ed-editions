import axios from "axios";
import bcrypt from "bcrypt"; // Utilisation de l'import ES6 pour bcrypt

const userApi = axios.create({
  baseURL: "https://localhost:3030", // Assurez-vous de mettre la bonne URL de votre API
});

export const createUser = async (userData) => {
  const { user, email, pwd } = userData;

  try {
    const hashedPassword = await bcrypt.hash(pwd, 10); // Hash du mot de passe

    const response = await userApi.post("/users", {
      user,
      email,
      pwd: hashedPassword,
    });

    // Traitez ici les tokens s'ils doivent être stockés ou utilisés côté client

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
