import Navbar from "../components/Navbar";

function Register() {
  return (
    <>
      <Navbar />

      <div className="auth-container">
        <h2>Create Account</h2>

        <form>
          <input
            type="text"
            placeholder="Full Name"
          />

          <input
            type="email"
            placeholder="Email"
          />

          <input
            type="password"
            placeholder="Password"
          />

          <button>Create Account</button>
        </form>
      </div>
    </>
  );
}

export default Register;