import axios from "axios";

const signUpApi = axios.create({
  baseURL: "https://localhost:3030/api",
  //timeout: 5000, // Durée d'attente maximale pour chaque requête (ms)
});

export const signUp = async (userData) => {
  try {
    const response = await signUpApi.post("/api/signup", userData);
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error("Sign Up failed");
  }
};
