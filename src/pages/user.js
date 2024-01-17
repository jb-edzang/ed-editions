import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import Layout from "@/Layout";
import { createUser } from "@/services/userApi";
import { useRouter } from "next/router";

const User = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    pwdHash: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { username, email, pwdHash } = formData;

    // Vérification des champs obligatoires
    if (!username || !email || !pwdHash) {
      console.log("Username, email, and password are required");
      return;
    }

    try {
      const response = await createUser({
        username,
        email,
        pwdHash,
      });

      console.log("Form submitted with data:", { username, email, pwdHash });
      console.log("Response:", response.data);

      setFormData({
        username: "",
        email: "",
        pwdHash: "",
      });
      router.push("/");
    } catch (error) {
      console.error("Data submission failed", error);
    }
  };

  return (
    <Layout>
      <div className="flex justify-center items-center h-screen">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <h1 className="text-2xl mb-4">User form</h1>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Username
            </label>
            <input
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="username"
              value={formData.user}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              name="pwdHash"
              value={formData.pwdHash}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default User;
