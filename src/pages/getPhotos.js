import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";
import Image from "next/image";
import Layout from "@/Layout";

/*
Page de récupération des photos (GetPhotos)
Méthode HTTP : GET pour obtenir la liste des photos depuis le serveur.
Path API : /api/photos.
*/

const GetPhotos = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get("/api/photos");
        setPhotos(response.data);
        console.log("Fetched photos:", response.data);
        // Gérer la réponse du serveur
      } catch (error) {
        console.error("Fetch failed:", error);
        // Gérer les erreurs
      }
    };

    fetchPhotos();
  }, []);

  return (
    <Layout>
      <h1>Photos Gallery</h1>
      <div className="photo-list">
        {photos.map((photo) => (
          <div key={photo.id}>
            <Image src={photo.image_url} alt={photo.title} />
            <p>{photo.title}</p>
            <p>{photo.comment}</p>
            <p>{photo.price}</p>
            {/* Affichez les autres détails de la photo selon votre structure de données */}
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default GetPhotos;
