import { useState } from "react";
import Sidebar from "../components/Sidebar";
import ProfileHeader from "../components/ProfileHeader";
import "../styles/Banking.css";

function DepositMoney() {
  const [amount, setAmount] = useState("");

  const handleDeposit = (e) => {
    e.preventDefault();

    if (!amount || Number(amount) <= 0) {
      alert("Please enter a valid amount");
      return;
    }

   alert(`₹${amount} deposited successfully!`);

    window.location.href = "/dashboard";
  };

  return (
    <div className="dashboard">

      <Sidebar />

      <div className="main-content">

        <ProfileHeader />

        <div className="banking-container">

          <div className="banking-card">

            <h2>💰 Deposit Money</h2>

            <form onSubmit={handleDeposit}>

              <input
                type="number"
                placeholder="Enter Amount"
                value={amount}
                onChange={(e) =>
                  setAmount(e.target.value)
                }
              />

              <button type="submit">
                Deposit
              </button>

            </form>

          </div>

        </div>

      </div>

    </div>
  );
}

export default DepositMoney;