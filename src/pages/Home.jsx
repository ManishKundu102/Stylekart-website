import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <h1>StyleKart</h1>
        <p>Your One-Stop Fashion Destination</p>
        <Link to="/shop" className="shop-now-btn">Shop Now</Link>
      </div>

      <div className="featured-section">
        <h2>Featured Categories</h2>
        <div className="categories">
          <Link to="/shop?category=Women" className="category-card">
            <img
              src="https://images.unsplash.com/photo-1619516388835-2b60acc4049e?w=500&auto=format&fit=crop&q=60"
              alt="Women"
            />
            <h3>Women</h3>
          </Link>

          <Link to="/shop?category=Men" className="category-card">
            <img
              src="https://images.unsplash.com/photo-1480429370139-e0132c086e2a?w=500&auto=format&fit=crop&q=60"
              alt="Men"
            />
            <h3>Men</h3>
          </Link>

          <Link to="/shop?category=Kids" className="category-card">
            <img
              src="https://images.unsplash.com/photo-1578897366846-358bb1c2412a?w=500&auto=format&fit=crop&q=60"
              alt="Kids"
            />
            <h3>Kids</h3>
          </Link>
        </div>
      </div>
      <footer className="footer">
        <p>© {new Date().getFullYear()} StyleKart. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
