import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

function ItemListContainer({titulo, products}) {
    const [items, setItems] = useState([])
    const {id} = useParams()

    useEffect(() => {
        if(id){
            const category = products.filter(product => product.categoryId == id)
            setItems(category)
        }
        else{
            setItems(products)
        }
    }, [id, products])

    return (
        <div>
            <h3 className="text-center p-3">{titulo}</h3>
            {products.length > 1 
            ? <ItemList products={items} /> 
            : <h2 className="text-center p-2">Cargando ...</h2>}           
        </div>
        )
}

export default ItemListContainer


