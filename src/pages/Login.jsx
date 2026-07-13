import { useState } from "react";

import { useNavigate } from "react-router-dom";

function Login() {
  const navigate =
    useNavigate();

  const [email, setEmail] =
    useState("");

  const [password,
    setPassword] =
    useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const user =
      JSON.parse(
        localStorage.getItem(
          "registeredUser"
        )
      );

    if (
      user?.email === email &&
      user?.password ===
        password
    ) {
      localStorage.setItem(
        "isLoggedIn",
        true
      );

      navigate(
        "/dashboard"
      );
    } else {
      alert(
        "Invalid Credentials"
      );
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>

      <form
        onSubmit={
          handleLogin
        }
      >
        <input
          type="email"
          placeholder="Email"
          onChange={(e) =>
            setEmail(
              e.target.value
            )
          }
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) =>
            setPassword(
              e.target.value
            )
          }
        />

        <button>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
