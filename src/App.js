import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import { CartProvider } from "./context/CartContext";

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter basename="/Stylekart-website">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          {/* Fallback route for unknown URLs */}
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
