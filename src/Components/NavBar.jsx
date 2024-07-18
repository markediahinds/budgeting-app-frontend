import React from 'react';
import { Link } from 'react-router-dom'
import { FaCaretDown } from 'react-icons/fa'
import '../Styles/navbar.css'

const NavBar = () => {
    return (
        <nav>
            <h1><Link to='/'>Budgt</Link></h1>
            <ul>
                <li>I want to <FaCaretDown className='navbar_caret'/></li>
                <li><Link to='/transactions/about'>Why Budgt?</Link></li>
                <li><Link to='/transactions/resources'>Resources</Link></li>
                <li><Link to='/transactions/subscriptions'>Plans & Pricing</Link></li>
                <li><Link to='/transactions/login'>Log In</Link></li>
                <li className='nav__new'><Link to='/transactions/new'>Demo Budgt</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;