//import axios from "axios";

import api from "@/services/api/api";

export const signUp = async (userData) => {
  try {
    const response = await api.post("/api/signUp", userData);
    return response.data;
  } catch (error) {
    throw new Error("Sign Up failed");
  }
};
