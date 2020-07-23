import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import background1 from "./imagesofinstruments/background1.jpg";
const Cart = () => {
  return (
    <div>
      <div className="bg-color">
        <img src={background1} className="bg" alt="bg" />
      </div>
      <div class="row">
        <div class="col s8">
          <h4>Shopping Cart</h4>
          <div className="container buttons_as_footer">
            <h6>Continue Shopping</h6>
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
          <h5 className="move_payment_up">Your information</h5>
          <h6>Email</h6>
          <input id="email" type="text white" class="validate" />

          <h4 className="move_payment_up">Payment portal</h4>
          <h6>Payment methods</h6>
          <p>Paypal</p>
          <p>Visa</p>
          <button class="waves-effect waves-light btn-large red" href="#h">
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
