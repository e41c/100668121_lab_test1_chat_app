// client/src/socket.js

import io from 'socket.io-client';

const socket = io('http://localhost:5000'); // Connect to the server

export default socket;
