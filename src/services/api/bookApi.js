/*import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:3030", // Assurez-vous de mettre la bonne URL de votre API
  //timeout: 5000, // Durée d'attente maximale pour chaque requête (ms)
});*/

export const getAllBooks = async () => {
  try {
    const response = await api.get("/books");
    return response.data;
  } catch (err) {
    throw new Error(err.response.data.error);
  }
};

export const createBook = async (bookData) => {
  try {
    const response = await api.post("/books", bookData);
    return response.data;
  } catch (err) {
    throw new Error(err.response.data.error);
  }
};

export const updateBook = async (id, bookData) => {
  try {
    const response = await api.put(`/books/${id}`, bookData);
    return response.data;
  } catch (err) {
    throw new Error(err.response.data.error);
  }
};

export const patchBook = async (id, bookData) => {
  try {
    const response = await api.patch(`/books/${id}`, bookData);
    return response.data;
  } catch (err) {
    throw new Error(err.response.data.error);
  }
};

export const deleteBook = async (id) => {
  try {
    const response = await api.delete(`/books/${id}`);
    return response.data;
  } catch (err) {
    throw new Error(err.response.data.error);
  }
};
