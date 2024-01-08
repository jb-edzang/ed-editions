import React, { createContext, useContext } from "react";
import axios from "axios";

const AxiosContext = createContext();

export const AxiosProvider = ({ children }) => {
  const bookApi = axios.create({
    baseURL: "https://localhost:3030/api",
  });

  return (
    <AxiosContext.Provider value={bookApi}>{children}</AxiosContext.Provider>
  );
};

export const useAxios = () => {
  return useContext(AxiosContext);
};
