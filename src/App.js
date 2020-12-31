import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './container/ItemListContainer';
import ItemCount from './container/ItemCount'


function App() {

  
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting="Bienvenido a mi sitio web" greeting2="Estamos trabajando para brindarte una mejor atención"/>
      <ItemCount min={1} max={5} onAdd={()=> {console.log('lo agregaste!')}}/>
    </>
  );
}

export default App;
