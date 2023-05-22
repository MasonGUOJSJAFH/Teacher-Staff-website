import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link to="/" className="navbar-link">Home</Link>
                </li>
                <li>
                    <Link to="/staff" className="navbar-link">Staff</Link>
                </li>
                <li>
                    <Link to="/contact" className="navbar-link">Contact Us</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
