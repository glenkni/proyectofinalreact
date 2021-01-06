import React, {useState, useEffect} from 'react';
import ItemList from './ItemList';

function ItemListContainer() {

        const [list, setList] = useState([]);

        const productos = [{
            id : 1,
            name : "Sillas comedor",
            description: "Sillas de madera con tapizado",
            price: 150,
            image: "/public/img/sillasexterior.jpg",
            stock: 5  
        }, {
            id : 2,
            name : "Mesa comedor",
            description: "Mesa comedor para 6 comensales" , 
            price: 200,
            image: "/public/img/mesacomedor.jpg",
            stock: 4
        }, {
            id : 3,
            name : "Mesa ratona",
            description: "Mesa ratona" ,
            price: 100,
            image: "/public/img/mesaratona.jpg",
            stock: 3
        }, {
            id : 4,
            name : "Estante",
            description: "Estante de madera" ,
            price: 70,
            image: "/public/img/estante.jpeg",
            stock: 4
        }
        ];

        useEffect ( () => {
            let promesa = new Promise ((resolve, reject) => {
                setTimeout(() => {
                    resolve(productos);
                }, 2000)
                })
        
            promesa
                .then((resultado)=> {   
                    setList(resultado);     
                })
                .catch((resultado)=>{
                    console.log({resultado})
                }) 

        },[])
           
    

   return (
        <>
        <ItemList list={list} />            
        </>
    )
};

export default ItemListContainer;


