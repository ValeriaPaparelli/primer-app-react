import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

import './NavBar.css';

const NavBar = () => {
    
    return (
        <header>
            <nav>
                <Link to='/'>
                    <img className='logo' src='/images/logo-png.png' alt='logo'></img>
                </Link>    
                <ul className='menu'>
                <li><Link to='/'>Inicio</Link></li>
                <li><Link to='/categoria/facial'>Faciales</Link></li>
                <li><Link to='/categoria/corporal'>Corporales</Link></li>
                <li><Link to='/categoria/limpieza'>Limpieza</Link></li>
                <li><CartWidget /></li>            
            </ul>
            </nav>
        </header>
    )
}

export default NavBar
