import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Keep this import to use your App component

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Removed import './index.css' and reportWebVitals() since they are no longer used
