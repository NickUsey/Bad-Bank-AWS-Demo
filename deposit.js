function Deposit() {
  const [depositAmount, setDepositAmount] = useState('');
  const [balance, setBalance] = useState(100); 
  const [message, setMessage] = useState('');
  const [alert, setAlert] = useState('');

  const handleDeposit = () => {
    const amount = parseFloat(depositAmount);

    if (isNaN(amount)) {
      setAlert('Please enter a valid number.');
    } else if (amount < 0) {
      setAlert('Please enter a positive amount.');
    } else {
      setBalance(balance + amount);
      setMessage(`Successfully deposited $${amount}`);
      setDepositAmount('');
      setAlert('');
    }
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Deposit Funds</h5>
          <p className="card-text">Balance: ${balance.toFixed(2)}</p>
          {message && <p className="text-success">{message}</p>}
          {alert && <p className="text-danger">{alert}</p>}
          <div className="form-group">
            <label htmlFor="depositAmount">Deposit Amount:</label>
            <input
              type="number"
              className="form-control"
              id="depositAmount"
              value={depositAmount}
              onChange={(e) => setDepositAmount(e.target.value)}
            />
          </div>
          <button
            className="btn btn-primary"
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
