import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './container/ItemListContainer';
import ItemCount from './components/ItemCount';



function App() {

  
  return (
    <>
      <NavBar/>
      <ItemListContainer />
      <ItemCount min={1} max={5} onAdd={()=> {console.log('lo agregaste!')}}/>
    </>
  );
}

export default App;
