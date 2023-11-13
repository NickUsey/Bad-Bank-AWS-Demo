function Balance() {
    const ctx = React.useContext(UserContext);
  
    const { users, currentUserEmail } = ctx;
  
    const currentUser = users.find((user) => user.email === currentUserEmail);
  
    return (
      <Card
        bgColorClass="primary"
        textColorClass="text-white"
        header="Balance"
        body={
          <div>
            <p>
              Balance: ${currentUser ? currentUser.balance.toFixed(2) : 0.00}
            </p>
          </div>
        }
      />
    );
  }
  
