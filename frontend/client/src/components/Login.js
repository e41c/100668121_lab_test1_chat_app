// client/src/components/Login.js

import React, { useState } from 'react';
import { login } from '../api';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await login({ username, password });
      alert('Login successful!');
      // Redirect to chat page or handle login state here
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Login failed. Please check your username and password.');
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="mb-3">
          <input type="password" className="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="button" className="btn btn-primary" onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
}

export default Login;

