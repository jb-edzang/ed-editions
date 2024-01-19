import signUpRequest from "../../services/services/signUpApi";

export default async function handler(req, res) {
  //const db = useDatabase();

  if (req.method === "POST") {
    try {
      const result = await signUpRequest(req.body);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
