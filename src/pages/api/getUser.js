import {
  getUsers,
  //getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../../services/services/userApi";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      // Endpoint pour récupérer tous les utilisateurs
      try {
        const users = await getUsers(req, res);
        res.status(200).json(users);
      } catch (error) {
        res.status(500).json({ error: "Failed to retrieve users" });
      }
      break;
    case "POST":
      // Endpoint pour créer un nouvel utilisateur
      try {
        const newUser = await createUser(req.body);
        res.status(201).json(newUser);
      } catch (error) {
        res.status(500).json({ error: "Failed to create a new user" });
      }
      break;
    case "PUT":
      // Endpoint pour mettre à jour un utilisateur existant
      try {
        const { id } = req.query; // Assurez-vous que votre route inclut l'ID de l'utilisateur
        const updatedUser = await updateUser(id, req.body);
        res.status(200).json(updatedUser);
      } catch (error) {
        res.status(500).json({ error: "Failed to update the user" });
      }
      break;
    case "DELETE":
      // Endpoint pour supprimer un utilisateur
      try {
        const { id } = req.query; // Assurez-vous que votre route inclut l'ID de l'utilisateur
        const deletedUser = await deleteUser(id);
        res.status(200).json(deletedUser);
      } catch (error) {
        res.status(500).json({ error: "Failed to delete the user" });
      }
      break;
    default:
      res.status(405).json({ message: "Method Not Allowed" });
      break;
  }
}
