import React, { useState } from 'react';
import Routes from '../Router';
import { ContextCart } from '../context';
import './App.css';

function App() {
  const [itemsCart, setItemsCart] = useState([]);
  return (
    <div className='App'>
      <ContextCart.Provider value={{ itemsCart, setItemsCart }}>
        <Routes />
      </ContextCart.Provider>
    </div>
  );
}

export default App;
