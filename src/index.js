import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MoralisProvider } from "react-moralis";
// require('dotenv').config({path: false, os:false})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MoralisProvider appId={process.env.REACT_APP_ID_KEY} serverUrl={process.env.REACT_APP_SERVER_URL_KEY} >
      <App />
    </MoralisProvider>
  </React.StrictMode>
);


