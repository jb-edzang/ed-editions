import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} from "../../services/api/userApi";

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
        const newUser = await createUser(req.body);
        res.status(200).json(newUser);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
      break;
    case "PUT":
      try {
        const updatedUser = await updateUser(req.body);
        res.status(200).json(updatedUser);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
      break;
    case "DELETE":
      try {
        const deletedUser = await deleteUser(req.body);
        res.status(200).json(deletedUser);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
      break;
    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
