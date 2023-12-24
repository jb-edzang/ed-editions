import axios from "axios";

const categoryApi = axios.create({
  baseURL: "https://localhost:3030/api", // Assurez-vous de mettre la bonne URL de votre API
  //timeout: 5000, // Durée d'attente maximale pour chaque requête (ms)
});

export const getAllCategories = async () => {
  try {
    const response = await categoryApi.get("/categories");
    return response.data;
  } catch (err) {
    throw new Error(err.response.data.error);
  }
};

export const getCategoryById = async (categoryId) => {
  try {
    const response = await categoryApi.get(`/categories/${categoryId}`);
    return response.data;
  } catch (err) {
    throw new Error(err.response.data.error);
  }
};

export const createCategory = async (newCategory) => {
  try {
    const response = await categoryApi.post("/categories", newCategory);
    return response.data;
  } catch (err) {
    throw new Error(err.response.data.error);
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
    throw new Error(err.response.data.error);
  }
};

export const deleteCategory = async (deletedCategory) => {
  try {
    const response = await categoryApi.delete(`/categories/${deletedCategory}`);
    return response.data;
  } catch (err) {
    throw new Error(err.response.data.error);
  }
};
