import React from 'react';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <header>
            <nav>
            <img className='logo' src='/images/logo-png.png' alt='logo'></img>
                <ul className='menu'>
                <li><a href="/">Inicio</a></li>
                <li><a href="/">Productos</a></li>
                <li><a href="/">Login</a></li>
                <li><CartWidget /></li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar
