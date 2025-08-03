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
          <div className="category-card">
            <img src="https://images.unsplash.com/photo-1619516388835-2b60acc4049e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FyaXxlbnwwfHwwfHx8MA%3D%3D" alt="Women" />
            <h3>Women</h3>
          </div>
          <div className="category-card">
            <img src="https://images.unsplash.com/photo-1480429370139-e0132c086e2a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1lbiUyMGRyZXNzfGVufDB8fDB8fHww" alt="Men" />
            <h3>Men</h3>
          </div>
          <div className="category-card">
            <img src="https://images.unsplash.com/photo-1578897366846-358bb1c2412a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8a2lkcyUyMGRyZXNzfGVufDB8fDB8fHww" alt="Kids" />
            <h3>Kids</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
