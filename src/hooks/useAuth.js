import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(
      localStorage.getItem("user")
    );

    const storedToken =
      localStorage.getItem("token");

    if (!storedToken) {
      navigate("/login");
      return;
    }

    setUser(storedUser);
    setToken(storedToken);
  }, [navigate]);

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    navigate("/login");
  };

  return {
    user,
    token,
    logout,
    isAuthenticated: !!token,
  };
};

export default useAuth;