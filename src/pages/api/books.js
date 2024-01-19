import {
  getAllBooks,
  createBook,
  updateBook,
  deleteBook,
} from "../../services/bookApi";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      try {
        const books = await getAllBooks();
        res.status(200).json(books);
      } catch (error) {
        res.status(500).json({ error: "Failed to retrieve books" });
      }
      break;
    case "POST":
      try {
        const newBook = await createBook({
          title: req.body.title,
          description: req.body.description,
          publication_date: req.body.publication_date,
          user_id: req.body.user_id,
        });
        res.status(201).json(newBook);
      } catch (error) {
        res.status(500).json({ error: "Failed to create a new book" });
      }
      break;
    case "PUT":
      try {
        const { id } = req.query;
        const updatedBook = await updateBook(id, {
          title: req.body.title,
          description: req.body.description,
          publication_date: req.body.publication_date,
          user_id: req.body.user_id,
        });
        res.status(200).json(updatedBook);
      } catch (error) {
        res.status(500).json({ error: "Failed to update the book" });
      }
      break;
    case "DELETE":
      try {
        const { id } = req.query;
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
