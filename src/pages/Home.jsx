import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">

      <div className="overlay">

        <nav className="navbar">
          <div className="logo">
            AK BANK
          </div>

          <div className="nav-links">
            <Link to="/login">
              Login
            </Link>

            <Link to="/register">
              Register
            </Link>
          </div>
        </nav>

        <div className="hero">

          <h1>
            Secure Digital Banking
            For Everyone
          </h1>

          <p>
            Manage your money,
            transfer funds, track
            transactions and access
            banking services anytime,
            anywhere.
          </p>

          <div className="hero-buttons">

            <Link
              to="/register"
              className="btn-primary"
            >
              Open Account
            </Link>

            <Link
              to="/login"
              className="btn-secondary"
            >
              Login Now
            </Link>

          </div>

        </div>

      </div>

      <section className="features">

        <div className="feature-card">
          <h3>💳 Online Banking</h3>
          <p>
            Access your account
            securely 24/7.
          </p>
        </div>

        <div className="feature-card">
          <h3>💸 Instant Transfer</h3>
          <p>
            Transfer money instantly
            with complete security.
          </p>
        </div>

        <div className="feature-card">
          <h3>📊 Transaction Tracking</h3>
          <p>
            View complete transaction
            history with date and time.
          </p>
        </div>

        <div className="feature-card">
          <h3>🔒 Secure Banking</h3>
          <p>
            Protected user accounts
            with secure authentication.
          </p>
        </div>

      </section>

    </div>
  );
}

export default Home;