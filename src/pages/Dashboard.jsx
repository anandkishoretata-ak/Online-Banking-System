import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import Sidebar from "../components/Sidebar";
import BalanceCard from "../components/BalanceCard";
import TransactionCard from "../components/TransactionCard";
import QuickActions from "../components/QuickActions";
import DarkModeToggle from "../components/DarkModeToggle";
import RecentTransactions from "../components/RecentTransactions";
import UserProfileCard from "../components/UserProfileCard";

import "../styles/Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();

  const [showAmount, setShowAmount] =
    useState(false);

  const [stats, setStats] =
    useState({
      totalDeposits: 0,
      totalWithdrawals: 0,
      lastTransfer: 0,
    });

  const user =
    JSON.parse(
      localStorage.getItem("user")
    ) || {};

  const [profileImage, setProfileImage] =
    useState(
      localStorage.getItem("profileImage") ||
        user?.profileImage ||
        `https://ui-avatars.com/api/?name=${
          user?.name || "User"
        }&background=2563eb&color=fff`
    );

  useEffect(() => {
    const token =
      localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    fetchDashboardStats(token);
  }, [navigate]);

  const fetchDashboardStats =
    async (token) => {
      try {
        const res = await axios.get(
          "http://localhost:8000/api/transactions/stats",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setStats(res.data);
      } catch (error) {
        console.log(error);
      }
    };

  const uploadProfilePhoto =
    async (e) => {
      try {
        const file =
          e.target.files[0];

        if (!file) return;

        const formData =
          new FormData();

        formData.append(
          "image",
          file
        );

        const token =
          localStorage.getItem(
            "token"
          );

        const res =
          await axios.post(
            "http://localhost:8000/api/users/upload-profile",
            formData,
            {
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type":
                  "multipart/form-data",
              },
            }
          );

        console.log(
          "UPLOAD RESPONSE:",
          res.data
        );

        setProfileImage(
          res.data.image
        );

        const currentUser =
          JSON.parse(
            localStorage.getItem(
              "user"
            )
          ) || {};

        const updatedUser = {
          ...currentUser,
          profileImage:
            res.data.image,
        };

        localStorage.setItem(
          "user",
          JSON.stringify(
            updatedUser
          )
        );

        localStorage.setItem(
          "profileImage",
          res.data.image
        );

        alert(
          "Profile Photo Updated Successfully"
        );
      } catch (error) {
        console.log(error);

        alert(
          error.response?.data
            ?.message ||
            "Failed to upload photo"
        );
      }
    };

  const logout = () => {
    localStorage.removeItem(
      "token"
    );

    localStorage.removeItem(
      "user"
    );

    localStorage.removeItem(
      "profileImage"
    );

    alert(
      "Logged Out Successfully"
    );

    navigate("/login");
  };

  const chartData = [
    {
      name: "Deposits",
      amount:
        stats.totalDeposits,
    },
    {
      name: "Withdrawals",
      amount:
        stats.totalWithdrawals,
    },
    {
      name: "Transfer",
      amount:
        stats.lastTransfer,
    },
  ];

  return (
    <div className="dashboard">
      <Sidebar />

      <div className="main-content">

        {/* Header */}
        <div className="top-bar">

          <div>
            <h2>
              Welcome,{" "}
              {user?.name ||
                "User"} 👋
            </h2>

            <p>
              Manage your banking
              account securely.
            </p>
          </div>

          <div className="top-actions">

            <DarkModeToggle />

            <button
              className="show-btn"
              onClick={() =>
                setShowAmount(
                  !showAmount
                )
              }
            >
              {showAmount
                ? "🙈 Hide Amounts"
                : "👁 Show Amounts"}
            </button>

            <div className="profile-box">

              <div>

                <img
                  src={profileImage}
                  alt="Profile"
                  className="profile-img"
                  onError={(e) => {
                    e.target.src =
                      `https://ui-avatars.com/api/?name=${
                        user?.name ||
                        "User"
                      }&background=2563eb&color=fff`;
                  }}
                />

                <label className="upload-btn">
                  Upload Photo

                  <input
                    type="file"
                    hidden
                    accept="image/*"
                    onChange={
                      uploadProfilePhoto
                    }
                  />
                </label>

              </div>

              <div className="profile-info">

                <h4>
                  {user?.name}
                </h4>

                <span>
                  {user?.email}
                </span>

                <small>
                  A/C No:{" "}
                  {
                    user?.accountNumber
                  }
                </small>

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

        {/* Statistics */}
        <div className="cards">

          <BalanceCard
            showAmount={
              showAmount
            }
          />

          <TransactionCard />

          <div className="card">
            <h3>
              Total Deposits
            </h3>

            <h1>
              {showAmount
                ? `₹${stats.totalDeposits.toLocaleString()}`
                : "••••••"}
            </h1>
          </div>

          <div className="card">
            <h3>
              Total Withdrawals
            </h3>

            <h1>
              {showAmount
                ? `₹${stats.totalWithdrawals.toLocaleString()}`
                : "••••••"}
            </h1>
          </div>

          <div className="card">
            <h3>
              Last Transfer
            </h3>

            <h1>
              {showAmount
                ? `₹${stats.lastTransfer.toLocaleString()}`
                : "••••••"}
            </h1>
          </div>

        </div>

        <QuickActions />

        {/* Analytics */}
        <div className="card">
          <h3>
            📊 Banking Analytics
          </h3>

          <ResponsiveContainer
            width="100%"
            height={300}
          >
            <BarChart
              data={chartData}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="amount" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Widgets */}
        <div className="dashboard-grid">

          <RecentTransactions />

          <UserProfileCard />

        </div>

      </div>
    </div>
  );
}

export default Dashboard;