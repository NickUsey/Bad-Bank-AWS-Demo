function Spa() {
  return (
    <HashRouter>
      <NavBar/>
      <UserContext.Provider 
        value={{
          users:[
            {
              name:'Nicholas Usey',
              email:'nick@mit.edu',
              password:'dogsrule',
              balance: 100,
            },
          ],
          transactions: [],
        }}
      >
        <div className="container" style={{padding: "20px"}}>
          <Route path="/home" exact component={Home} />
          <Route path="/CreateAccount/" component={CreateAccount} />
          <Route path="/login/" component={Login} />
          <Route path="/deposit/" component={Deposit} />
          <Route path="/withdraw/" component={Withdraw} />
          <Route path="/balance/" component={Balance} />
          <Route path="/alldata/" component={AllData} />
        </div>
      </UserContext.Provider>      
    </HashRouter>
  );
}

ReactDOM.render(<Spa/>, document.getElementById('root'));
