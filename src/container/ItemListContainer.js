import React, {useState, useEffect} from 'react';
import ItemList from './ItemList';



function ItemListContainer() {

        const [list, setList] = useState([]);
      
        const productos = [{
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

        useEffect ( () => {
            const promesa = new Promise ((resolve, reject) => {
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
        <h2 className="mt-5 text-center">Lista de productos</h2>
        <div className="d-flex flex-row">
        <ItemList list={list} />            
        </div>
        </>
    )
};

export default ItemListContainer;


