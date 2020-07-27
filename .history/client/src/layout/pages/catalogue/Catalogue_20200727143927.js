import React, { useState } from "react";
import Products from "./Products";
import background6 from "../imagesofinstruments/background6.jpg";
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
      <div className="bg-color">
        <img src={background6} className="bg" alt="bg" />
      </div>
      <h1 className="shopping_cart">Shopping cart</h1>
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
      <footer class="page-footer body-of-footer">
        <div class="container">
          <div class="row">
            <div class="col l6 s12">
              <h5 class="white-text">Footer Content</h5>
              <p class="grey-text text-lighten-4">
                You can use rows and columns here to organize your footer
                content.
              </p>
            </div>
            <div class="col l4 offset-l2 s12">
              <h5 class="white-text">Links</h5>
              <ul>
                <li>
                  <a class="grey-text text-lighten-3" href="#!">
                    Link 1
                  </a>
                </li>
                <li>
                  <a class="grey-text text-lighten-3" href="#!">
                    Link 2
                  </a>
                </li>
                <li>
                  <a class="grey-text text-lighten-3" href="#!">
                    Link 3
                  </a>
                </li>
                <li>
                  <a class="grey-text text-lighten-3" href="#!">
                    Link 4
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-copyright">
          <div class="container">
            © 2014 Copyright Text
            <a class="grey-text text-lighten-4 right" href="#!">
              More Links
            </a>
          </div>
        </div>
      </footer>
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
      {page === PAGE_CART && renderCart()}
    </div>
  );
};

export default Catalogue;
