function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');
  const ctx = useContext(UserContext);

  function validate(field, label) {
    if (!field) {
      setStatus('Error: ' + label);
      setTimeout(() => setStatus(''), 3000);
      return false;
    }
    return true;
  }

  function handleCreate() {
    if (!validate(email, 'email')) 
    return;

    if (!validate(password, 'password')) 
    return;

    ctx.currentUser = {email, password};
    setShow(false);
  }

  function clearForm() {
    setEmail('');
    setPassword('');
    setStatus('Logged in successfully');
    setShow(true);
  }

  return (
    <Card
      bgcolor="primary"
      header="Login"
      status={status}
      body={
        <>
          Email address
          <br/>
          <input
            type="input"
            className="form-control"
            id="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
          <br />
          Password<br />
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
          <br />
          <button
            type="submit"
            className="btn btn-light"
            onClick={handleLogin}
          >
            Login
          </button>
        </>
      }
    />
  );
}
