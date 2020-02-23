import React,{useState} from 'react'

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import SecondaryMenu from './SecondaryMenu';
import { isFirstRender } from '../../../Shared/lib/frontend'
const user =JSON.parse(localStorage.getItem('user'))
console.log('====================================');
console.log(user);
console.log('====================================');
const Navbar = ({user:usuario}) => {
    console.log('====================================');
    console.log(usuario);
    console.log('====================================');
    const [isOpenSecondMenu, setIsOpenSecondMenu] = useState(false)

    return (
        <>
        <div className="ui container">
            <h1>Doggy's toys</h1>
            <div className="ui large menu">
                <Link to="/Inicio" className="active item">Inicio</Link>
                <Link to="/Juguetes" className="item">Juguetes</Link>
               { usuario && usuario.UserType  &&  <div className="right menu">
                    <div className="ui dropdown item">
                        <a
                            className="ui dropdown item"
                            href="#"
                            onClick={()=>setIsOpenSecondMenu(!isOpenSecondMenu)}
                            >
                            Yu-Gi-Oh! <i className="dropdown icon" />
                        </a>
                    </div>
                </div>}
            </div>
            {isOpenSecondMenu && <SecondaryMenu/>}
        </div>
                            </>
    )
}

export default Navbar
