import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState(null);
  const [username, setUsername] = useState("");
  const [userRole, setUserRole] = useState("");

  // Fonction pour mettre à jour user_id
  const updateUserId = (newUserId, newToken, newUsername, newUserRole) => {
    setUserId(newUserId);
    setIsAuthenticated(!!newUserId);
    setToken(newToken);
    setUsername(newUsername);
    setUserRole(newUserRole);
  };

  const logout = () => {
    //logique pour la déconnexion
    setToken(null);
    setUserId(null);
    setUsername("");
    setUserRole("");
  };

  return (
    <AuthContext.Provider
      value={{
        user_id: userId,
        updateUserId,
        isAuthenticated,
        logout,
        setUserRole,
        setUsername,
        setToken,
        token,
        userRole,
        username,
        setUserId,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
