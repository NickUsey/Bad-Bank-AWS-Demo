function Balance() {
    const ctx = useContext(UserContext);
  
    const { users, currentUserEmail } = ctx;
  
    const currentUser = users.find((user) => user.email === currentUserEmail);
  
    return (
      <Card
        bgColorClass="bg-info"
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
  
  export default Balance;
  