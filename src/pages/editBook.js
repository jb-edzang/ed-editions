import { useAuth } from "@/context/AuthContext";
import React, { useState } from "react";
import Layout from "@/Layout";
import { createBook } from "@/services/bookApi";
import { useRouter } from "next/router";

const Book = () => {
  const { userId, isAuthenticated } = useAuth();
  const [bookData, setBookData] = useState({
    title: "",
    description: "",
    publication_date: "",
    user_id: userId,
  });
  const router = useRouter();

  const handleChange = (e) => {
    setBookData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.name === "user_id" ? userId : e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isAuthenticated || !userId) {
      router.push("/signInForm");
      return;
    }

    const { title, description, publication_date } = bookData;

    if (!title || !description || !publication_date) {
      console.error("Veuillez remplir tous les champs du livre.");
      return;
    }

    try {
      await createBook({
        title,
        description,
        publication_date,
        user_id: userId,
      });

      console.log("Book created");
      setBookData({
        title: "",
        description: "",
        publication_date: "",
      });
      router.push("/");
    } catch (error) {
      console.error("Error during book creation:", error);
    }
  };

  return (
    <Layout className="flex justify-center items-center min-h-screen">
      <div className="w-full md:w-1/2 lg:w-1/3 p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-center">Create Book</h1>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input type="hidden" name="user_id" value={userId} />

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

export default Book;
