import axios from "axios";

const authApi = axios.create({
  baseURL: "http://localhost:3030/auth",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
  auth: {
    username: "",
    password: "",
  },
});

export const authUser = async (userData) => {
  try {
    const response = await authApi.post("/auth", userData); // Pas besoin de /api ici si vous avez déjà la base URL configurée
    console.log(response.data);
    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error("Erreur lors de l'authentification :", err.message);
    }
    throw new Error(err.response?.data?.error || "Une erreur s'est produite");
  }
};

export default authApi;
