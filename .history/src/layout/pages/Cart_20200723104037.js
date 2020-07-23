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
          <h6>Payment methods</h6>
          <p className="">Paypal</p>
          <p className="move_payment_up">Visa</p>
          <a class="waves-effect waves-light btn-large red" href="#h">
            Buy now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cart;
