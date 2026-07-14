function RecentTransactions() {
  const transactions = [
    {
      id: 1,
      type: "Deposit",
      amount: 5000,
    },
    {
      id: 2,
      type: "Withdraw",
      amount: 2000,
    },
    {
      id: 3,
      type: "Transfer",
      amount: 1500,
    },
  ];

  return (
    <div className="card">
      <h3>Recent Transactions</h3>

      {transactions.map((item) => (
        <p key={item.id}>
          {item.type} - ₹{item.amount}
        </p>
      ))}
    </div>
  );
}

export default RecentTransactions;
