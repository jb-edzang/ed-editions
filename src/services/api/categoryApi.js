import axios from "axios";

const categoryApi = axios.create({
  baseURL: "https://localhost:3030/api",
});

export const getAllCategories = async () => {
  try {
    const response = await categoryApi.get("/categories");
    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error(
        "Erreur lors de la récupération des catégories :",
        err.message
      );
    }
    throw new Error(err.response?.data?.error || "Une erreur s'est produite");
  }
};

export const getCategoryById = async (categoryId) => {
  try {
    const response = await categoryApi.get(`/categories/${categoryId}`);
    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error(
        "Erreur lors de la récupération de la catégorie par ID :",
        err.message
      );
    }
    throw new Error(err.response?.data?.error || "Une erreur s'est produite");
  }
};

export const createCategory = async (newCategory) => {
  try {
    const response = await categoryApi.post("/categories", newCategory);
    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error(
        "Erreur lors de la création d'une catégorie :",
        err.message
      );
    }
    throw new Error(err.response?.data?.error || "Une erreur s'est produite");
  }
};

export const updateCategory = async (categoryId, updatedCategory) => {
  try {
    const response = await categoryApi.put(
      `/categories/${categoryId}`,
      updatedCategory
    );
    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error(
        "Erreur lors de la mise à jour de la catégorie :",
        err.message
      );
    }
    throw new Error(err.response?.data?.error || "Une erreur s'est produite");
  }
};

export const deleteCategory = async (deletedCategory) => {
  try {
    const response = await categoryApi.delete(`/categories/${deletedCategory}`);
    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error(
        "Erreur lors de la suppression de la catégorie :",
        err.message
      );
    }
    throw new Error(err.response?.data?.error || "Une erreur s'est produite");
  }
};

export default categoryApi;
