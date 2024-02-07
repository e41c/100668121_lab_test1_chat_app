// client/src/api.js

import axios from 'axios';

const API_URL = 'http://localhost:5000'; 

export const signup = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const login = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchMessages = async (room) => {
  try {
    const response = await axios.get(`${API_URL}/messages/${room}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const sendMessage = async (room, message) => {
  try {
    await axios.post(`${API_URL}/sendMessage`, { room, message });
  } catch (error) {
    throw error;
  }
};

export const joinRoom = async (room) => {
  try {
    await axios.post(`${API_URL}/joinRoom`, { room });
  } catch (error) {
    throw error;
  }
};
