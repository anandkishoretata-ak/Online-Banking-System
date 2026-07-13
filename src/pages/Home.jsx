import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />

      <div className="hero">
        <h1>Welcome to AK Bank</h1>

        <p>
          Secure Online Banking System built with
          React, Node.js, Express and MongoDB.
        </p>

        <button>Get Started</button>
      </div>
    </>
  );
}

export default Home;