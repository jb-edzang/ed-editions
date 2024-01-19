import { authUser } from "../../services/services/authApi";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const response = await authUser(req, res);
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ error: "Authentication failed" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
