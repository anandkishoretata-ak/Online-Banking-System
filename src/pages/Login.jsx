
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

import "../styles/Login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/api/auth/login",
        {
          email,
          password,
        }
      );

      localStorage.setItem(
        "token",
        response.data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      alert("Login Successful!");

      navigate("/dashboard");

    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Login Failed"
      );
    }
  };

  return (
    <div className="login-page">
      <div className="login-overlay">

        <div className="login-card">

          <div className="bank-logo">
            🏦 AK BANK
          </div>

          <h2>Welcome Back</h2>

          <p>
            Securely access your banking account
          </p>

          <form onSubmit={handleLogin}>

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              required
            />

            <button type="submit">
              Login
            </button>

          </form>

          <div className="login-footer">
            Don't have an account?{" "}

            <Link to="/register">
              Register
            </Link>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Login;