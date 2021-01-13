import React from 'react';
import Item from '../components/Item';


export const ItemList = ({products}) => { 
       

    return (
        
        <div className="d-flex flex-row">
            { products.map( product => <Item id={product.id} 
            name={product.name} image={product.image} stock={product.stock} price={product.price} description={product.description} />)
            }
        </div>
    )
}

export default ItemList