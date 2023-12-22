import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import Layout from "@/Layout";

const UploadPhoto = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image_url: "",
    user_id: "", // Vous pouvez obtenir l'ID de l'utilisateur actuel à partir du contexte ou du stockage local
    price: "",
    themes: [],
    tags: [],
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/photos", formData);
      console.log("Photo uploaded!", response.data);
      // Gérer la réponse du serveur
      setFormData({
        title: "",
        description: "",
        image_url: "",
        user_id: "",
        price: "",
        themes: [],
        tags: [],
      });
    } catch (error) {
      console.error("Photo upload failed:", error);
      // Gérer les erreurs
    }
  };

  const handleThemeChange = (e) => {
    const selectedThemes = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setFormData({
      ...formData,
      themes: selectedThemes,
    });
  };

  const handleTagChange = (e) => {
    const selectedTags = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setFormData({
      ...formData,
      tags: selectedTags,
    });
  };

  return (
    <Layout className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md bg-white p-8 rounded shadow-md">
        <h1 className="text-3xl font-bold mb-6">Upload Photo</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="themes"
              className="block text-sm font-semibold mb-2"
            >
              Themes
            </label>
            <select
              id="themes"
              name="themes"
              multiple
              onChange={handleThemeChange}
              value={formData.themes}
              className="border rounded w-full h-24 p-2 focus:outline-none focus:ring focus:border-blue-300"
            >
              {/* Options des thèmes */}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="tags" className="block text-sm font-semibold mb-2">
              Tags
            </label>
            <select
              id="tags"
              name="tags"
              multiple
              onChange={handleTagChange}
              value={formData.tags}
              className="border rounded w-full h-24 p-2 focus:outline-none focus:ring focus:border-blue-300"
            >
              {/* Options des tags */}
            </select>
          </div>
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
