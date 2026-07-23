import { useState } from "react";
import axios from "axios";

import Sidebar from "../components/Sidebar";
import "../styles/Banking.css";

function EditProfile() {
  const storedUser =
    JSON.parse(
      localStorage.getItem("user")
    ) || {};

  const [name, setName] =
    useState(storedUser.name || "");

  const [email, setEmail] =
    useState(storedUser.email || "");

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const token =
        localStorage.getItem("token");

      const res = await axios.put(
        "http://localhost:8000/api/user/update-profile",
        {
          name,
          email,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      localStorage.setItem(
        "user",
        JSON.stringify(
          res.data.user
        )
      );

      alert(res.data.message);

    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Profile update failed"
      );
    }
  };

  return (
    <div className="dashboard">
      <Sidebar />

      <div className="main-content">
        <div className="banking-container">
          <div className="banking-card">

            <h2>
              👤 Edit Profile
            </h2>

            <form
              onSubmit={handleUpdate}
            >
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) =>
                  setName(
                    e.target.value
                  )
                }
                required
              />

              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) =>
                  setEmail(
                    e.target.value
                  )
                }
                required
              />

              <button
                type="submit"
              >
                Update Profile
              </button>

            </form>

          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;