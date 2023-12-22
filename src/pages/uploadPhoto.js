import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import Layout from "@/Layout";

const UploadPhoto = () => {
  const [photoData, setPhotoData] = useState({
    title: "",
    description: "",
    image_url: "",
    user_id: "", // ID de l'utilisateur (peut être obtenu à partir du contexte ou du stockage local)
    price: "",
    themes: [], // Liste des thèmes de la photo
    tags: [], // Liste des tags associés à la photo
  });

  const handleChange = (e) => {
    setPhotoData({
      ...photoData,
      [e.target.name]: e.target.value,
    });
  };

  const handleThemesChange = (e) => {
    const selectedThemes = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setPhotoData({
      ...photoData,
      themes: selectedThemes,
    });
  };

  const handleTagsChange = (e) => {
    const selectedTags = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setPhotoData({
      ...photoData,
      tags: selectedTags,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/photos", photoData);
      console.log("Uploaded photo!", response.data);
      // Gérer la réponse du serveur
    } catch (error) {
      console.error("Upload failed:", error);
      // Gérer les erreurs
    }
  };

  return (
    <Layout className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md bg-white p-8 rounded shadow-md">
        <h1 className="text-3xl font-bold mb-6">Upload Photo</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title" className="block mb-2">
            Title :
          </label>
          <input
            id="title"
            type="text"
            name="title"
            value={photoData.title}
            onChange={handleChange}
            className="border rounded w-full p-2 mb-4 focus:outline-none focus:ring focus:border-blue-300"
          />
          <label htmlFor="description" className="block mb-2">
            Description :
          </label>
          <input
            id="description"
            type="text"
            name="description"
            autoComplete="off"
            value={photoData.description}
            onChange={handleChange}
            className="border rounded w-full p-2 mb-4 focus:outline-none focus:ring focus:border-blue-300"
          />
          <label htmlFor="image_url" className="block mb-2">
            Image URL :
          </label>
          <input
            id="image_url"
            type="text"
            name="image_url"
            value={photoData.image_url}
            onChange={handleChange}
            className="border rounded w-full p-2 mb-4 focus:outline-none focus:ring focus:border-blue-300"
          />
          <label htmlFor="price" className="block mb-2">
            Price
          </label>
          <input
            id="price"
            type="text"
            name="price"
            value={photoData.price}
            onChange={handleChange}
            className="border rounded w-full p-2 mb-4 focus:outline-none focus:ring focus:border-blue-300"
          />
          <label htmlFor="themes" className="block mb-2">
            Themes (select multiple)
          </label>
          <select
            id="themes"
            name="themes"
            multiple
            onChange={handleThemesChange}
            className="border rounded w-full p-2 mb-4 focus:outline-none focus:ring focus:border-blue-300"
          >
            {/* Options pour les thèmes */}
          </select>
          <label htmlFor="tags" className="block mb-2">
            Tags (select multiple)
          </label>
          <select
            id="tags"
            name="tags"
            multiple
            onChange={handleTagsChange}
            className="border rounded w-full p-2 mb-4 focus:outline-none focus:ring focus:border-blue-300"
          >
            {/* Options pour les tags */}
          </select>
          {/* Champ pour l'ID utilisateur */}
          <input type="hidden" name="user_id" value={photoData.user_id} />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300"
          >
            Upload
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default UploadPhoto;
