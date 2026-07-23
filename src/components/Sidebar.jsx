import { NavLink, useNavigate } from "react-router-dom";

import {
  FaHome,
  FaMoneyBillWave,
  FaHandHoldingUsd,
  FaExchangeAlt,
  FaHistory,
  FaUser,
  FaUserEdit,
  FaLock,
  FaSignOutAlt,
} from "react-icons/fa";

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("isLoggedIn");

    navigate("/login");
  };

  return (
    <div className="sidebar">

      <div className="sidebar-header">
        <h2>🏦 AK Bank</h2>
      </div>

      <ul className="sidebar-menu">

        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? "active-link" : ""
            }
          >
            <FaHome />
            <span>Dashboard</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/deposit"
            className={({ isActive }) =>
              isActive ? "active-link" : ""
            }
          >
            <FaMoneyBillWave />
            <span>Deposit</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/withdraw"
            className={({ isActive }) =>
              isActive ? "active-link" : ""
            }
          >
            <FaHandHoldingUsd />
            <span>Withdraw</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/transfer"
            className={({ isActive }) =>
              isActive ? "active-link" : ""
            }
          >
            <FaExchangeAlt />
            <span>Transfer</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/history"
            className={({ isActive }) =>
              isActive ? "active-link" : ""
            }
          >
            <FaHistory />
            <span>Transaction History</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/edit-profile"
            className={({ isActive }) =>
              isActive ? "active-link" : ""
            }
          >
            <FaUserEdit />
            <span>Edit Profile</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive ? "active-link" : ""
            }
          >
            <FaUser />
            <span>Profile</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/change-password"
            className={({ isActive }) =>
              isActive ? "active-link" : ""
            }
          >
            <FaLock />
            <span>Change Password</span>
          </NavLink>
        </li>

      </ul>

      <button
        className="logout-btn"
        onClick={handleLogout}
      >
        <FaSignOutAlt />
        <span>Logout</span>
      </button>

    </div>
  );
}

export default Sidebar;