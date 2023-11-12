function UserCard({ user }) {
  return (
    <div className="card bg-primary text-white">
      <h5 className="card-header">{user.name}</h5>
      <div className="card-body">
        <p className="card-text" bgcolor="primary">
          <strong>Email:</strong> {user.email}
        </p>
        <p className="card-text">
          <strong>Password:</strong> {user.password}
        </p>
        <p className="card-text">
          <strong>Account Balance:</strong>
          {" $"}
          {parseFloat(user.balance).toLocaleString("en-US")}
        </p>
      </div>
    </div>
  );
}

function TransactionCard({ transaction }) {
  const cardBackgroundColor =
    transaction.type === "Deposit" ? "success" : "danger";
  return (
    <div className={`card bg-${cardBackgroundColor} text-white`}>
      <h5 className="card-header">{transaction.type}</h5>
      <div className="card-body">
        <p className="card-text" bgcolor="primary">
          <strong>Name:</strong> {transaction.user}
        </p>
        <p className="card-text">
          <strong>Transaction Amount:</strong>
          {" $"}
          {parseFloat(transaction.amount).toLocaleString("en-US")}
        </p>
        <p className="card-text">
          <strong>New Balance:</strong>
          {" $"}
          {parseFloat(transaction.newbalance).toLocaleString("en-US")}
        </p>
      </div>
    </div>
  );
}

function AllData() {
  const ctx = React.useContext(UserContext);
  const { users, transactions } = ctx;

  return (
    <>
      <h5>User Accounts</h5>
      <div className="row">
        {users.map((user, index) => (
          <div className="col-md-4 mb-3" key={index}>
            <UserCard user={user} />
          </div>
        ))}
      </div>

      {transactions.length > 0 && (
        <>
          <h5>User Transactions</h5>
          <div className="row">
            {transactions.map((transaction, index) => (
              <div className="col-md-4 mb-3" key={index}>
                <TransactionCard transaction={transaction} />
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}
