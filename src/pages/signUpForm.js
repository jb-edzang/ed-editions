import { useState } from "react";
import Layout from "@/Layout";
import "tailwindcss/tailwind.css";
import { useRouter } from "next/router";
import axios from "axios";

const SignUpForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    user: "",
    email: "",
    pwdHash: "",
  });

  const [userValidation, setUserValidation] = useState(false);
  const [passwordValidation, setPasswordValidation] = useState(false);
  const [emailValidation, setEmailValidation] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "username") {
      const isValidUser = /^[a-zA-Z][a-zA-Z0-9]*$/.test(value);
      setUserValidation(isValidUser);
    }

    if (name === "pwdHash") {
      // Remplacer "password" par "pwdHash"
      const isValidPassword = /^[a-zA-Z0-9-_]{8,24}$/.test(value);
      setPasswordValidation(isValidPassword);
    }

    if (name === "email") {
      const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      setEmailValidation(isValidEmail);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Soumission des données au serveur via "/api/signUp"
      const response = await axios.post("/api/signup", formData);
      console.log("User registered !", response.data);
      // Réinitialiser le formulaire
      setFormData({ user: "", email: "", pwdHash: "" }); // Remplacer "password" par "pwdHash"
      setUserValidation(false);
      setEmailValidation(false);
      setPasswordValidation(false);
      // Redirection vers la page d'accueil après l'inscription réussie
      router.push("/");
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  return (
    <Layout className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-md">
        <h1 className="text-3xl text-center mt-10 mb-6">Sign Up</h1>
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username :
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                userValidation ? "border-green-500" : "border-red-500"
              }`}
              id="username"
              type="text"
              name="username"
              autoComplete="off"
              placeholder="Username"
              value={formData.user}
              onChange={handleChange}
            />
            {userValidation ? (
              <span className="text-sm text-green-500">Valid username</span>
            ) : (
              <span className="text-sm text-red-500">Invalid username</span>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email :
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                emailValidation ? "border-green-500" : "border-red-500"
              }`}
              id="email"
              type="email"
              name="email"
              autoComplete="off"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            {emailValidation ? (
              <span className="text-sm text-green-500">Valid email</span>
            ) : (
              <span className="text-sm text-red-500">Invalid email</span>
            )}
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password :
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                passwordValidation ? "border-green-500" : "border-red-500"
              }`}
              id="password"
              type="password"
              name="pwdHash" // Remplacer "password" par "pwdHash"
              autoComplete="off"
              placeholder="Password"
              value={formData.pwdHash} // Remplacer "password" par "pwdHash"
              onChange={handleChange}
            />
            {passwordValidation ? (
              <span className="text-sm text-green-500">Valid password</span>
            ) : (
              <span className="text-sm text-red-500">
                Password should contain 8-24 characters
              </span>
            )}
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default SignUpForm;
