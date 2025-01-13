import { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

const INITIAL_STATE = localStorage.getItem("refreshToken") ? true : false;

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(INITIAL_STATE);
  const [name, setName] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("refreshToken");
    if (token) {
      const decoded = jwtDecode(token);
      setName(decoded.name);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, name, setName }}>
      {children}
    </AuthContext.Provider>
  );
};
