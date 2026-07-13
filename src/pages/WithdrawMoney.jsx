import { useState } from "react";
import "../styles/Banking.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function WithdrawMoney() {
  const [amount, setAmount] = useState("");

  const handleWithdraw = (e) => {
    e.preventDefault();

    if (!amount) {
      toast.error("Please enter an amount");
      return;
    }

    toast.success(`₹${amount} withdrawn successfully`);

    setAmount("");
  };

  return (
    <>
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

      <ToastContainer
        position="top-right"
        autoClose={3000}
      />
    </>
  );
}

export default WithdrawMoney;
