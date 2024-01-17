import axios from "axios";

const signUpApi = axios.create({
  baseURL: "http://localhost:3030/signUp",
});

const signUpRequest = async (method, data) => {
  try {
    let response;
    switch (method) {
      case "post":
        response = await signUpApi.post("/api/signUp", data);
        break;
      case "get":
        response = await signUpApi.get("/api/signUp");
        break;
      case "put":
        response = await signUpApi.put("/api/signUp", data);
        break;
      case "delete":
        response = await signUpApi.delete("/api/signUp");
        break;
      default:
        throw new Error("Invalid method");
    }
    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error(
        `Erreur lors de la requête ${method.toUpperCase()} :`,
        err.message
      );
    }
    throw new Error(err.response?.data?.error || "Une erreur s'est produite");
  }
};

export default signUpRequest;
