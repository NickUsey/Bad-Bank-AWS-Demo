import React, { useState } from "react";
import { Card } from './context';


function AnimateCount(startValue, endValue, duration, updateCallback) {
  const increment = (endValue - startValue) / (duration / 16);

  let currentValue = startValue;
  const interval = setInterval(() => {
    currentValue += increment;

    if (currentValue >= endValue) {
      currentValue = endValue;
      clearInterval(interval);
    }

    // Update the displayed value
    updateCallback(currentValue);
  }, 16);
}

function Deposit() {
  const [depositAmount, setDepositAmount] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [animatedBalance, setAnimatedBalance] = useState(1000); // Initial balance for demonstration

  const handleDeposit = () => {
    if (!isNaN(depositAmount) && parseFloat(depositAmount) >= 0) {
      const depositValue = parseFloat(depositAmount);
      const currentBalance = animatedBalance;
      const newBalance = currentBalance + depositValue;

      // Update balance with animation
      AnimateCount(currentBalance, newBalance, 1000, (updatedValue) => {
        setAnimatedBalance(updatedValue);
      });

      // Rest of your code remains the same...
      setSuccessMessage("Deposit successful!");
      setDepositAmount("");
      setErrorMessage("");
    } else {
      setErrorMessage("Please enter a valid positive number for deposit.");
    }
  };

  return (
    <div className="deposit-container">
      <h1 className="deposit-title">Deposit</h1>
      <div className="deposit-card">
        <div className="deposit-card-header">Complete form below to deposit money</div>
        <div className="deposit-card-body">
          <p className="balance-text">
            <b>Current Balance:</b> ${animatedBalance.toFixed(2)}
          </p>
          {successMessage && <div className="success-alert">{successMessage}</div>}
          {errorMessage && <div className="error-alert">{errorMessage}</div>}
          <div className="form-group">
            <label htmlFor="depositAmount">Deposit Amount:</label>
            <input
              type="text"
              className="form-control"
              id="depositAmount"
              value={depositAmount}
              onChange={(e) => setDepositAmount(e.target.value)}
            />
          </div>
          <button
            className="deposit-button"
            onClick={handleDeposit}
            disabled={!depositAmount}
          >
            Deposit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Deposit;









/*function Deposit(){
  return (
    <h1>Deposit</h1>
  )
}*/