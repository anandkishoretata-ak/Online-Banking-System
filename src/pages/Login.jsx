import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const user = JSON.parse(
      localStorage.getItem("registeredUser")
    );

    if (
      user &&
      user.email === email &&
      user.password === password
    ) {
      localStorage.setItem(
        "isLoggedIn",
        true
      );

      alert("Login Successful!");

      navigate("/dashboard");
    } else {
      alert("Invalid Email or Password");
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
            Securely access your
            banking account
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
            Don't have an account?

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