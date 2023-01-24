import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import './index.css';
import { PhonebookProvider } from './PhonebookContext/PhonebookContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <PhonebookProvider>
    <App />
  </PhonebookProvider>
);
