import React from 'react';
import Item from '../components/Item';


export const ItemList = (list) => {  
    

    return list.map(i=><Item item={i}/>
}

export default ItemList;