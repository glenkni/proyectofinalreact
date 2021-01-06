import React from 'react';

const Item = (i) => {
    
    const [id, name, description] = i;





   

    return (
        <>
        <h3>Lista de Productos</h3>
        <h4 key={i.id}>{i.name}</h4>
        <p>{i.description}</p>                       
        </>
    )
}

export default Item;
