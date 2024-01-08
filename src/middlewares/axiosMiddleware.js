import axios from "axios";

const bookApi = axios.create({
  baseURL: "https://localhost:3030/api",
  // Autres configurations d'Axios
});

export const axiosMiddleware = async (req, res, next) => {
  req.axios = bookApi;
  next();
};
