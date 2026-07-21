import { useEffect } from "react";
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

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

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

        <div className="top-bar">
          <h2>
            Welcome, {user?.name || "User"}
          </h2>

          <div className="top-actions">
            <DarkModeToggle />

            <button
              className="logout-btn"
              onClick={logout}
            >
              Logout
            </button>
          </div>
        </div>

        <div className="cards">
          <BalanceCard />

          <TransactionCard />

          <div className="card">
            <h3>Total Deposits</h3>
            <h1>₹25,000</h1>
          </div>

          <div className="card">
            <h3>Total Withdrawals</h3>
            <h1>₹10,000</h1>
          </div>

          <div className="card">
            <h3>Last Transfer</h3>
            <h1>₹2,000</h1>
          </div>
        </div>

        <QuickActions />

        <div className="cards">
          <RecentTransactions />
          <UserProfileCard />
        </div>

      </div>
    </div>
  );
}

export default Dashboard;