// client/src/App.js
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { signup, login } from './api';
import Chat from './components/Chat';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSignup = async () => {
    try {
      await signup({ username, password });
      alert('Signup successful!');
    } catch (error) {
      console.error('Error signing up:', error);
      alert('Signup failed. Please try again.');
    }
  };

  const handleLogin = async () => {
    try {
      await login({ username, password });
      setLoggedIn(true);
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Login failed. Please check your username and password.');
    }
  };

  return (
    <Router>
      <Switch>
        <Route path="/signup">
          <div>
            <h2>Signup</h2>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleSignup}>Signup</button>
          </div>
        </Route>
        <Route path="/login">
          <div>
            <h2>Login</h2>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
          </div>
        </Route>
        <Route path="/chat">
          {loggedIn ? <Chat /> : <Redirect to="/login" />}
        </Route>
        <Route path="/">
          <div>
            <h2>Welcome to the Chat App</h2>
            <p>Please sign up or login to start chatting</p>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
