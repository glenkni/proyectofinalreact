import React, {useContext} from 'react'
import {CartContext} from './CartContext'
import CartItem from './CartItem';
import { Link } from 'react-router-dom';



const Cart = () => {
    
    const { cart, clear, total } = useContext(CartContext)

    return (
        <div>
            <h3 className="text-center">Estas comprando:</h3>
            <div>
                { cart.length > 0 && cart.map( product => <CartItem key={product.id} 
                id={product.id} name={product.name} image={product.image} price={product.price} 
                amount={product.amount} />)}
            </div>


            { cart.length > 0 &&
            <>
            <h2>${total}</h2>
            <div>
                <button onClick={clear}> Remover del carrito </button>
                <button> Pagar </button>
            </div>
            </>}

            { cart.length > 0 
            ? ( <h3 className="text-center"></h3>)    
            : ( <div>
                    <h3 className="text-center">Tenes que elegir tus productos!</h3>
                    <Link to={"/"}>
                    <button onClick={clear}> Quiero elegir otros productos! </button>
                    </Link>
                </div>)}


        </div>
    )
}

export default Cart
