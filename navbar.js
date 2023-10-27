function NavBar(){
  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <a className="navbar-brand" href="#">BadBank</a>
      <button 
        className="navbar-toggler" 
        type="button" 
        data-toggle="collapse" 
        data-target="#navbarNav" 
        aria-controls="navbarNav" 
        aria-expanded="false" 
        aria-label="Toggle navigation"
        >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a 
              className="nav-link text white" 
              href="#/CreateAccount/"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Create a new account"
              >
                Create Account
              </a>
          </li>
          <li className="nav-item">
            <a 
              className="nav-link text-white" 
              href="#/login/"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Log into account"
              >
                Login
              </a>
          </li>
          <li className="nav-item">
            <a 
              className="nav-link text-white" 
              href="#/deposit/"
              data-toggle="tootip"
              data-placement="bottom"
              title="Deposit funds into account"
            >
              Deposit
            </a>
          </li>
          <li className="nav-item">
            <a 
              className="nav-link text-white" 
              href="#/withdraw/"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Withdraw funds from account"
            >
              Withdraw
            </a>
          </li>
          <li className="nav-item">
            <a 
              className="nav-link text-white"
              href="#/balance/"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Check the balance of the account"
            >
              Balance
            </a>
          </li>
          <li className="nav-item">
            <a 
              className="nav-link text-white" 
              href="#/alldata/"
              data-toggle="tooltip"
              data-placement="List of all accounts created"
            >
              AllData
            </a>
          </li>          
        </ul>
      </div>
    </nav>
  );
}
