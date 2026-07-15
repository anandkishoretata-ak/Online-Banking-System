import { useState } from "react";
import "../styles/Banking.css";

function WithdrawMoney() {
  const [amount, setAmount] = useState("");

  const handleWithdraw = (e) => {
    e.preventDefault();

    if (!amount || Number(amount) <= 0) {
      alert("Please enter a valid amount.");
      return;
    }

    const newTransaction = {
      type: "Withdraw",
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

    alert(`₹${amount} withdrawn successfully!`);

    setAmount("");
  };

  return (
    <div className="banking-container">
      <div className="banking-card">
        <h2>Withdraw Money</h2>

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
  );
}

export default WithdrawMoney;
