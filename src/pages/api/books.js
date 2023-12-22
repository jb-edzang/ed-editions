import {
  getAllBooks,
  //getBookById,
  createBook,
  updateBook,
  deleteBook,
} from "../../services/api/bookApi";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      // Endpoint pour récupérer tous les livres
      try {
        const books = await getAllBooks(req, res);
        res.status(200).json(books);
      } catch (error) {
        res.status(500).json({ error: "Failed to retrieve books" });
      }
      break;
    case "POST":
      // Endpoint pour créer un nouveau livre
      try {
        const newBook = await createBook(req.body);
        res.status(201).json(newBook);
      } catch (error) {
        res.status(500).json({ error: "Failed to create a new book" });
      }
      break;
    case "PUT":
      // Endpoint pour mettre à jour un livre existant
      try {
        const { id } = req.query; // Assurez-vous que votre route inclut l'ID du livre
        const updatedBook = await updateBook(id, req.body);
        res.status(200).json(updatedBook);
      } catch (error) {
        res.status(500).json({ error: "Failed to update the book" });
      }
      break;
    case "DELETE":
      // Endpoint pour supprimer un livre
      try {
        const { id } = req.query; // Assurez-vous que votre route inclut l'ID du livre
        const deletedBook = await deleteBook(id);
        res.status(200).json(deletedBook);
      } catch (error) {
        res.status(500).json({ error: "Failed to delete the book" });
      }
      break;
    default:
      res.status(405).json({ message: "Method Not Allowed" });
      break;
  }
}
