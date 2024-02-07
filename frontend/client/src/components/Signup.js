// client/src/components/Signup.js

import React, { useState } from 'react';
import { signup } from '../api';

function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      await signup({ username, password });
      alert('Signup successful!');
    } catch (error) {
      console.error('Error signing up:', error);
      alert('Signup failed. Please try again.');
    }
  };

  return (
    <div className="container">
      <h2>Signup</h2>
      <form>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="mb-3">
          <input type="password" className="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="button" className="btn btn-primary" onClick={handleSignup}>Signup</button>
      </form>
    </div>
  );
}

export default Signup;

