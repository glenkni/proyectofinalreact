import React, {useEffect, useState} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './container/ItemListContainer';
import ItemCount from './components/ItemCount';
import ItemDetailContainer from './container/ItemDetailContainer';

const products = [{
  id : 1,
  name : "Sillas exterior",
  description: "Sillas bajas de exterior con base de hierro",
  price: 150,
  image: "https://i.ibb.co/C5RcSB2/sillasexterior.jpg",
  stock: 5,
  categoryId: "sillas"  
}, {
  id : 2,
  name : "Mesa comedor",
  description: "Mesa comedor para 6 comensales con patas de hierro" , 
  price: 200,
  image: "https://i.ibb.co/w4K3nsJ/mesacomedor.jpg",
  stock: 4,
  categoryId: "mesas"
}, {
  id : 3,
  name : "Mesa ratona",
  description: "Mesa ratona con base de hierro" ,
  price: 100,
  image: "https://i.ibb.co/rbHgj66/mesaratona.jpg",
  stock: 3,
  cateogryId: "mesas"
}, {
  id : 4,
  name : "Estante",
  description: "Estante de madera petiribi" ,
  price: 70,
  image: "https://i.ibb.co/zSbhd61/estante.jpg",
  stock: 4,
  categoryId: "estantes"
}
];

function App() {

  const [items, setItems] = useState([]);
        
        useEffect ( () => {
            const promesa = new Promise ((resolve, reject) => {
                setTimeout(() => {
                    resolve(products);
                }, 2000)
                })
        
            promesa
                .then((result)=> {   
                    setItems(result);     
                })
                .catch(err =>{
                    console.log("hubo un error")
                }) 

        },[])

  
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route exact path="/">
            <ItemListContainer titulo="Lista de productos" products={items} />
          </Route>
          <Route exact path="/category/:id">
            <ItemListContainer titulo="Lista de productos" products={items} />
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
