import React, { createContext, useContext, useEffect, useState } from "react";
import authService from "../services/authService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const raw = localStorage.getItem("ssa_user");
    return raw ? JSON.parse(raw) : null;
  });
  const [token, setToken] = useState(() => localStorage.getItem("ssa_token") || null);

  useEffect(() => {
    if (token) {
      authService.setToken(token);
    } else {
      authService.setToken(null);
    }
  }, [token]);

  const login = async (creds) => {
    const res = await authService.login(creds);
    if (res?.token) {
      localStorage.setItem("ssa_token", res.token);
      localStorage.setItem("ssa_user", JSON.stringify(res.user));
      setToken(res.token);
      setUser(res.user);
    }
    return res;
  };

  const logout = () => {
    localStorage.removeItem("ssa_token");
    localStorage.removeItem("ssa_user");
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
