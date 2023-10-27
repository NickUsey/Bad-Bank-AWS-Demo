import React, { useState, useContext } from 'react';
import { UserContext } from './UserContext'; // Make sure to import the UserContext from the correct location

function LoginPage() {
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

  function handleLogin() {
    if (!validate(email, 'email')) return;
    if (!validate(password, 'password')) return;

    // You can add your login logic here. For example, check if the email and password are correct.

    // If the login is successful, you can update the user context.
    // Replace this with your actual logic.
    ctx.currentUser = {
      email,
      // You can set other user properties here if needed
    };

    // Clear the form
    setEmail('');
    setPassword('');
    setStatus('Logged in successfully');
  }

  return (
    <Card
      bgcolor="primary"
      header="Login"
      status={status}
      body={
        <>
          Email address<br />
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

export default LoginPage;
