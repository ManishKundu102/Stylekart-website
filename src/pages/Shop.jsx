import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useLocation } from "react-router-dom";
import "./Shop.css";

const products = [
  { id: 1, name: "Denim Jacket", price: 1999, category: "Men", image: "https://images.unsplash.com/photo-1527016021513-b09758b777bd?q=80&w=1172&auto=format&fit=crop" },
  { id: 2, name: "White Sneakers", price: 2999, category: "Men", image: "https://images.unsplash.com/photo-1595805737846-ab795bc2c782?w=600&auto=format&fit=crop" },
  { id: 3, name: "Vintage Watch", price: 3499, category: "Men", image: "https://plus.unsplash.com/premium_photo-1728324830661-ac471243bade?w=500&auto=format&fit=crop" },
  { id: 4, name: "Black Blazer", price: 10999, category: "Men", image: "https://images.unsplash.com/photo-1693743472699-a0264203ac56?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2VkZGluZyUyMGRyZXNzJTIwbWVufGVufDB8fDB8fHww" },
  { id: 5, name: "Saree", price: 1099, category: "Women", image: "https://images.unsplash.com/photo-1610189012906-4c0aa9b9781e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNhcmVlfGVufDB8fDB8fHww" },
  { id: 6, name: "Banarasee Saree", price: 3999, category: "Women", image:"https://images.unsplash.com/photo-1618901185975-d59f7091bcfe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FyZWV8ZW58MHx8MHx8fDA%3D" },
  { id: 7, name: "Cool Sunglass", price: 899, category: "Women", image: "https://images.unsplash.com/photo-1577803645773-f96470509666?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHN1bmdsYXNzfGVufDB8fDB8fHww" },
  { id: 8, name: "Lahenga", price: 1999, category: "Kids", image: "https://media.istockphoto.com/id/1125718978/photo/girl-dancing-in-lehenga-choli.webp?a=1&b=1&s=612x612&w=0&k=20&c=02Gmemu18Om0XAj_MtPnLYApxtS65ENzXJwuq3l6p_8=" },
  { id: 9, name: "Summer Shirt", price: 399, category: "Kids", image: "https://images.unsplash.com/photo-1519882882460-966092a360d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTcyfHxraWRzJTIwYm95JTIwZHJlc3N8ZW58MHx8MHx8fDA%3D" },
  { id: 10, name: "Rain Coat", price: 299, category: "Kids", image: "https://plus.unsplash.com/premium_photo-1700429926385-23bcfbadf10b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2lkcyUyMGRyZXNzJTIwYm95fGVufDB8fDB8fHww" },

];

const Shop = () => {
  const { addToCart } = useCart();
  const [addedProductId, setAddedProductId] = useState(null);

  const location = useLocation();

  
  const params = new URLSearchParams(location.search);
  const selectedCategory = params.get("category");

  
  const filteredProducts = selectedCategory
    ? products.filter((p) => p.category === selectedCategory)
    : products;

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedProductId(product.id);
    setTimeout(() => setAddedProductId(null), 2000);
  };

  return (
    <div className="shop-page">
      <h2>{selectedCategory ? `${selectedCategory} Collection` : "Our Products"}</h2>
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>₹ {product.price}</p>
            <button onClick={() => handleAddToCart(product)}>
              {addedProductId === product.id ? "✔ Added" : "Add to Cart"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
