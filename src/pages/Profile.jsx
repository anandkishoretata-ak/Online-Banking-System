import { useState } from "react";
import Sidebar from "../components/Sidebar";
import "../styles/Profile.css";

function Profile() {
  const userData =
    JSON.parse(
      localStorage.getItem("registeredUser")
    ) || {};

  const [name, setName] =
    useState(userData.name || "");

  const [email, setEmail] =
    useState(userData.email || "");

  const [phone, setPhone] =
    useState("9876543210");

  const handleUpdate = () => {
    const updatedUser = {
      ...userData,
      name,
      email,
    };

    localStorage.setItem(
      "registeredUser",
      JSON.stringify(updatedUser)
    );

    alert("Profile Updated Successfully");
  };

  return (
    <div className="dashboard">
      <Sidebar />

      <div className="main-content">
        <div className="profile-card">

          <h2>My Profile</h2>

          <input
            type="text"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
          />

          <input
            type="email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <input
            type="text"
            value={phone}
            onChange={(e) =>
              setPhone(e.target.value)
            }
          />

          <button
            onClick={handleUpdate}
          >
            Update Profile
          </button>

        </div>
      </div>
    </div>
  );
}

export default Profile;