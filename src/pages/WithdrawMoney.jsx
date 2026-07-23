import { useState } from "react";
import Sidebar from "../components/Sidebar";
import ProfileHeader from "../components/ProfileHeader";
import "../styles/Banking.css";

function WithdrawMoney() {
  const [amount, setAmount] = useState("");

  const handleWithdraw = (e) => {
    e.preventDefault();

    if (!amount || Number(amount) <= 0) {
      alert("Please enter a valid amount");
      return;
    }

    alert(`₹${amount} withdrawn successfully!`);

    window.location.href = "/dashboard";
  };

  return (
    <div className="dashboard">

      <Sidebar />

      <div className="main-content">

        <ProfileHeader />

        <div className="banking-container">

          <div className="banking-card">

            <h2>🏧 Withdraw Money</h2>

            <form onSubmit={handleWithdraw}>

              <input
                type="number"
                placeholder="Enter Amount"
                value={amount}
                onChange={(e) =>
                  setAmount(e.target.value)
                }
              />

              <button type="submit">
                Withdraw
              </button>

            </form>

          </div>

        </div>

      </div>

    </div>
  );
}

export default WithdrawMoney;