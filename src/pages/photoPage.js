import React, { useState, useEffect } from "react";
import Image from "next/image";
import Layout from "@/Layout";
import getConfig from "next/config";
import { getAllPhotos } from "@/services/photoApi";

const { publicRuntimeConfig } = getConfig();

const GetPhotos = () => {
  const [photos, setPhotos] = useState([
    "La%20Grave%20Tunnel.JPEG",
    "La%20Grave%20Tunnel.JPEG",
    "Mont%20Blanc.JPEG",
    "next%20copy.svg",
    "Touffes%20Lautaret.JPEG",
    "Virages%20neiges%20Brouillard%20NB.JPEG",
  ]);

  // useEffect(() => {
  //   // Vous pouvez appeler votre API pour obtenir la liste des photos ici
  //   const fetchPhotos = async () => {
  //     try {
  //       const response = await getAllPhotos("/api/photos");
  //       setPhotos(response.data);
  //     } catch (error) {
  //       console.error("Fetch failed:", error);
  //     }
  //   };
  //   fetchPhotos();
  // }, []);

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-8 text-center mt-4">
        Photos Gallery
      </h1>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo, index) => (
            <div key={index} className="bg-white p-4 rounded-md shadow-md">
              <Image
                src={`/photos/${photo}`}
                alt={`Photo ${index + 1}`}
                className="rounded-md mb-4"
                width={400}
                height={300}
              />
              {/* Ajoutez le reste du contenu pour chaque photo si nécessaire */}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default GetPhotos;
