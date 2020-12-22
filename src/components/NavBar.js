import React from 'react';

const NavBar = () => {

    return (
        <nav id="inicio" className="navbar sticky-top navbar-expand-md shadow" style={{backgroundColor:'black'}}>
            <h1 className="text-white">FONI MUEBLES</h1>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse d-flex justify-content-end" id="collapsibleNavbar">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link text-white" href="">NOSOTROS</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link text-white" href="">CONTACTO</a>
                    </li>   
                    <li className="nav-item">
                    <a className="nav-link text-white" href="">COTIZADOR</a>
                    </li>  
                </ul>
            </div>  
    </nav>
    )

}

export default NavBar;