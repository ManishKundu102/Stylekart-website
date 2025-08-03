import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import './Navbar.css'; // We'll create this next

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">StyleKart</Link>
      <ul className="nav-links">
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/shop">Shop</NavLink></li>
        <li><NavLink to="/cart"><FaShoppingCart /> Cart</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
