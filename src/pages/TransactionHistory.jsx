import { useEffect, useState } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

import Sidebar from "../components/Sidebar";
import ProfileHeader from "../components/ProfileHeader";

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
            "http://online-banking-system-backend-yeov.onrender.com/api/transactions/history",
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

  const downloadPDF = () => {
    const doc = new jsPDF();

    const user =
      JSON.parse(
        localStorage.getItem("user")
      ) || {};

    doc.setFontSize(18);
    doc.text(
      "AK BANK - Account Statement",
      14,
      20
    );

    doc.setFontSize(12);

    doc.text(
      `Account Holder: ${user.name}`,
      14,
      30
    );

    doc.text(
      `Account Number: ${
        user.accountNumber || "N/A"
      }`,
      14,
      38
    );

    doc.text(
      `Generated: ${new Date().toLocaleString()}`,
      14,
      46
    );

    autoTable(doc, {
      startY: 55,

      head: [
        [
          "Type",
          "Amount",
          "Receiver",
          "Date & Time",
        ],
      ],

      body: transactions.map(
        (t) => [
          t.type,
          `₹${t.amount}`,
          t.receiver || "-",
          new Date(
            t.createdAt
          ).toLocaleString(),
        ]
      ),
    });

    doc.save(
      "AK_BANK_STATEMENT.pdf"
    );
  };

  return (
    <div className="dashboard">

      <Sidebar />

      <div className="main-content">

        <ProfileHeader />

        <div className="history-page">

          <div className="history-header">

            <h1>
              📄 Transaction History
            </h1>

            <p>
              View all your deposits,
              withdrawals and transfers.
            </p>

            <button
              className="download-btn"
              onClick={downloadPDF}
            >
              📥 Download Statement
            </button>

          </div>

          <div className="history-card">

            {loading ? (
              <h3>
                Loading Transactions...
              </h3>

            ) : transactions.length === 0 ? (
              <h3>
                No Transactions Found
              </h3>

            ) : (
              <table className="history-table">

                <thead>
                  <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Receiver</th>
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
                        {t.receiver || "-"}
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

      </div>

    </div>
  );
}

export default TransactionHistory;