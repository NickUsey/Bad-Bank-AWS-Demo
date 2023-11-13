function Home() {
  const ctx = React.useContext(UserContext);
  const { users } = ctx;
  const user = users[0];

  return (
    <Card
      bgcolor="white"
      txtcolor="black"
      header="BadBank Web App"
      title="Welcome to the bank!"
      text="Take all the money you like."
      blueBorder={true}
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
