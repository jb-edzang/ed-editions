import { useAuth } from "@/context/AuthContext";
import React, { useState } from "react";
import Layout from "@/Layout";
import "tailwindcss/tailwind.css";
import { createBook } from "@/services/api/bookApi";
import { useRouter } from "next/router";

const Book = () => {
  const router = useRouter();
  const { userId, isAuthenticated } = useAuth();
  const [bookData, setBookData] = useState({
    title: "",
    description: "",
    publication_date: "",
    user_id: userId,
  });

  const handleChange = (e) => {
    setBookData({
      ...bookData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // vérification de l'authentification avant de créer le livre
    // if (!isAuthenticated || !userId) {
    //   // Redirection vers la page de connexion ou d'inscription
    //   router.push("/signUpForm"); // ou router.push("/signUpForm");
    //   return;
    // }

    const { title, description, publication_date, user_id } = req.body;

    if (!title || !description || !publication_date || !user_id) {
      console.error("Veuillez remplir tous les champs du livre.");
      return;
    }

    const newBook = {
      title,
      user_id,
      description,
      publication_date,
    };

    try {
      const response = await createBook("/api/books", newBook);
      console.log("Book created!", response);
      // Gérer la réussite de la création du livre
    } catch (error) {
      console.error("Book creation failed:", error);
      // Gérer l'échec de la création du livre
    }
  };

  return (
    <Layout className="flex justify-center items-center min-h-screen">
      <div className="w-full md:w-1/2 lg:w-1/3 p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-center">Create Book</h1>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          {/* Input de type hidden pour stocker userId */}
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
