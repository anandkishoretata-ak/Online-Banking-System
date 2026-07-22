import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import "../styles/AdminDashboard.css";

function AdminDashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <div className="admin-dashboard">

      <div className="admin-header">
        <h1>🏦 AK Bank Admin Dashboard</h1>

        <button
          className="logout-btn"
          onClick={logout}
        >
          Logout
        </button>
      </div>

      <div className="stats-container">

        <div className="stat-card">
          <h3>Total Users</h3>
          <h2>150</h2>
        </div>

        <div className="stat-card">
          <h3>Total Accounts</h3>
          <h2>150</h2>
        </div>

        <div className="stat-card">
          <h3>Total Transactions</h3>
          <h2>1,250</h2>
        </div>

        <div className="stat-card">
          <h3>Total Bank Balance</h3>
          <h2>₹••••••</h2>
        </div>

      </div>

      <div className="admin-section">

        <h2>Recent Activity</h2>

        <table>
          <thead>
            <tr>
              <th>User</th>
              <th>Transaction</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Anand</td>
              <td>Deposit</td>
              <td>Success</td>
            </tr>

            <tr>
              <td>Rahul</td>
              <td>Withdraw</td>
              <td>Success</td>
            </tr>

            <tr>
              <td>Priya</td>
              <td>Transfer</td>
              <td>Pending</td>
            </tr>
          </tbody>
        </table>

      </div>
    </div>
  );
}

export default AdminDashboard;