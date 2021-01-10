import React from 'react'

const ItemDetail = ({id, name, price, image, description, stock}) => {
    return (
        <> 
        <div className="card m-5" style={{width: 220}}>
            <h4>{name}</h4>
            <img className="card-img-top" src={image} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title" key={id}>{description}</h5>
                <p>${price}</p>
                <p>Stock disponible: {stock}</p>
                <a href="#" className="btn btn-primary">Agregar</a>
            </div>
        </div>
        </>
    )
}

export default ItemDetail
