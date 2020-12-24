import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting="Bienvenido a mi sitio web" greeting2="Estamos trabajando para brindarte una mejor atención"/>
    </>
  );
}

export default App;
