import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom'
import { CartContext } from './CartContext';

function ItemCount ({stock, initial, onAdd, condicion, name}) {
    const [contador, setContador] = useState (0);
    const { addItem } = useContext(CartContext)

    const min = initial;
    const max = stock;


    const aumentarContador = ()=> {
        if (contador < stock) {
            setContador (contador + 1)
        }
    };

    const restarContador = ()=> {
        if (contador > 1 ) {
            setContador (contador - 1)
        }
    }
        const agregarAlCarrito = (name, id,contador)=> {
            onAdd(contador)
            addItem(name, id)
    }
   
    {/*const history = useHistory();

    function CartBoton () {
        history.push("/cart");
    */}

    




    return (
        <>  
            <div className='container-fluid'>
                <button className="m-2" disabled={contador > max} onClick={aumentarContador}>+</button>
                <button className="m-2" disabled={contador < min}  onClick={restarContador}>- </button> 
                <p className='pt-2'>Items agregados: {contador}</p>
                <button onClick={agregarAlCarrito}>Agregar</button>
                {!condicion && <Link to="/cart"> <button>Comprar</button></Link>}                
            </div>
        </>
    )

};

export default ItemCount;