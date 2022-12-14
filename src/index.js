import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { CartContextProvedor } from './context/CartContext';
import { FirestoreApp } from './firebase/config';

FirestoreApp();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CartContextProvedor>
   <BrowserRouter>
      <App />
   </BrowserRouter>
  </CartContextProvedor>
    
  
);


