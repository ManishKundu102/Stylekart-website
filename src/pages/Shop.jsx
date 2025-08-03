import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import "./Shop.css";

const products = [
  {
    id: 1,
    name: " Denim Jacket",
    price: 1999,
    image:
      "https://images.unsplash.com/photo-1527016021513-b09758b777bd?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "White Sneakers",
    price: 2999,
    image:
      "https://images.unsplash.com/photo-1595805737846-ab795bc2c782?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8V2hpdGUlMjBzbmVha2VyfGVufDB8fDB8fHww",
  },
  {
    id: 3,
    name: "Vintage Watch",
    price: 3499,
    image:
      "https://plus.unsplash.com/premium_photo-1728324830661-ac471243bade?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHZpbnRhZ2UlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 4,
    name: "Saree",
    price: 1099,
    image:
      "https://media.istockphoto.com/id/2072342092/photo/handmade-indian-sari-saree-with-golden-details-woman-wear-on-festival-ceremony-and-weddings.jpg?s=612x612&w=0&k=20&c=oqPVUQIw_WGpjoSZFA9bUKPHau6vUSaUvvrbQcz8LNk=",
  },
  {
    id: 5,
    name: "Cool Sunglasses",
    price: 899,
    image:
      "https://media.istockphoto.com/id/1215741790/photo/snooky-round-sunglass-frame-isolated-stock-image.webp?a=1&b=1&s=612x612&w=0&k=20&c=-NH8pRm5gufAyHbRQDzYeZx9xmB6rubQo-cs5dPs1M0=",
  },
];

const Shop = () => {
  const { addToCart } = useCart();
  const [addedProductId, setAddedProductId] = useState(null);

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedProductId(product.id);

    setTimeout(() => {
      setAddedProductId(null);
    }, 2000);
  };

  return (
    <div className="shop-page">
      <h2>Our Products</h2>
      <div className="product-grid">
        {products.map((product) => (
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
