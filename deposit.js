function animateCount(startValue, endValue, duration, updateCallback) {
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
  const ctx = React.useContext(UserContext);

  const [depositAmount, setDepositAmount] = React.useState('');
  const [balance, setBalance] = React.useState(''); // Replace with the user's actual balance
  const [message, setMessage] = React.useState('');
  const [disableDeposit, setDisableDeposit] = React.useState(ctx.users[].balance);

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
      <div className="col-md-5 mb-3">
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

