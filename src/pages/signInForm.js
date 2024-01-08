import Layout from "@/Layout";
import { useState } from "react";
import React from "react";
import { useRouter } from "next/router";
import "tailwindcss/tailwind.css";

const SignInForm = () => {
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
      <div className="flex items-center justify-center min-h-screen">
        <form onSubmit={handleSubmit} className="w-full max-w-xs">
          <h1 className="text-3xl font-bold text-center mb-4">Sign In</h1>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-3 py-2 mt-2 w-full focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              autoComplete="off"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-3 py-2 mt-2 w-full focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default SignInForm;
