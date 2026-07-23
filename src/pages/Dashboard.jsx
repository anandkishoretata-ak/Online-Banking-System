import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    alert("Logged Out Successfully");

    navigate("/login");
  };

  return (
    <div className="dashboard">

      <Sidebar />

      <div className="main-content">

        {/* Header */}
        <div className="top-bar">

          <div>
            <h2>
              Welcome, {user?.name || "User"} 👋
            </h2>

            <p>
              Manage your banking account securely.
            </p>
          </div>

          <div className="top-actions">

            <DarkModeToggle />

            <button
              className="show-btn"
              onClick={() =>
                setShowAmount(!showAmount)
              }
            >
              {showAmount
                ? "🙈 Hide Amounts"
                : "👁 Show Amounts"}
            </button>

            {/* User Profile */}
            <div className="profile-box">

              <img
                src={`https://ui-avatars.com/api/?name=${user?.name || "User"}&background=2563eb&color=fff&size=128`}
                alt="Profile"
                className="profile-img"
              />

              <div className="profile-info">

                <h4>
                  {user?.name || "User"}
                </h4>

                <span>
                  {user?.email}
                </span>

                <small>
                  A/C No:
                  {" "}
                  {user?.accountNumber ||
                    "Not Available"}
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

        {/* Statistics Cards */}
        <div className="cards">

          <BalanceCard
            showAmount={showAmount}
          />

          <TransactionCard />

          <div className="card">
            <h3>Total Deposits</h3>

            <h1>
              {showAmount
                ? `₹${stats.totalDeposits.toLocaleString()}`
                : "••••••"}
            </h1>
          </div>

          <div className="card">
            <h3>Total Withdrawals</h3>

            <h1>
              {showAmount
                ? `₹${stats.totalWithdrawals.toLocaleString()}`
                : "••••••"}
            </h1>
          </div>

          <div className="card">
            <h3>Last Transfer</h3>

            <h1>
              {showAmount
                ? `₹${stats.lastTransfer.toLocaleString()}`
                : "••••••"}
            </h1>
          </div>

        </div>

        {/* Quick Actions */}
        <QuickActions />

        {/* Dashboard Widgets */}
        <div className="dashboard-grid">

          <RecentTransactions />

          <UserProfileCard />

        </div>

      </div>

    </div>
  );
}

export default Dashboard;