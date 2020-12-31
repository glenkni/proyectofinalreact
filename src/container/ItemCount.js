import React, {useState} from "react";

function ItemCount (props) {

    const {min, max, onAdd} = props;
    const [contador, setContador] = useState(0)
    //contador es el state y useState recibe un solo parametro, lo otro es una funcion que se encarga de ejecutar el state
    //setContador es la funcion que se ejecuta para modificar el state(contador)
    //si no quiero tener la fcn anonima dentro del evento, la creo por afuera

    const aumentarContador = ()=> {
            setContador(contador + 1) 
                if (contador >= max) {
                    alert('No hay mas disponibles')
                } else {
                    return contador
                }
             //contador es el state para que incremente ese parametro que es 0 inicialmente
    }
    const restarContador = ()=> {
        setContador(contador - 1) //contador es el state para que incremente ese parametro que es 0 inicialmente
            if (contador <= min) {
                alert('tenes que agregar al menos 1')
            } else {
                return contador
            }
    }
        const resetearContador = ()=> {
    setContador(0) //contador es el state para que incremente ese parametro que es 0 inicialmente
    }
   

    return (
        <>  
            <div className='container-fluid'>
                <p className='font-weight-bold'>Sillas de comedor</p>
                <p>Stock: {max} </p>
                <button onClick={aumentarContador}>+</button>
                <button onClick={resetearContador}>Resetear</button>
                <button onClick={restarContador}>-</button> 
                <p className='pt-2'>Items agregados: {contador}</p>
                <button onClick={onAdd}>Agregar</button>
                
            </div>
        </>
    )

};

export default ItemCount;