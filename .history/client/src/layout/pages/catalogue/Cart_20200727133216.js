import React from "react";

export default function Cart({ cart, removeFromCart }) {
  return (
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
}
