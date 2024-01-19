import axios from "axios";

const bookApi = axios.create({
  baseURL: "http://localhost:3030/books",
});

export const getAllBooks = async () => {
  try {
    const response = await bookApi.get("/");
    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error("Erreur lors de la récupération des livres :", err.message);
    }
    throw new Error(err.response?.data?.error || "Une erreur s'est produite");
  }
};

export const getBook = async (bookId) => {
  try {
    const response = await bookApi.get(`/${bookId}`);
    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error("Erreur lors de la récupération du livre :", err.message);
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
    const response = await bookApi.post("/", {
      title,
      description,
      publication_date,
      user_id,
    });
    return response.data;
  } catch (err) {
    console.error("Erreur lors de la création d'un livre :", err.message);
    console.error("Error response:", err.response);
    throw new Error(err.response?.data?.error || "Une erreur s'est produite");
  }
};
export const updateBook = async (
  bookId,
  { title, description, publication_date, user_id }
) => {
  try {
    const response = await bookApi.put(`/${bookId}`, {
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
  bookId,
  { title, description, publication_date, user_id }
) => {
  try {
    const response = await bookApi.patch(`/${bookId}`, {
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

export const deleteBook = async (bookId) => {
  try {
    const response = await bookApi.delete(`/${bookId}`);
    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error("Erreur lors de la suppression du livre :", err.message);
    }
    throw new Error(err.response?.data?.error || "Une erreur s'est produite");
  }
};

export default bookApi;
