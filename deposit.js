import React, { useState, useContext } from 'react';
import { UserContext } from './context'; 

function Deposit() {
  const ctx = useContext(UserContext);

  const [depositAmount, setDepositAmount] = useState('');
  const [balance, setBalance] = useState(''); // Replace with the user's actual balance
  const [message, setMessage] = useState('');
  const [disableDeposit, setDisableDeposit] = useState(true);

  const handleDeposit = () => {
    const amount = parseFloat(depositAmount);

    if (isNaN(amount)) {
      setMessage('Please enter a valid deposit amount.');
      return;
    }

    if (amount <= 0) {
      setMessage('Please enter a positive deposit amount.');
      return;
    }

    // Update the balance
    setBalance(balance + amount);

    setMessage(`Deposit of $${amount} received. New balance: $${balance + amount}`);

    // Clear the input field and disable the deposit button
    setDepositAmount('');
    setDisableDeposit(true);
  };

  const handleAmountChange = (event) => {
    const inputAmount = event.target.value;
    setDepositAmount(inputAmount);

    if (isNaN(parseFloat(inputAmount)) || parseFloat(inputAmount) <= 0) {
      setDisableDeposit(true);
    } else {
      setDisableDeposit(false);
    }
  };

  return (
    <div>
      <h1>Deposit</h1>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Deposit Funds</h5>
          <p className="card-text">Current Balance: ${balance}</p>
          <div className="form-group">
            <label htmlFor="depositAmount">Deposit Amount:</label>
            <input
              type="number"
              id="depositAmount"
              value={depositAmount}
              onChange={handleAmountChange}
            />
          </div>
          {message && <p className="alert alert-success">{message}</p>}
          <button onClick={handleDeposit} disabled={disableDeposit}>
            Deposit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Deposit;
