import { useState } from "react";
import "../styles/Banking.css";

function TransferMoney() {
  const [accountNumber, setAccountNumber] =
    useState("");

  const [amount, setAmount] =
    useState("");

  const handleTransfer = (e) => {
    e.preventDefault();

    if (!accountNumber || !amount) {
      alert("Please fill all fields.");
      return;
    }

    if (Number(amount) <= 0) {
      alert("Please enter a valid amount.");
      return;
    }

    const newTransaction = {
      type: "Transfer",
      amount,
      accountNumber,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    };

    const transactions =
      JSON.parse(
        localStorage.getItem("transactions")
      ) || [];

    transactions.push(newTransaction);

    localStorage.setItem(
      "transactions",
      JSON.stringify(transactions)
    );

    alert(
      `₹${amount} transferred successfully to Account No: ${accountNumber}`
    );

    setAccountNumber("");
    setAmount("");
  };

  return (
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
            placeholder="Amount"
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
  );
}

export default TransferMoney;
