import { useEffect, useState } from "react";
import axios from "axios";

function RecentTransactions() {
  const [transactions, setTransactions] =
    useState([]);

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

          setTransactions(
            res.data.slice(0, 5)
          );
        } catch (error) {
          console.log(error);
        }
      };

    fetchTransactions();
  }, []);

  return (
    <div className="card">
      <h3>Recent Transactions</h3>

      {transactions.length === 0 ? (
        <p>No Transactions Found</p>
      ) : (
        transactions.map((item) => (
          <p key={item._id}>
            {item.type} - ₹{item.amount}
          </p>
        ))
      )}
    </div>
  );
}

export default RecentTransactions;