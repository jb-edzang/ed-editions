//import api from "@/services/api/api";

export const signInUser = async (userData) => {
  try {
    const response = await api.post("/api/signIn", userData);
    return response.data;
  } catch (error) {
    throw new Error("Sign In failed");
  }
};
