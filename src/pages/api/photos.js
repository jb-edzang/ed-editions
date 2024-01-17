import {
  getAllPhotos,
  createPhoto,
  updatePhoto,
  deletePhoto,
} from "../../services/services/photoApi";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      // Endpoint pour récupérer toutes les photos
      try {
        const photos = await getAllPhotos();
        res.status(200).json(photos);
      } catch (error) {
        res.status(500).json({ error: "Failed to retrieve photos" });
      }
      break;
    case "POST":
      // Endpoint pour créer une nouvelle photo
      try {
        const newPhoto = await createPhoto(req.body);
        res.status(201).json(newPhoto);
      } catch (error) {
        res.status(500).json({ error: "Failed to create a new photo" });
      }
      break;
    case "PUT":
      // Endpoint pour mettre à jour une photo existante
      try {
        const { id } = req.query; // Assurez-vous que votre route inclut l'ID de la photo
        const updatedPhoto = await updatePhoto(id, req.body);
        res.status(200).json(updatedPhoto);
      } catch (error) {
        res.status(500).json({ error: "Failed to update the photo" });
      }
      break;
    case "DELETE":
      // Endpoint pour supprimer une photo
      try {
        const { id } = req.query; // Assurez-vous que votre route inclut l'ID de la photo
        const deletedPhoto = await deletePhoto(id);
        res.status(200).json(deletedPhoto);
      } catch (error) {
        res.status(500).json({ error: "Failed to delete the photo" });
      }
      break;
    default:
      res.status(405).json({ message: "Method Not Allowed" });
      break;
  }
}
