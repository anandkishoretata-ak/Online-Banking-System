import Sidebar from "../components/Sidebar";
import ProfileHeader from "../components/ProfileHeader";

function Profile() {
  const user =
    JSON.parse(localStorage.getItem("user")) || {};

  return (
    <div className="dashboard">
      <Sidebar />

      <div className="main-content">
        <ProfileHeader />

        <div className="card">
          <h2>👤 My Profile</h2>

          <p>
            <strong>Name:</strong>{" "}
            {user.name}
          </p>

          <p>
            <strong>Email:</strong>{" "}
            {user.email}
          </p>

          <p>
            <strong>Account Number:</strong>{" "}
            {user.accountNumber}
          </p>

          <p>
            <strong>Balance:</strong> ₹
            {user.balance}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;