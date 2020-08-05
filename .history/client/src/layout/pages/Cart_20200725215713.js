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
      <div className="row">
        <div className="col s8">
          <h4 className="cart_words_white">Shopping Cart</h4>
          <div className="container buttons_as_footer">
            <h6 className="cart_words_white">Continue Shopping</h6>
            <Link to="/catalogue">
              <button className="waves-effect waves-light btn-large red">
                Catalogue
              </button>{" "}
            </Link>
          </div>
        </div>

        <div className="col s4">
          <h5 className="move_payment_up cart_words_white">Your information</h5>
          <h6 className="cart_words_white">Email</h6>
          <input id="email" type="text white" className="validate" />

          <h4 className="move_payment_up cart_words_white">Payment portal</h4>
          <h6 className="cart_words_white">Payment methods</h6>
          <p className="cart_words_white">Paypal</p>
          <p className="cart_words_white">Visa</p>
          <button className="waves-effect waves-light btn-large red" href="#h">
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
