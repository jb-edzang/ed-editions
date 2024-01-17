import {
  getAllLikes,
  //getLikeById,
  createLike,
  updateLike,
  deleteLike,
} from "../../services/services/likesApi";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      // Endpoint pour récupérer tous les likes
      try {
        const likes = await getAllLikes(req, res);
        res.status(200).json(likes);
      } catch (error) {
        res.status(500).json({ error: "Failed to retrieve likes" });
      }
      break;
    case "POST":
      // Endpoint pour créer un nouveau like
      try {
        const newLike = await createLike(req, res);
        res.status(201).json(newLike);
      } catch (error) {
        res.status(500).json({ error: "Failed to create a new like" });
      }
      break;
    case "PUT":
      // Endpoint pour mettre à jour un like existant
      try {
        const { id } = req.query; // Assurez-vous que votre route inclut l'ID du like
        const updatedLike = await updateLike(id, req.body);
        res.status(200).json(updatedLike);
      } catch (error) {
        res.status(500).json({ error: "Failed to update the like" });
      }
      break;
    case "DELETE":
      // Endpoint pour supprimer un like
      try {
        const { id } = req.query; // Assurez-vous que votre route inclut l'ID du like
        const deletedLike = await deleteLike(id);
        res.status(200).json(deletedLike);
      } catch (error) {
        res.status(500).json({ error: "Failed to delete the like" });
      }
      break;
    default:
      res.status(405).json({ message: "Method Not Allowed" });
      break;
  }
}
