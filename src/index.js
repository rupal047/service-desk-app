// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Keep this if you want some global styles
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);