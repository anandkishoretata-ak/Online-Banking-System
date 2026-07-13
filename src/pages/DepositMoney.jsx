import { useState } from "react";
import "../styles/Banking.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function DepositMoney() {
  const [amount, setAmount] = useState("");

  const handleDeposit = (e) => {
    e.preventDefault();

    if (!amount) {
      alert("Enter amount");
      return;
    }

    toast.success(`₹${amount} deposited successfully`);
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
       <ToastContainer />
    </div>
  );
}

export default DepositMoney;
