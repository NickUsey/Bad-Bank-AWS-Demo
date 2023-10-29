function Withdraw() {
  const [withdrawAmount, setWithdrawAmount] = React.useState('');
  const [balance, setBalance] = React.useState(100);
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
      setBalance(balance - amount);
      setMessage(`Successfully withdrew $${amount}`);
      setWithdrawAmount('');
      setAlert('');
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
