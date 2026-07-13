import Sidebar from "../components/Sidebar";
import BalanceCard from "../components/BalanceCard";
import TransactionCard from "../components/TransactionCard";
import QuickActions from "../components/QuickActions";
import "../styles/Dashboard.css";
import DarkModeToggle
from "../components/DarkModeToggle";

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

        <div className="top-bar">
            <DarkModeToggle />
          <h2>
            Welcome,
            {user?.name}
          </h2>

          <button
            className="logout-btn"
            onClick={logout}
          >
            Logout
          </button>
        </div>

          <div className="card">
            <h3>Last Transfer</h3>
            <h1>₹2,000</h1>
          </div>
          <div className="cards">

               <BalanceCard />

               <TransactionCard />

            <div className="card">
                <h3>Deposits</h3>
                <h1>₹25,000</h1>
             </div>

            <div className="card">
               <h3>Withdrawals</h3>
               <h1>₹10,000</h1>
             </div>

            

        </div>

        <QuickActions />

      </div>

    </div>
  );
}


export default Dashboard;