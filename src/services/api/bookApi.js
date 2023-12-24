import axios from "axios";

const bookApi = axios.create({
  baseURL: "https://localhost:3030/api", // Assurez-vous de mettre la bonne URL de votre API
  //timeout: 5000, // Durée d'attente maximale pour chaque requête (ms)
});

export const getAllBooks = async () => {
  try {
    const response = await bookApi.get("/api/books");
    return response.data;
  } catch (err) {
    throw new Error(err.response.data.error);
  }
};

export const createBook = async (newBook) => {
  try {
    const response = await bookApi.post("/api/books", newBook);
    return response.data;
  } catch (err) {
    throw new Error(err.response.data.error);
  }
};

export const updateBook = async (id, updatedBook) => {
  try {
    const response = await bookApi.put(`/api/books/${id}`, updatedBook);
    return response.data;
  } catch (err) {
    throw new Error(err.response.data.error);
  }
};

export const patchBook = async (id, patchedBook) => {
  try {
    const response = await bookApi.patch(`/api/books/${id}`, patch);
    return response.data;
  } catch (err) {
    throw new Error(err.response.data.error);
  }
};

export const deleteBook = async (id) => {
  try {
    const response = await bookApi.delete(`/api/books/${id}`);
    return response.data;
  } catch (err) {
    throw new Error(err.response.data.error);
  }
};
