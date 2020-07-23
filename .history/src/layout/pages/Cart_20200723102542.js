import React from "react";

const Cart = () => {
  return (
    <div className="">
      <div class="row">
        <div class="col s8">
          <h1>Hey</h1>
        </div>

        <div class="col s4">
          <div class="section">
            <h5>Payment options</h5>
            <p>
              <i class="fab fa-cc-paypal"></i>
              <i class="fab fa-cc-visa"></i>
              {/* paypal, visa */}
            </p>
          </div>
          <div class="divider"></div>
          <div class="section">
            <h5>Section 2</h5>
            <p>Stuff</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
