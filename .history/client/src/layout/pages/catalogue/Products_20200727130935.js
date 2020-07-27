import React from "react";

export default function Products() {
  return (
    <>
      <h1 className="instrument_sections">Catalogue</h1>
      <br />
      <div
        className="row"
        style={{
          paddingLeft: "40px",
          paddingRight: "30px",
          margin: "20px",
        }}
      >
        {products.map((product, idx) => (
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
                  {product.name}
                  <i className="material-icons right">more_vert</i>
                </span>
              </div>

              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">
                  <i className="material-icons right">close</i>

                  <div className="section">
                    <h5 className="headings_popup">Type of instrument:</h5>
                    <p className="card_text_colour">{product.type}</p>
                  </div>
                  <div className="divider" />
                  <div className="section">
                    <h5 className="headings_popup"> {product.what}</h5>
                    <p className="card_text_colour">{product.description}</p>
                  </div>
                  <div className="divider" />
                  <div className="section">
                    <h5 className="headings_popup">Model</h5>
                    <p className="card_text_colour">{product.model}</p>
                  </div>
                  <div className="divider" />
                  <div className="section">
                    <h5 className="headings_popup">Price:</h5>
                    <p className="card_text_colour">{product.price}</p>
                  </div>
                  <div className="divider" />

                  <div className="section">
                    <h5 className="headings_popup">Cart</h5>
                    <p>
                      <button
                        className="waves-effect waves-light btn left cart-btn black"
                        onClick={() => addToCart(product)}
                      >
                        <i className="material-icons">add_shopping_cart</i>
                        Add to cart
                      </button>
                    </p>
                  </div>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
