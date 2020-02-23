import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Inicio from '../Home/Components';
import Juguetes from './Juguetes';
import Perfil from './Perfil';
import Compra from './Compra';
import Venta from './Venta';
import Torneos from './Torneos';

class Menu extends React.Component{

    state = { aClick: 0 };

    secondMenu = () => {

        if(this.state.aClick){
           return(
                <div className="ui large menu">
                    <Link to="/Perfil" className="item">Perfil</Link>
                    <Link to="/Compra" className="item">Compra</Link>
                    <Link to="/Venta" className="item">Venta</Link>
                    <Link to="/Torneos" className="item">Torneos</Link>
                </div>
            ); 
        }
        
        return(<></>);
    }


    render(){
        return(
            <div className="menu">
                <Router>
                    <div className="ui container">

                        <h1>Doggy's toys</h1>

                        <div className="ui large menu">
                            <Link to="/Inicio" className="active item">Inicio</Link>
                            <Link to="/Juguetes" className="item">Juguetes</Link>
                            <div className="right menu">
                                <div className="ui dropdown item">
                                    <a
                                        className="ui dropdown item"
                                        href="#" 
                                        onClick={() => {!this.state.aClick ? this.setState({ aClick:1 }) : this.setState({ aClick: 0 });}}
                                    >
                                        Yu-Gi-Oh! <i className="dropdown icon" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <this.secondMenu />
                    </div>
                    <Switch>
                        <Route exact path="/Inicio" component={Inicio} />
                        <Route exact path="/Juguetes" component={Juguetes} />
                        <Route exact path="/Perfil" component={Perfil} />
                        <Route exact path="/Compra" component={Compra} />
                        <Route exact path="/Venta" component={Venta} />
                        <Route exact path="/Torneos" component={Torneos} />
                    </Switch>
                </Router>
            </div>
        );
    };
}

export default Menu;