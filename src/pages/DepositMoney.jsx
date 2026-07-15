import { useState } from "react";
import "../styles/Banking.css";

function DepositMoney() {
  const [amount, setAmount] = useState("");

  const handleDeposit = (e) => {
    e.preventDefault();

    if (!amount || Number(amount) <= 0) {
      alert("Please enter a valid amount.");
      return;
    }

    const newTransaction = {
      type: "Deposit",
      amount,
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

    alert(`₹${amount} deposited successfully!`);

    setAmount("");
  };

  return (
    <div className="banking-container">
      <div className="banking-card">
        <h2>Deposit Money</h2>

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
  );
}

export default DepositMoney;
