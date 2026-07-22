import { useEffect, useState } from "react";
import axios from "axios";

function BalanceCard() {
  const [balance, setBalance] =
    useState(0);

  const [showBalance, setShowBalance] =
    useState(false);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const token =
          localStorage.getItem("token");

        const res = await axios.get(
          "http://localhost:8000/api/account/balance",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setBalance(res.data.balance);

      } catch (error) {
        console.log(error);
      }
    };

    fetchBalance();
  }, []);

  return (
    <div className="card balance-card">
      <h3>💰 Account Balance</h3>

      <h1>
        {showBalance
          ? `₹${balance.toLocaleString()}`
          : "₹ ••••••"}
      </h1>

      <button
        className="balance-toggle-btn"
        onClick={() =>
          setShowBalance(!showBalance)
        }
      >
        {showBalance
          ? "🙈 Hide Balance"
          : "👁 Show Balance"}
      </button>
    </div>
  );
}

export default BalanceCard;