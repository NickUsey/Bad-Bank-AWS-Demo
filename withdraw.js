function animateCountDecrease(startValue, endValue, duration, updateCallback) {
  const decrement = (startValue - endValue) / (duration / 16);

  let currentValue = startValue;
  const interval = setInterval(() => {
    currentValue -= decrement;

    if (currentValue <= endValue) {
      currentValue = endValue;
      clearInterval(interval);
    }

    // Update the displayed value
    updateCallback(currentValue);
  }, 16);
}

function Withdraw() {
  const ctx = React.useContext(UserContext);

  const [withdrawAmount, setWithdrawAmount] = React.useState('');
  const [balance, setBalance] = React.useState(ctx.users[0].balance);
  const [message, setMessage] = React.useState('');
  const [alert, setAlert] = React.useState('');

  const handleWithdraw = () => {
    const amount = parseFloat(withdrawAmount);

    if (isNaN(amount)) {
      setAlert('Please enter a valid number.');
    } else if (amount < 0) {
      setAlert('Please enter a positive amount.');
    } else if (amount > balance) {
      setAlert('Insufficient funds for withdrawal.');
    } else {
      const newBalance = balance - amount;
      setBalance(newBalance);

      ctx.transactions.push({
        type: 'Withdraw',
        amount: amount.toLocaleString('en-US', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }),
        user: ctx.users[0].name,
        newbalance: newBalance,
      });

      setMessage(`Successfully withdrew $${amount}`);
      setWithdrawAmount('');
      setAlert('');

      // Call animateCountDecrease to update the displayed balance with animation
      animateCountDecrease(balance, newBalance, 1000, (updatedValue) => {
        // Update the displayed balance with the animated value
        setBalance(updatedValue);
      });
    }
  };

  return (
    <div className="col-md-5 mb-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Withdraw Funds</h5>
          <p className="card-text">Balance: ${balance.toFixed(2)}</p>
          {message && <p className="text-success">{message}</p>}
          {alert && <p className="text-danger">{alert}</p>}
          <div className="form-group">
            <label htmlFor="withdrawAmount">Withdraw Amount:</label>
            <input
              type="number"
              className="form-control"
              id="withdrawAmount"
              value={withdrawAmount}
              onChange={(e) => setWithdrawAmount(e.target.value)}
            />
          </div>
          <button
            className="btn btn-primary"
            onClick={handleWithdraw}
            disabled={!withdrawAmount}
          >
            Withdraw
          </button>
        </div>
      </div>
    </div>
  );
}
