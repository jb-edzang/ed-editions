import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";
import Layout from "@/Layout";

/*
Page de récupération des utilisateurs (GetUsers)
Méthode HTTP : GET pour obtenir la liste des utilisateurs depuis le serveur.
Path API : /api/users.
*/

const GetUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/users");
        setUsers(response.data);
        console.log("Fetched users:", response.data);
        // Gérer la réponse du serveur
      } catch (error) {
        console.error("Fetch failed:", error);
        // Gérer les erreurs
      }
    };

    fetchData();
  }, []);

  return (
    <Layout>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.user}</li>
          // Personnalisez l'affichage des données des utilisateurs selon votre structure de données
        ))}
      </ul>
    </Layout>
  );
};

export default GetUsers;
