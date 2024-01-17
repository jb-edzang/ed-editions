import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";
import Layout from "@/Layout";
import getUsersApi from "@/services/getUsersApi";

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
        const response = await getUsersApi.get("/users");
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
      <h1>Users List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <p>ID:{user.id} </p>
            <p>Username:{user.username} </p>
            <p>Email:{user.email} </p>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default GetUsers;
