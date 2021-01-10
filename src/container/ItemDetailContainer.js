import React, {useEffect, useState} from 'react';
import ItemDetail from './ItemDetail';
import {useParams} from 'react-router-dom';

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

function ItemDetailContainer () {

    const [item, setItem] = useState();
    const {id} = useParams();

    useEffect ( () => {
        const getItems = new Promise ((resolve,reject) => {
            setTimeout(() => {
                const i = products.find(product => products.id === id)
                resolve(i)
            }, 2000)
        })
        getItems
            .then(result => setItem(result))
            .catch(err => console.log("algo salio mal"))
    }, [])

    return (
        <div> {
            item 
            ?
            <ItemDetail id={item.id} name={item.name} image={item.image} price={item.price} description={item.description}
            stock={item.stock}/>
            :
            <p>Estamos cargando el producto...</p>
            
            }
            
        </div>
    )
}

export default ItemDetailContainer
