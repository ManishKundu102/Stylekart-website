import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userPhone =
      localStorage.getItem("userPhone") || sessionStorage.getItem("userPhone");
    setIsLoggedIn(!!userPhone);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userPhone");
    sessionStorage.removeItem("userPhone");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        StyleKart
      </Link>
      <div className="nav-links">
        <Link to="/shop">Shop</Link>
        <Link to="/cart">Cart</Link>
        {isLoggedIn ? (
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
