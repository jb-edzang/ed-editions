import axios from "axios";

const authApi = axios.create({
  baseURL: "https://localhost:3030/api", // Assurez-vous de mettre la bonne URL de votre API
  //timeout: 5000, // Durée d'attente maximale pour chaque requête (ms)
});

export const authUser = async (userData) => {
  try {
    const response = await authApi.post("/api/auth", userData);
    console.log(response.data);
    return response.data;
  } catch (err) {
    throw new Error(err.response.data.error);
  }
};
