import { useState } from "react";
import Sidebar from "../components/Sidebar";
import "../styles/Dashboard.css";

function TransactionHistory() {
  const [search, setSearch] = useState("");

  const transactions = [
    {
      id: 1,
      date: "10-Jul-2026",
      type: "Deposit",
      amount: 5000,
      status: "Success",
    },
    {
      id: 2,
      date: "11-Jul-2026",
      type: "Withdraw",
      amount: 2000,
      status: "Success",
    },
    {
      id: 3,
      date: "12-Jul-2026",
      type: "Transfer",
      amount: 1500,
      status: "Pending",
    },
  ];

  const filteredTransactions = transactions.filter(
    (item) =>
      item.type
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <div className="dashboard">
      <Sidebar />

      <div className="main-content">
        <h2>Transaction History</h2>

        <input
          type="text"
          placeholder="Search by transaction type..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="search-input"
        />

        <table className="history-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {filteredTransactions.map((item) => (
              <tr key={item.id}>
                <td>{item.date}</td>
                <td>{item.type}</td>
                <td>₹{item.amount}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TransactionHistory;
