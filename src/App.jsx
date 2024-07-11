import { useState } from 'react';
import './App.css';
import { NavBar } from './components/Navbar';
import { ItemListContainer } from './components/ItemListContainer';


function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer saludo="Hasta Luego!!"/>
    </>
  )
};


export default App;