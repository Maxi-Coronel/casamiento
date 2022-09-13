import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBz6zA_3g8kR63pwSNaImZRqAQqSav7ONs",
  authDomain: "casamiento-49cea.firebaseapp.com",
  projectId: "casamiento-49cea",
  storageBucket: "casamiento-49cea.appspot.com",
  messagingSenderId: "400603757885",
  appId: "1:400603757885:web:383766ca69f07275d09954"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
