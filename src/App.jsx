import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

import ProtectedRoute from "./components/ProtectedRoute";

// Pages
import DepositMoney from "./pages/DepositMoney";
import WithdrawMoney from "./pages/WithdrawMoney";
import TransferMoney from "./pages/TransferMoney";
import TransactionHistory from "./pages/TransactionHistory";
import Profile from "./pages/Profile";

// Toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import NotFound
from "./pages/NotFound";

function App() {
  return (
    
    <BrowserRouter>
  <ToastContainer
    position="top-right"
    autoClose={3000}
  />

  <Routes>
    <Route path="/" element={<Home />} />

    <Route path="/login" element={<Login />} />

    <Route path="/register" element={<Register />} />

    <Route
      path="/dashboard"
      element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      }
    />

    <Route
      path="/deposit"
      element={
        <ProtectedRoute>
          <DepositMoney />
        </ProtectedRoute>
      }
    />

    <Route
      path="/withdraw"
      element={
        <ProtectedRoute>
          <WithdrawMoney />
        </ProtectedRoute>
      }
    />
    

    <Route
      path="/transfer"
      element={
        <ProtectedRoute>
          <TransferMoney />
        </ProtectedRoute>
      }
    />
    <Route
      path="/history"
      element={<TransactionHistory />}
          />

    
    

    <Route
      path="/profile"
      element={
        <ProtectedRoute>
          <Profile />
        </ProtectedRoute>
      }
    />

    <Route
      path="*"
      element={<NotFound />}
    />
  </Routes>
</BrowserRouter>

  );
}

export default App;
