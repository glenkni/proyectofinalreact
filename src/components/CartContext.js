import React, {useState, useEffect} from 'react'

export const CartContext = React.createContext();

const CartProvider = ( { children }) =>{
   
    const [ cart, setCart ] = useState([])
    const [ cantidad, setCantidad ] = useState(0)
    const [ total, setTotal ] = useState()

    
    useEffect(() => {
        let t = 0
        const totales = cart.map( p => p.price * p.amount)
        totales.map( p => t = t + p)
        setTotal(t)
        const cantidadCarrito = cart.length
        setCantidad(cantidadCarrito)
    }, [cart])

   
    function isInCart(id){
        const item = cart.find(p => p.id === id)
        if (item === undefined){
            return false
        }
        else {
            return true
        }
    }

    function addItem(product, counter, id) {
         
       
        if (isInCart(id)){
          
            const productAgregado = cart.find(p => p.id === id)
            const nuevaCantidad = productAgregado.amount + counter
            const nuevoProducto = { id: productAgregado.id, name: productAgregado.name, image: productAgregado.image, price: productAgregado.price, amount: nuevaCantidad}
            const carritoConProductoAgregado = cart.filter(product => product.id =! id)
            const carritoConNuevoProducto = [...carritoConProductoAgregado, nuevoProducto]
            setCart(carritoConNuevoProducto)            
        } else {
            const newItem = { id: product.id, name: product.name, image: product.image, price: product.price, amount: counter }
            setCart([...cart, newItem]) 
        }
    }

    function removeItem(id){
       
        const newCart = cart.filter(product => product.id !== id)
        setCart(newCart)
    }

    function clear(){
        setCart([])
        setCantidad(0)
    }

   
    return (
     
            <CartContext.Provider value ={{ cart, cantidad, total, addItem, removeItem, clear }}>
                { children }
            </CartContext.Provider>
    )
}

export default CartProvider;
