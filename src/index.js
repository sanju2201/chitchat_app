import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { DarkModeContextProvider } from './context/darkModeContext';
import { UserContextProvider } from './context/UserContext'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserContextProvider>
    <DarkModeContextProvider>
      <App />
    </DarkModeContextProvider>
  </UserContextProvider>

);


