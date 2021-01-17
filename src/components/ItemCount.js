import React, {useState} from "react";

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
   

    return (
        <>  
            <div className='container-fluid'>
                <p>Stock: {stock} </p>
                <button  disabled={contador > max} onClick={aumentarContador}>+</button>
                <button disabled={contador < min}  onClick={restarContador}>-</button> 
                <p className='pt-2'>Items agregados: {contador}</p>
                {condicion ? <button onClick={agregarAlCarrito}>Agregar</button>
                            : <button>Comprar </button>}
                
            </div>
        </>
    )

};

export default ItemCount;