import React, {useState} from "react";
import {useHistory} from "react-router-dom"
import Cart from "./Cart"

function ItemCount ({stock, initial, onAdd, condicion}) {
    const [contador, setContador] = useState (0);

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
        const agregarAlCarrito = ()=> {
            onAdd(contador)
    }
   
    const history = useHistory();

    function CartBoton () {
        history.push("/cart");
    }




    return (
        <>  
            <div className='container-fluid'>
                <button className="m-2" disabled={contador > max} onClick={aumentarContador}>+</button>
                <button className="m-2" disabled={contador < min}  onClick={restarContador}>- </button> 
                <p className='pt-2'>Items agregados: {contador}</p>
                <button onClick={agregarAlCarrito}>Agregar</button>
                {!condicion && <button onClick={CartBoton}>Comprar</button>}                
            </div>
        </>
    )

};

export default ItemCount;