import { useState } from "react";
import Layout from "@/Layout";
import "tailwindcss/tailwind.css";
import { useRouter } from "next/router";
import signUpRequest from "../services/signUpApi";

const SignUpForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    pwdHash: "",
  });

  const [usernameValidation, setUsernameValidation] = useState(false);
  const [pwdHashValidation, setPwdHashValidation] = useState(false);
  const [emailValidation, setEmailValidation] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    if (name === "username") {
      const isValidUser = /^[a-zA-Z][a-zA-Z0-9]*$/.test(value);
      setUsernameValidation(isValidUser);
    }

    if (name === "pwdHash") {
      const isValidPassword = /^[a-zA-Z0-9-_]{8,24}$/.test(value);
      setPwdHashValidation(isValidPassword);
    }

    if (name === "email") {
      const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      setEmailValidation(isValidEmail);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await signUpRequest({
        username: formData.username,
        email: formData.email,
        pwdHash: formData.pwdHash,
      });
      console.log("User registered!", response.data);
      // Réinitialisation du formulaire et redirection
      setFormData({
        username: "",
        email: "",
        pwdHash: "",
      });
      console.log("User registred !", response);
      setUsernameValidation(false);
      setEmailValidation(false);
      setPwdHashValidation(false);
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
                usernameValidation ? "border-green-500" : "border-red-500"
              }`}
              id="username"
              type="text"
              name="username"
              autoComplete="off"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
            />
            {usernameValidation ? (
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
              htmlFor="pwdHash"
            >
              Password :
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                pwdHashValidation ? "border-green-500" : "border-red-500"
              }`}
              id="pwdHash"
              type="password"
              name="pwdHash"
              autoComplete="off"
              placeholder="Password"
              value={formData.pwdHash}
              onChange={handleChange}
            />
            {pwdHashValidation ? (
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
