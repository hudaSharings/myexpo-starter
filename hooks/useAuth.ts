import { useState } from "react";
import { useStore } from "../store/useStore";

export function useAuth() {
    const setAuthenticated = useStore((state:any) => state.setAuthenticated);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  

  const login = () => {
    setIsAuthenticated(true);
    setAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setAuthenticated(false);
  };

  return {
    isAuthenticated,
    login,
    logout,
  };
}
