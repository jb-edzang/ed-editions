import axios from "axios";

const signUpApi = axios.create({
  baseURL: "https://localhost:3030",
});

export const signUpWrapper = {
  post: async ({ username, email, pwdHash }) => {
    try {
      const response = await signUpApi.post("/api/signUp", {
        username,
        email,
        pwdHash,
      });
      return response.data;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.error("Erreur lors de la requête POST :", err.message);
      }
      throw new Error(err.response?.data?.error || "Une erreur s'est produite");
    }
  },

  get: async () => {
    try {
      const response = await signUpApi.get("/api/signUp");
      return response.data;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.error("Erreur lors de la requête GET :", err.message);
      }
      throw new Error(err.response?.data?.error || "Une erreur s'est produite");
    }
  },

  put: async (data) => {
    try {
      const response = await signUpApi.put("/api/signUp", data);
      return response.data;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.error("Erreur lors de la requête PUT :", err.message);
      }
      throw new Error(err.response?.data?.error || "Une erreur s'est produite");
    }
  },

  delete: async () => {
    try {
      const response = await signUpApi.delete("/api/signUp");
      return response.data;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.error("Erreur lors de la requête DELETE :", err.message);
      }
      throw new Error(err.response?.data?.error || "Une erreur s'est produite");
    }
  },
};

export default signUpApi;
