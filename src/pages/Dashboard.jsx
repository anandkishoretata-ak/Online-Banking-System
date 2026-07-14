import Sidebar from "../components/Sidebar";
import BalanceCard from "../components/BalanceCard";
import TransactionCard from "../components/TransactionCard";
import QuickActions from "../components/QuickActions";
import DarkModeToggle from "../components/DarkModeToggle";
import RecentTransactions from "../components/RecentTransactions";
import UserProfileCard from "../components/UserProfileCard";

import "../styles/Dashboard.css";

function Dashboard() {
  const user = JSON.parse(
    localStorage.getItem("registeredUser")
  );

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "/login";
  };

  return (
    <div className="dashboard">
      <Sidebar />

      <div className="main-content">

        {/* Top Bar */}
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

        {/* Statistics Cards */}
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

        {/* Quick Actions */}
        <QuickActions />

        {/* User Widgets */}
        <div className="cards">
          <RecentTransactions />

          <UserProfileCard />
        </div>

      </div>
    </div>
  );
}

export default Dashboard;
