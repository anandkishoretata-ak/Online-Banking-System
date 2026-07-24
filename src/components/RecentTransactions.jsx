import { useEffect, useState } from "react";
import axios from "axios";

function RecentTransactions() {
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

          console.log(
            "TOKEN:",
            token
          );

          const res = await axios.get(
            "http://online-banking-system-backend-yeov.onrender.com/api/transactions/history",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          console.log(
            "API RESPONSE:",
            res.data
          );

          setTransactions(
            res.data.slice(0, 5)
          );

        } catch (error) {
          console.log(
            "FULL ERROR:",
            error
          );

          console.log(
            "RESPONSE:",
            error.response?.data
          );

          console.log(
            "STATUS:",
            error.response?.status
          );
        } finally {
          setLoading(false);
        }
      };

    fetchTransactions();
  }, []);

  return (
    <div className="card">
      <h3>Recent Transactions</h3>

      {loading ? (
        <p>Loading...</p>
      ) : transactions.length === 0 ? (
        <p>No Transactions Found</p>
      ) : (
        transactions.map((item) => (
          <div
            key={item._id}
            style={{
              marginBottom: "10px",
            }}
          >
            <p>
              <strong>
                {item.type.toUpperCase()}
              </strong>
            </p>

            <p>
              ₹{item.amount}
            </p>

            <small>
              {new Date(
                item.createdAt
              ).toLocaleString()}
            </small>

            <hr />
          </div>
        ))
      )}
    </div>
  );
}

export default RecentTransactions;