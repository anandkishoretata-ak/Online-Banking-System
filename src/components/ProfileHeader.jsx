import { useNavigate } from "react-router-dom";

function ProfileHeader() {
  const navigate = useNavigate();

  const user =
    JSON.parse(localStorage.getItem("user")) || {};

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <div className="top-bar">

      <div>
        <h2>
          Welcome, {user.name} 👋
        </h2>

        <p>
          Manage your banking account securely.
        </p>
      </div>

      <div className="top-actions">

        <div className="profile-box">

          <img
            src={`https://ui-avatars.com/api/?name=${user.name}&background=2563eb&color=fff`}
            alt="profile"
            className="profile-img"
          />

          <div className="profile-info">
            <h4>{user.name}</h4>
            <span>{user.email}</span>
          </div>

        </div>

        <button
          className="logout-btn"
          onClick={logout}
        >
          Logout
        </button>

      </div>

    </div>
  );
}

export default ProfileHeader;