import axios from "axios";

const bookApi = axios.create({
  baseURL: "http://localhost:3030",
});

export const getAllBooks = async () => {
  try {
    const response = await bookApi.get("/books");
    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error("Erreur lors de la récupération des livres :", err.message);
    }
    throw new Error(err.response?.data?.error || "Une erreur s'est produite");
  }
};

export const createBook = async ({
  title,
  description,
  publication_date,
  user_id,
}) => {
  try {
    const response = await bookApi.post("/api/books", {
      title,
      description,
      publication_date,
      user_id,
    });
    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error("Erreur lors de la création d'un livre :", err.message);
      console.error("Error response:", err.response); // Ajout de ce log pour afficher la réponse d'erreur
    }
    throw new Error(err.response?.data?.error || "Une erreur s'est produite");
  }
};

export const updateBook = async (
  id,
  { title, description, publication_date, user_id }
) => {
  try {
    const response = await bookApi.put(`/books/${id}`, {
      title,
      description,
      publication_date,
      user_id,
    });
    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error("Erreur lors de la mise à jour du livre :", err.message);
    }
    throw new Error(err.response?.data?.error || "Une erreur s'est produite");
  }
};

export const patchBook = async (
  id,
  { title, description, publication_date, user_id }
) => {
  try {
    const response = await bookApi.patch(`/books/${id}`, {
      title,
      description,
      publication_date,
      user_id,
    });
    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error("Erreur lors du patch du livre :", err.message);
    }
    throw new Error(err.response?.data?.error || "Une erreur s'est produite");
  }
};

export const deleteBook = async (id) => {
  try {
    const response = await bookApi.delete(`/books/${id}`);
    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error("Erreur lors de la suppression du livre :", err.message);
    }
    throw new Error(err.response?.data?.error || "Une erreur s'est produite");
  }
};

export default bookApi;
