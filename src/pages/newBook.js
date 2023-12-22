import React, { useState } from "react";
import Layout from "@/Layout";
import "tailwindcss/tailwind.css";

const CreateBook = () => {
  const [bookData, setBookData] = useState({
    title: "",
    user_id: "",
    description: "",
    publication_date: "",
  });

  const handleChange = (e) => {
    setBookData({
      ...bookData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/books", bookData);
      console.log("Book created!", response.data);
      // Gérer la réponse du serveur, rediriger ou effectuer d'autres actions
    } catch (error) {
      console.error("Book creation failed:", error);
      // Gérer les erreurs
    }
  };

  return (
    <Layout className="flex justify-center items-center min-h-screen">
      <div className="w-full md:w-1/2 lg:w-1/3 p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-center">Create Book</h1>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <label htmlFor="title" className="text-gray-700">
            Title
          </label>
          <input
            id="title"
            type="text"
            name="title"
            placeholder="Book title"
            value={bookData.title}
            onChange={handleChange}
            className="border rounded-md px-3 py-2"
          />
          <label htmlFor="description" className="text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            placeholder="Book description..."
            value={bookData.description}
            onChange={handleChange}
            className="border rounded-md px-3 py-2"
          ></textarea>
          <label htmlFor="publication_date" className="text-gray-700">
            Publication Date
          </label>
          <input
            id="publication_date"
            type="date"
            name="publication_date"
            value={bookData.publication_date}
            onChange={handleChange}
            className="border rounded-md px-3 py-2"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Create Book
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default CreateBook;
