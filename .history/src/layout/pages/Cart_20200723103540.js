import React from "react";
import "../../App.css";

const Cart = () => {
  return (
    <div>
      <div class="row">
        <div class="col s8">
          <h1>Hey</h1>
        </div>

        <div class="col s4">
          <h4>Payment portal</h4>
          <i class="fab fa-cc-visa"></i>
          <h6>Paypal</h6>
          <h6>Visa</h6>
          <a class="waves-effect waves-light btn-large red" href="#h">
            Buy now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cart;
