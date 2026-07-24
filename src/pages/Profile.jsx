import Sidebar from "../components/Sidebar";
import ProfileHeader from "../components/ProfileHeader";

function Profile() {
  const user =
    JSON.parse(
      localStorage.getItem("user")
    ) || {};

  const profileImage =
    localStorage.getItem(
      "profileImage"
    ) ||
    user?.profileImage ||
    `https://ui-avatars.com/api/?name=${user?.name}&background=2563eb&color=fff&size=200`;

  return (
    <div className="dashboard">
      <Sidebar />

      <div className="main-content">
        <ProfileHeader />

        <div className="card">

          <h2>👤 My Profile</h2>

          <div
            style={{
              textAlign: "center",
              marginBottom: "25px",
            }}
          >
            <img
              src={profileImage}
              alt="Profile"
              style={{
                width: "160px",
                height: "160px",
                borderRadius: "50%",
                objectFit: "cover",
                border: "4px solid #2563eb",
              }}
            />

            <p
              style={{
                marginTop: "10px",
                fontWeight: "bold",
              }}
            >
              {user.name}
            </p>
          </div>

          <p>
            <strong>Name:</strong>{" "}
            {user.name}
          </p>

          <p>
            <strong>Email:</strong>{" "}
            {user.email}
          </p>

          <p>
            <strong>
              Account Number:
            </strong>{" "}
            {user.accountNumber}
          </p>

          <p>
            <strong>Balance:</strong>{" "}
            ₹
            {user.balance?.toLocaleString()}
          </p>

          <p>
            <strong>User ID:</strong>{" "}
            {user._id}
          </p>

        </div>
      </div>
    </div>
  );
}

export default Profile;