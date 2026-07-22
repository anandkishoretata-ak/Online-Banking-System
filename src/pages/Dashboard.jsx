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

  const user = JSON.parse(
    localStorage.getItem("user")
  );

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

          <BalanceCard />

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