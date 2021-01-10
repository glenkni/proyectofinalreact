import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './container/ItemListContainer';
import ItemCount from './components/ItemCount';
import ItemDetailContainer from './container/ItemDetailContainer';



function App() {

  
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route exact path="/">
            <ItemListContainer />
          </Route>
          <Route exact path="/category/:id">
            <ItemListContainer />
          </Route>
          <Route exact path="/item/:id">
            <ItemDetailContainer/>
          </Route>
          <ItemCount min={1} max={5} onAdd={()=> {console.log('lo agregaste!')}}/>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
