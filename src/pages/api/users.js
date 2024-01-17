import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} from "../../services/userApi";

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const users = await getUsers();
        res.status(200).json(users);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
      break;
    case "POST":
      try {
        const { username, email, pwdHash, user_id } = req.body;

        // Vérifiez que tous les champs nécessaires sont présents dans le corps de la requête
        if (!username || !email || !pwdHash || !user_id) {
          return res
            .status(400)
            .json({ error: "Tous les champs sont obligatoires" });
        }

        // Créez un objet contenant uniquement les champs nécessaires pour le modèle Objection
        const userObject = { username, email, pwdHash, user_id };

        const newUser = await createUser(userObject);
        res.status(201).json(newUser);
      } catch (error) {
        console.error("Erreur lors de la création de l'utilisateur:", error);
        res.status(500).json({
          error: "Erreur serveur lors de la création de l'utilisateur",
        });
      }
      break;
    case "PUT":
      try {
        const { id, username, email, pwdHash, user_id } = req.body;

        // Vérifiez que tous les champs nécessaires sont présents dans le corps de la requête
        if (!id || !username || !email || !pwdHash || !user_id) {
          return res
            .status(400)
            .json({ error: "Tous les champs sont obligatoires" });
        }

        // Créez un objet contenant uniquement les champs nécessaires pour le modèle Objection
        const updatedUser = await updateUser({
          id,
          username,
          email,
          pwdHash,
          user_id,
        });
        res.status(200).json(updatedUser);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
      break;
    case "DELETE":
      try {
        const { id } = req.body;

        // Vérifiez que l'ID est présent dans le corps de la requête
        if (!id) {
          return res.status(400).json({ error: "L'ID est obligatoire" });
        }

        const deletedUser = await deleteUser({ id });
        res.status(200).json(deletedUser);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
      break;
    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
