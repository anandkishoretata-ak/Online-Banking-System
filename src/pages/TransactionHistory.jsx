
import Sidebar from "../components/Sidebar";
import "../styles/Dashboard.css";

function TransactionHistory() {
  const transactions =
    JSON.parse(
      localStorage.getItem("transactions")
    ) || [];

  return (
    <div className="dashboard">
      <Sidebar />

      <div className="main-content">
        <h2>Transaction History</h2>

        <table className="history-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Account</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>

          <tbody>
            {transactions.length > 0 ? (
              transactions.map(
                (item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.type}</td>
                    <td>₹{item.amount}</td>
                    <td>
                      {item.accountNumber ||
                        "-"}
                    </td>
                    <td>{item.date}</td>
                    <td>{item.time}</td>
                  </tr>
                )
              )
            ) : (
              <tr>
                <td
                  colSpan="6"
                  style={{
                    textAlign: "center",
                  }}
                >
                  No Transactions Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TransactionHistory;