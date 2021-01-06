import React from 'react';
import Item from '../components/Item';


export const ItemList = ({list}) => {  
    const [item] = list;
    

    return list.map(i=><Item item={i}/>)
}

export default ItemList