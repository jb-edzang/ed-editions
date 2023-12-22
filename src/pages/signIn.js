import Layout from "@/Layout";
import { useState } from "react";
import React from "react";
import "tailwindcss/tailwind.css";
import { useRouter } from "next/router";

/*
Page de connexion (SignIn)
Méthode HTTP : POST pour envoyer les données de connexion au serveur.
Objet requis : user, pwd.
Path API : /api/signin.
*/

const SignIn = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
      const response = await axios.post("/api/signin", formData);
      console.log("User signed in!", response.data);
      // Gérer la réponse,
      // stocker les informations d'authentification,
      // rediriger vers la page d'accueil
      router.push("/");
      setFormData("");
    } catch (error) {
      console.error("Signin failed:", error);
    }
  };

  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          id="pwd"
          type="password"
          name="password"
          autoComplete="off"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit">Sign In</button>
      </form>
    </Layout>
  );
};

export default SignIn;
