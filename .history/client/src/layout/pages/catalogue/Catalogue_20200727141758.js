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

  const renderCart = () => (
    <>
      <h1 className="instrument_sections">Cart</h1>
      <br />
      <div
        className="row"
        style={{
          paddingLeft: "40px",
          paddingRight: "30px",
          margin: "20px",
        }}
      >
        {cart.map((product, idx) => (
          <div
            className="col s12 m12 l4"
            style={{ padding: "60px 5px" }}
            key={idx}
          >
            <div className="card left cart-btn hoverable move_my_products">
              <div className="card-image waves-effect waves-block waves-light">
                <img
                  className="activator size_of_image"
                  src={product.img}
                  alt={product.name}
                />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                  {product.name} <h5>Price:</h5> {product.price}
                </span>
                <button
                  className="waves-effect waves-light btn cart-btn black"
                  onClick={() => removeFromCart(product)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );

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
      {page === PAGE_CART && removeFromCart()}
    </div>
  );
};

export default Catalogue;
