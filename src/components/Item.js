import React from 'react';
import { Link } from 'react-router-dom'

const Item = ({id, name, image, stock, price}) => {  

    
   

    return (
        <> 
        <div className="card m-5" style={{width: 220}}>
            <img className="card-img-top" src={image} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title" key={id}>{name}</h5>
                <p>${price}</p>
                <p>Stock disponible: {stock}</p>
                <button className='btn btn-primary'>
                    <Link className="text-white" to={"/item/" + id}>Más detalle</Link>
                </button>
            </div>
        </div>
        </>
    )
}

export default Item;
