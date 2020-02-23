import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

const SecondaryMenu = () => {
    return(
        <div className="ui large menu">
            <Link to="/Perfil" className="item">Perfil</Link>
            <Link to="/Compra" className="item">Compra</Link>
            <Link to="/Venta" className="item">Venta</Link>
            <Link to="/Torneos" className="item">Torneos</Link>
        </div>
    ); 
}

export default SecondaryMenu
