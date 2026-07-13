import { useState } from "react";
import "../styles/Banking.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function TransferMoney() {
  const [accountNumber, setAccountNumber] =
    useState("");

  const [amount, setAmount] =
    useState("");

  const handleTransfer = (e) => {
    e.preventDefault();

    if (!accountNumber || !amount) {
      toast.error("Please fill all fields");
      return;
    }

    toast.success(
      `₹${amount} transferred to Account No: ${accountNumber}`
    );

    setAccountNumber("");
    setAmount("");
  };

  return (
    <>
      <div className="banking-container">
        <div className="banking-card">
          <h2>Transfer Money</h2>

          <form onSubmit={handleTransfer}>
            <input
              type="text"
              placeholder="Account Number"
              value={accountNumber}
              onChange={(e) =>
                setAccountNumber(
                  e.target.value
                )
              }
            />

            <input
              type="number"
              placeholder="Enter Amount"
              value={amount}
              onChange={(e) =>
                setAmount(
                  e.target.value
                )
              }
            />

            <button type="submit">
              Transfer
            </button>
          </form>
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={3000}
      />
    </>
  );
}

export default TransferMoney;

