import React, { useState } from "react";
import Products from "./Products";
import Cart from "./Cart";
import background2 from "../imagesofinstruments/background2.jpg";
import "../../../App.css";

const PAGE_PRODUCTS = "products";
const PAGE_CART = "cart";

const Catalogue = () => {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState("products");

  const addToCart = (product) => {
    setCart([...cart, { ...product }]);
  };

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove));
  };
  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  return (
    <div>
      <div className="bg-color">
        <img src={background2} className="bg" alt="bg" />
      </div>
      <header>
        <button
          className="waves-effect waves-light btn cart-btn black"
          onClick={() => navigateTo(PAGE_PRODUCTS)}
        >
          View Products
        </button>{" "}
        <button
          className="waves-effect waves-light btn cart-btn black"
          onClick={() => navigateTo(PAGE_CART)}
        >
          <i className="material-icons">add_shopping_cart</i>Go to Cart (
          {cart.length})
        </button>
      </header>
      {page === PAGE_PRODUCTS && <Products addToCart={addToCart} />}
      {page === PAGE_CART && <Cart removeFromCart={removeFromCart} />}
    </div>
  );
};

export default Catalogue;
