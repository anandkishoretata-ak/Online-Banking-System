import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/TransactionHistory.css";

function TransactionHistory() {
  const [transactions, setTransactions] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const fetchTransactions =
      async () => {
        try {
          const token =
            localStorage.getItem("token");

          const res = await axios.get(
            "http://localhost:8000/api/transactions/history",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          setTransactions(res.data);

        } catch (error) {
          console.log(error);

          alert(
            error.response?.data?.message ||
              "Failed to load transactions"
          );
        } finally {
          setLoading(false);
        }
      };

    fetchTransactions();
  }, []);

  return (
    <div className="history-page">

      <div className="history-header">
        <h1>📄 Transaction History</h1>

        <p>
          View all your deposits,
          withdrawals and transfers.
        </p>
      </div>

      <div className="history-card">

        {loading ? (
          <h3>Loading Transactions...</h3>

        ) : transactions.length === 0 ? (
          <h3>No Transactions Found</h3>

        ) : (
          <table className="history-table">

            <thead>
              <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Date & Time</th>
              </tr>
            </thead>

            <tbody>
              {transactions.map((t) => (
                <tr key={t._id}>

                  <td>
                    <span
                      className={`badge ${t.type}`}
                    >
                      {t.type}
                    </span>
                  </td>

                  <td>
                    ₹{t.amount}
                  </td>

                  <td>
                    {new Date(
                      t.createdAt
                    ).toLocaleString()}
                  </td>

                </tr>
              ))}
            </tbody>

          </table>
        )}

      </div>
    </div>
  );
}

export default TransactionHistory;