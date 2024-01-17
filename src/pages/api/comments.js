import {
  getAllComments,
  createComment,
  updateComment,
  deleteComment,
} from "../../services/services/commentApi";

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const comments = await getAllComments();
        res.status(200).json(comments);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
      break;

    case "POST":
      try {
        const newComment = await createComment(req.body);
        res.status(201).json(newComment);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
      break;

    case "PUT":
      const { id } = req.query;
      try {
        const updatedComment = await updateComment(id, req.body);
        res.status(200).json(updatedComment);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
      break;

    case "DELETE":
      const { id: commentId } = req.query;
      try {
        const deletedComment = await deleteComment(commentId);
        res.status(200).json(deletedComment);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
      break;

    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
