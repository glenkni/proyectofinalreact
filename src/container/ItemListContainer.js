import React, {useState, useEffect} from 'react';
import ItemList from './ItemList';

function ItemListContainer() {

        const [list, setList] = useState([]);

        const productos = [{
            id : 1,
            name : "Sillas comedor",
            description: "Sillas de madera con tapizado",
            stock: 5  
        }, {
            id : 2,
            name : "Mesa comedor",
            description: "Mesa comedor para 6 comensales" , 
            stock: 4
        }, {
            id : 3,
            name : "Mesa ratona",
            description: "Mesa ratona" ,
            stock: 3
        }, {
            id : 4,
            name : "Perchero",
            description: "Perchero de madera" ,
            stock:4
        }
        ];

        useEffect ( () => {
            let promesa = new Promise ((resolve, reject) => {
                setTimeout(() => {
                    resolve(productos);
                    reject('Hubo un problema');
                }, 2000)
                })
        
            promesa
                .then((productos)=> {   
                    setList(productos);     
                })
                .catch(()=>{
                    console.log('Algo salio mal')
                }) 

        },[])
           
    

   return (
        <>
        <ItemList list={list} />            
        </>
    )
};

export default ItemListContainer;


