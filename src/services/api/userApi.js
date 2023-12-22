/*import axios from "axios";
const bcrypt = require("bcrypt");

const api = axios.create({
  baseURL: "https://localhost:3030", // Assurez-vous de mettre la bonne URL de votre API
  //timeout: 5000, // Durée d'attente maximale pour chaque requête (ms)
}); */

export const createUser = async (userData) => {
  const { user, email, pwd } = userData;

  try {
    const hashedPassword = await bcrypt.hash(pwd, 10); // Hash du mot de passe

    const response = await api.post("/users", {
      user,
      email,
      pwd: hashedPassword,
    });

    // Traitez ici les tokens s'ils doivent être stockés ou utilisés côté client

    return response.data;
  } catch (err) {
    throw new Error(err.response.data.error);
  }
};
