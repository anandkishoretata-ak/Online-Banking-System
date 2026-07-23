import { useState } from "react";
import axios from "axios";
import { FaMoneyCheckAlt } from "react-icons/fa";

import Sidebar from "../components/Sidebar";
import ProfileHeader from "../components/ProfileHeader";

import "../styles/Banking.css";

function TransferMoney() {
  const [accountNumber, setAccountNumber] =
    useState("");

  const [amount, setAmount] =
    useState("");

  const handleTransfer = async (e) => {
    e.preventDefault();

    if (!accountNumber || !amount) {
      alert("Please fill all fields");
      return;
    }

    try {
      const token =
        localStorage.getItem("token");

      const res = await axios.post(
        "http://localhost:8000/api/account/transfer",
        {
          accountNumber,
          amount: Number(amount),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert(res.data.message);

      window.location.href = "/dashboard";

    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Transfer Failed"
      );
    }
  };

  return (
    <div className="dashboard">
      <Sidebar />

      <div className="main-content">
        <ProfileHeader />

        <div className="banking-container">
          <div className="banking-card">

            <h2>
              <FaMoneyCheckAlt /> Transfer Money
            </h2>

            <form onSubmit={handleTransfer}>

              <input
                type="text"
                placeholder="Receiver Account Number"
                value={accountNumber}
                onChange={(e) =>
                  setAccountNumber(
                    e.target.value
                  )
                }
                required
              />

              <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) =>
                  setAmount(
                    e.target.value
                  )
                }
                required
              />

              <button type="submit">
                Transfer Money
              </button>

            </form>

          </div>
        </div>
      </div>
    </div>
  );
}

export default TransferMoney;