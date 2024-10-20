import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <h2>Sports E-Commerce</h2>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/items">All Items</Link></li>
                <li><Link to="/add-item">Add Item</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
