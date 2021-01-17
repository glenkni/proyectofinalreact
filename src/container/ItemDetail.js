import React, {useState} from 'react'
import ItemCount from '../components/ItemCount'
import {Link} from 'react-router-dom'

const ItemDetail = ({id, name, price, image, description, stock, initial}) => {
    const [contador, setContador] = useState (null);
    const [condBoton, setCondBoton] = useState (true);

    const onAdd = cant => {
        console.log ("Agregaste" + cant + "items")
        setContador(cant)
        setCondBoton(false)
    }


    return (
        <> 
        <div className="card m-5" style={{width: 220}}>
            <h4>{name}</h4>
            <img className="card-img-top" src={image} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title" key={id}>{description}</h5>
                <p>${price}</p>
                <p>Stock disponible: {stock}</p>
                <ItemCount stock={stock} initial={initial} onAdd={onAdd} condicion={condBoton} />
        
            </div>
        </div>
        </>
    )
}

export default ItemDetail
