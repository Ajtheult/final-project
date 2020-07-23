import React from "react";
import "../../App.css";

const Cart = () => {
  return (
    <div>
      <div class="row">
        <div class="col s8">
          <h4>Shopping Cart</h4>
          <div className="container">
            <h1>hey</h1>
          </div>
          <a class="waves-effect waves-light btn-large red" href="#h">
            keys
          </a>{" "}
          <a class="waves-effect waves-light btn-large red" href="#h">
            string
          </a>
          <a class="waves-effect waves-light btn-large red" href="#h">
            Woodwind
          </a>
          <a class="waves-effect waves-light btn-large red" href="#h">
            Percussion
          </a>
        </div>

        <div class="col s4">
          <h5 className="move_payment_up">Your information</h5>
          <h6>Email</h6>
          <input id="email" type="text white" class="validate" />

          <h4 className="move_payment_up">Payment portal</h4>
          <h6>Payment methods</h6>
          <p>Paypal</p>
          <p>Visa</p>
          <a class="waves-effect waves-light btn-large red" href="#h">
            Buy now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cart;
