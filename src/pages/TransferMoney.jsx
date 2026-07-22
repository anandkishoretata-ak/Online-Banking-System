import { useState } from "react";
import { FaMoneyCheckAlt } from "react-icons/fa";
import axios from "axios";
import "../styles/Banking.css";

function TransferMoney() {
  const [receiverEmail, setReceiverEmail] =
    useState("");

  const [amount, setAmount] =
    useState("");

  const handleTransfer = async (e) => {
    e.preventDefault();

    if (!receiverEmail || !amount) {
      alert("Please fill all fields.");
      return;
    }

    if (Number(amount) <= 0) {
      alert("Please enter a valid amount.");
      return;
    }

    try {
      const token =
        localStorage.getItem("token");

      const res = await axios.post(
        "http://localhost:8000/api/account/transfer",
        {
          receiverEmail,
          amount,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert(res.data.message);

      setReceiverEmail("");
      setAmount("");

    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Transfer Failed"
      );
    }
  };

  return (
    <div className="banking-container">
      <div className="banking-card">

        <h2>
  <FaMoneyCheckAlt />
  {" "}Transfer Money
</h2>

        <form onSubmit={handleTransfer}>

          <input
            type="email"
            placeholder="Receiver Email"
            value={receiverEmail}
            onChange={(e) =>
              setReceiverEmail(
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
  );
}

export default TransferMoney;