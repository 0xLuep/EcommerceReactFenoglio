import React from 'react'
import ReactDOM from 'react-dom/client'
import { initializeApp } from "firebase/app";
import App from './App.jsx'

const firebaseConfig = {
  apiKey: "AIzaSyAP42N_Zva9YjNbwYv8j3AP5nJlbLWcTek",
  authDomain: "pfreactcoderh.firebaseapp.com",
  projectId: "pfreactcoderh",
  storageBucket: "pfreactcoderh.appspot.com",
  messagingSenderId: "257561844686",
  appId: "1:257561844686:web:76b4a25fd23d34be60e99f"
};

const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
