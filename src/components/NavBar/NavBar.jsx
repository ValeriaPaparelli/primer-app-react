import React from 'react';
import './NavBar.css';
import CartWidget from './CartWidget';
/* import Logo from '../../images/logo.png';
 */
const NavBar = () => {
    return (
        <header>
           {/*  <img src={Logo} alt="" /> */}
            <nav>
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
