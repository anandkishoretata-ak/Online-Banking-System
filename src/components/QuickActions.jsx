import { Link } from "react-router-dom";

function QuickActions() {
  return (
    <div className="quick-actions">

      <Link to="/deposit">
        <button>
          Deposit
        </button>
      </Link>

      <Link to="/withdraw">
        <button>
          Withdraw
        </button>
      </Link>

      <Link to="/transfer">
        <button>
          Transfer
        </button>
      </Link>

    </div>
  );
}

export default QuickActions;