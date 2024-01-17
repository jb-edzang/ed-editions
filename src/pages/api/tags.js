import {
  getAllTags,
  //getTagById,
  createTag,
  updateTag,
  deleteTag,
} from "../../services/services/tagsApi";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      // Endpoint pour récupérer tous les tags
      try {
        const tags = await getAllTags(req, res);
        res.status(200).json(tags);
      } catch (error) {
        res.status(500).json({ error: "Failed to retrieve tags" });
      }
      break;
    case "POST":
      // Endpoint pour créer un nouveau tag
      try {
        const newTag = await createTag(req.body);
        res.status(201).json(newTag);
      } catch (error) {
        res.status(500).json({ error: "Failed to create a new tag" });
      }
      break;
    case "PUT":
      // Endpoint pour mettre à jour un tag existant
      try {
        const { id } = req.query; // Assurez-vous que votre route inclut l'ID du tag
        const updatedTag = await updateTag(id, req.body);
        res.status(200).json(updatedTag);
      } catch (error) {
        res.status(500).json({ error: "Failed to update the tag" });
      }
      break;
    case "DELETE":
      // Endpoint pour supprimer un tag
      try {
        const { id } = req.query; // Assurez-vous que votre route inclut l'ID du tag
        const deletedTag = await deleteTag(id);
        res.status(200).json(deletedTag);
      } catch (error) {
        res.status(500).json({ error: "Failed to delete the tag" });
      }
      break;
    default:
      res.status(405).json({ message: "Method Not Allowed" });
      break;
  }
}
