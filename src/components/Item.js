import React from 'react';

const Item = ({id, name, description, price, image, stock}) => {

    
   

    return (
        <>
        <h3>Lista de Productos</h3>
        <h4 key={id}>{name}</h4>
        <p>{description}</p> 
        <img src={image} alt="foto producto"/>
        <p>${price}</p>      
        <p>Stock disponible: {stock}</p>             
        </>
    )
}

export default Item;
