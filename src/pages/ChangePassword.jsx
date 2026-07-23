import { useState } from "react";
import axios from "axios";

import Sidebar from "../components/Sidebar";
import "../styles/Banking.css";

function ChangePassword() {
  const [currentPassword, setCurrentPassword] =
    useState("");

  const [newPassword, setNewPassword] =
    useState("");

  const handleChangePassword = async (
    e
  ) => {
    e.preventDefault();

    try {
      const token =
        localStorage.getItem("token");

      const res = await axios.put(
        "http://localhost:8000/api/user/change-password",
        {
          currentPassword,
          newPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert(res.data.message);

      setCurrentPassword("");
      setNewPassword("");

    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Failed to change password"
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
              🔒 Change Password
            </h2>

            <form
              onSubmit={
                handleChangePassword
              }
            >
              <input
                type="password"
                placeholder="Current Password"
                value={currentPassword}
                onChange={(e) =>
                  setCurrentPassword(
                    e.target.value
                  )
                }
                required
              />

              <input
                type="password"
                placeholder="New Password"
                value={newPassword}
                onChange={(e) =>
                  setNewPassword(
                    e.target.value
                  )
                }
                required
              />

              <button type="submit">
                Update Password
              </button>

            </form>

          </div>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;