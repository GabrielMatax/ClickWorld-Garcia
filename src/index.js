import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap'

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAPsjk1FbpC208XdcwM9JS61a8ccgUjQg0",
  authDomain: "clickworld-78a7b.firebaseapp.com",
  projectId: "clickworld-78a7b",
  storageBucket: "clickworld-78a7b.appspot.com",
  messagingSenderId: "470821256216",
  appId: "1:470821256216:web:4c429b3510abfc2e13576d"
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();
