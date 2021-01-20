import React, { useContext } from 'react';

import { CartContext } from './CartContext'


function CartItem( { id, name, image, price, description }) {
    const { removeItem } = useContext(CartContext)

    return (
        <div >
            <div className="container-fluid">
            <div className="card m-5" style={{width: 280}}>
                <h4>{name}</h4>
                <img className="card-img-top p2" src={image} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title" key={id}>{description}</h5>
                    <p>${price}</p>            
                </div>
            </div>
        </div>
            <button onClick={ () => removeItem(id)}> Eliminar </button>
        </div>
    )
}

export default CartItem