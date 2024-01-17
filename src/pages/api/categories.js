import {
  getAllCategories,
  //getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../../services/services/categoryApi";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      // Endpoint pour récupérer toutes les catégories
      try {
        const categories = await getAllCategories(req, res);
        res.status(200).json(categories);
      } catch (error) {
        res.status(500).json({ error: "Failed to retrieve categories" });
      }
      break;
    case "POST":
      // Endpoint pour créer une nouvelle catégorie
      try {
        const newCategory = await createCategory(req.body);
        res.status(201).json(newCategory);
      } catch (error) {
        res.status(500).json({ error: "Failed to create a new category" });
      }
      break;
    case "PUT":
      // Endpoint pour mettre à jour une catégorie existante
      try {
        const { id } = req.query; // Assurez-vous que votre route inclut l'ID de la catégorie
        const updatedCategory = await updateCategory(id, req.body);
        res.status(200).json(updatedCategory);
      } catch (error) {
        res.status(500).json({ error: "Failed to update the category" });
      }
      break;
    case "DELETE":
      // Endpoint pour supprimer une catégorie
      try {
        const { id } = req.query; // Assurez-vous que votre route inclut l'ID de la catégorie
        const deletedCategory = await deleteCategory(id);
        res.status(200).json(deletedCategory);
      } catch (error) {
        res.status(500).json({ error: "Failed to delete the category" });
      }
      break;
    default:
      res.status(405).json({ message: "Method Not Allowed" });
      break;
  }
}
