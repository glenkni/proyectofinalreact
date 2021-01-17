import React from 'react';
import CartWidget from './CartWidget';
import {Link} from 'react-router-dom'

const categories = [{
    categoryId: "sillas",
    name: "SILLAS"
},
{
    categoryId: "mesas",
    name: "MESAS"
},{
    categoryId: "estantes",
    name: "ESTANTES"
}, ]

function NavBar () {
    return (
        <nav id="inicio" className="navbar sticky-top navbar-expand-md shadow" style={{backgroundColor:'black'}}>
            <div>
                <Link to={"/"}><CartWidget /></Link>
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse d-flex justify-content-end">
                { categories.map( category => <Link className="text-white p-2" to={`/category/${category.categoryId}`}> <p>{category.name}</p> </Link>)} 
            </div>
        </nav>
    )
}


export default NavBar;