import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import background6 from "./imagesofinstruments/background6.jpg";
const Cart = () => {
  return (
    <div>
      <div className="bg-color">
        <img src={background6} className="bg" alt="bg" />
      </div>
      <div class="row">
        <div class="col s8">
          <h4 className="cart_words_white">Shopping Cart</h4>
          <div className="container buttons_as_footer">
            <h6 className="cart_words_white">Continue Shopping</h6>
            <Link to="/keys">
              <button class="waves-effect waves-light btn-large red">
                keys
              </button>{" "}
            </Link>
            <Link to="/string">
              <button class="waves-effect waves-light btn-large red">
                String
              </button>{" "}
            </Link>
            <Link to="/woodwind">
              <button class="waves-effect waves-light btn-large red">
                Woodwind
              </button>{" "}
            </Link>
            <Link to="/percussion">
              <button class="waves-effect waves-light btn-large red">
                Percussion
              </button>{" "}
            </Link>
          </div>
        </div>

        <div class="col s4">
          <h5 className="move_payment_up cart_words_white">Your information</h5>
          <h6 className="cart_words_white">Email</h6>
          <input id="email" type="text white" class="validate" />

          <h4 className="move_payment_up cart_words_white">Payment portal</h4>
          <h6 className="cart_words_white">Payment methods</h6>
          <p className="cart_words_white">Paypal</p>
          <p className="cart_words_white">Visa</p>
          <button class="waves-effect waves-light btn-large red" href="#h">
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
