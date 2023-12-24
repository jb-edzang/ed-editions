import Layout from "@/Layout";
import { useState } from "react";
import "tailwindcss/tailwind.css";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [showLiveValidation, setShowLiveValidation] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (value) => {
    const regex =
      /^[A-Za-z][\w.-]*[A-Za-z0-9]@[A-Za-z0-9][\w.-]*[A-Za-z0-9]\.[A-Za-z]{2,}$/;
    setEmail(value);
    setEmailValid(regex.test(value));
    setShowLiveValidation(true);
  };

  const validatePassword = (value) => {
    const regex =
      /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[-_!@#$%^&*])[A-Za-z0-9-_!@#$%^&*]{8,24}$/;
    setPassword(value);
    setPasswordValid(regex.test(value));
    setShowLiveValidation(true);
  };

  const validateUsername = (value) => {
    setUsername(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("Appel à l'API a fourni les données suivantes : ", {
        email,
        pwdHash,
        username,
      });
      // appel à l'API
      const response = await axios.post("/api/auth", {
        email,
        pwdHash,
        username,
      });
      return response.data;
      // Gérer la réponse de l'authentification
    } catch (error) {
      setError("Une erreur s'est produite lors de l'authentification.");
      // setError(error.response.data.error);
    }
  };

  return (
    <Layout className="flex justify-center items-center h-screen">
      <div className="mt-10 max-w-md w-full p-6 bg-white rounded-lg shadow-md mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-center">
          Authentification
        </h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form className="flex flex-col items-center" onSubmit={handleSubmit}>
          <div className="mb-4 w-full">
            <label className="block text-gray-700 mb-2">Username:</label>
            <input
              className={`border rounded-md px-3 py-2 w-full`}
              type="text"
              value={username}
              onChange={(e) => validateUsername(e.target.value)}
            />
          </div>
          <div className="mb-4 w-full">
            <label className="block text-gray-700 mb-2">Email:</label>
            <input
              className={`border rounded-md px-3 py-2 w-full ${
                emailValid ? "border-green-500" : "border-red-500"
              }`}
              type="email"
              value={email}
              onChange={(e) => validateEmail(e.target.value)}
            />
            {showLiveValidation && !emailValid && (
              <p className="text-red-500">
                Veuillez saisir une adresse email valide.
              </p>
            )}
          </div>
          <div className="mb-4 w-full">
            <label className="block text-gray-700 mb-2">Password:</label>
            <input
              className={`border rounded-md px-3 py-2 w-full ${
                passwordValid ? "border-green-500" : "border-red-500"
              }`}
              type="password"
              value={password}
              onChange={(e) => validatePassword(e.target.value)}
            />
            {showLiveValidation && !passwordValid && (
              <p className="text-red-500">
                Le mot de passe doit contenir entre 8 et 24 caractères, inclure
                des lettres, des chiffres et des caractères spéciaux.
              </p>
            )}
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
            disabled={!emailValid || !passwordValid}
          >
            Se connecter
          </button>
        </form>
      </div>
    </Layout>
  );
}
