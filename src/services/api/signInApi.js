import axios from "axios";

const signInApi = axios.create({
  baseURL: "https://localhost:3030", // Assurez-vous d'adapter l'URL à votre API
  //timeout: 5000, // Durée d'attente maximale pour chaque requête (ms)
});

export const signInUser = async (userData) => {
  try {
    const response = await signInApi.post("/signin", userData);
    return response.data;
  } catch (error) {
    throw new Error("Sign In failed");
  }
};
