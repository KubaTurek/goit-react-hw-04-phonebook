import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import './index.css';
import { PhonebookProvider } from './Context/PhonebookContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <PhonebookProvider>
    <App />
  </PhonebookProvider>
  </React.StrictMode>
);
