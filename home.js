function Home() {
  const ctx = React.useContext(UserContext);
  const { users } = ctx;
  const user = users[0];

  return (
    <Card
      txtcolor="black"
      header="BadBank Landing Module"
      title="Welcome to the bank"
      text="You can move around using the navigation bar."
      body={
        <div>
          <p>
            Your Current Balance:
            <strong>
              {" $"}
              {parseFloat(user.balance).toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </strong>
          </p>
          <img src="bank.png" className="img-fluid" alt="Responsive image" />
        </div>
      }
    />
  );
}
