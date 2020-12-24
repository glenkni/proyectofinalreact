import React from 'react'

function ItemListContainer(props) {
    const {greeting, greeting2} = props;

    return (
        <>
            <h3 className="text-center text-black mt-3">{greeting}</h3>
            <p className="text-black p-2">{greeting2}</p>
            
        </>
    )
};

export default ItemListContainer;


