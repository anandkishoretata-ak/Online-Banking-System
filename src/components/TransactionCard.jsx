import { useEffect, useState } from "react";
import axios from "axios";

function TransactionCard() {
  const [count, setCount] =
    useState(0);

  useEffect(() => {
    const fetchTransactions =
      async () => {
        try {
          const token =
            localStorage.getItem(
              "token"
            );

          const res =
            await axios.get(
              "http://localhost:8000/api/transactions/history",
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );

          setCount(res.data.length);

        } catch (error) {
          console.log(error);
        }
      };

    fetchTransactions();
  }, []);

  return (
    <div className="card">
      <h3>Total Transactions</h3>

      <h1>{count}</h1>
    </div>
  );
}

export default TransactionCard;