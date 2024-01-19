import {
  getAllThemes,
  //getThemeById,
  createTheme,
  updateTheme,
  deleteTheme,
} from "../../services/services/themesApi";

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const themes = await getAllThemes();
        res.status(200).json(themes);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
      break;
    case "POST":
      try {
        const newTheme = await createTheme(req.body);
        res.status(200).json(newTheme);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
      break;
    case "PUT":
      try {
        const updatedTheme = await updateTheme(req.body);
        res.status(200).json(updatedTheme);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
      break;
    case "DELETE":
      try {
        const deletedTheme = await deleteTheme(req.body);
        res.status(200).json(deletedTheme);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
      break;
    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
