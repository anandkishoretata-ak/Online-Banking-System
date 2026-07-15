import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Register.css";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    accountNumber: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    localStorage.setItem(
      "registeredUser",
      JSON.stringify(formData)
    );

    alert("Account Registered Successfully!");

    navigate("/login");
  };

  return (
    <div className="register-page">
      <div className="register-overlay">

        <div className="register-card">

          <div className="bank-logo">
            🏦 AK BANK
          </div>

          <h2>Create Account</h2>

          <p>
            Open your secure digital
            banking account today
          </p>

          <form onSubmit={handleRegister}>

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="accountNumber"
              placeholder="Account Number"
              value={formData.accountNumber}
              onChange={handleChange}
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <button type="submit">
              Register Account
            </button>

          </form>

          <div className="register-footer">
            Already have an account?

            <Link to="/login">
              Login
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Register;