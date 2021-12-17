import React from 'react';
import './NavBar.css';
import logo from '../../logo.svg';

const NavBar = () => {
    return (
        <nav>
            <img className="App-logo" width='100px' src={logo} alt="logo" />
            <ul className='menu'>
               <li><a href="/">Inicio</a></li>
               <li><a href="/">Productos</a></li>
               <li><a href="/">Login</a></li>
            </ul>
        </nav>
    )
}

export default NavBar
