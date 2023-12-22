import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import Layout from "@/Layout";

const CreateComment = () => {
  const [commentData, setCommentData] = useState({
    photo_id: "",
    user_id: "",
    content: "",
  });

  const handleChange = (e) => {
    setCommentData({
      ...commentData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCommentData("");
    try {
      const response = await axios.post("/api/comments", commentData);
      console.log("Comment created!", response.data);
      setCommentData({ ...commentData, content: "" }); // Réinitialisation du champ du commentaire après soumission
      // Gérer la réponse du serveur, rediriger ou effectuer d'autres actions
    } catch (error) {
      console.error("Comment creation failed:", error);
      // Gérer les erreurs
    }
  };

  return (
    <Layout className="flex justify-center items-center h-screen">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md mx-auto mt-10">
        <h1 className="text-3xl font-bold mb-4 text-center">Create Comment</h1>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label htmlFor="content" className="mb-2 text-gray-700">
            Comment
          </label>
          <textarea
            id="content"
            name="content"
            placeholder="Your comment..."
            value={commentData.content}
            onChange={handleChange}
            className="border rounded-md px-3 py-2 mb-4 h-32 resize-none"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Post Comment
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default CreateComment;
