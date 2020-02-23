import React from 'react';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './Login/container'
import Inicio from '../App/Home/container';
import Juguetes from '../Components/Juguetes';
import Perfil from '../Components/Perfil';
import Compra from '../Components/Compra';
import Venta from '../Components/Venta';
import Torneos from '../Components/Torneos';
import Navbar from './NavBar/container';
import PrivateRouteNegative from '../Shared/components/PrivateRouteNegative';
import PrivateRoute from '../Shared/components/PrivateRoute';
import history from '../Shared/redux/history'
//import Menu from '../Components/Menu';
//localStorage.removeItem('user')
const App = () => {
    return (
        <div className="menu">
            <Router history={history}>
                {/**
                
                <Switch>
                <Route exact path="/Inicio" component={Inicio} />
                
                </Switch>
                <Switch>
                <Route exact path="/Juguetes" component={Juguetes} />
                <Route exact path="/Perfil" component={Perfil} />
                <Route exact path="/Compra" component={Compra} />
                <Route exact path="/Venta" component={Venta} />
                <Route exact path="/Torneos" component={Torneos} />
                </Switch>
                */

                }
                <Route path="/" component={Navbar} />
               
                    <PrivateRouteNegative path="/Login" redirect={true} component={Login} />
                    <Route exact path="/Inicio" component={Inicio} />
                    <Route exact path="/Juguetes" component={Juguetes} />
                    <Route exact path="/Perfil" component={Perfil} />
                    <Route exact path="/Compra" component={Compra} />
                    <Route exact path="/Venta" component={Venta} />
                    <Route exact path="/Torneos" component={Torneos} />
             

            </Router>
        </div>
    );
}

export default App;