import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import logo from '../images/rdonlinetv.svg';

const Navbar = () => {
    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <div className='container'>
            <nav className="navbar">
                <div className="navbar-logo">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="navbar-links">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                    {/* Add more links as needed */}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;