/* eslint-disable no-unused-vars */
import React from "react";
import piccolo_image from "../imagesofinstruments/piccolo_image.jpg";
import flute_image from "../imagesofinstruments/flute_image.jpg";
import clarinet_image from "../imagesofinstruments/clarinet_image.jpg";
import background2 from "../imagesofinstruments/background2.jpg";
import "../../../App.css";

const Woodwind = () => {
  return (
    <div>
      <div className="bg-color">
        <img src={background2} className="bg" alt="bg" />
      </div>
      <h1 className="instrument_sections">Woodwind Section</h1>
      <section>
        <div
          className="row"
          style={{ paddingLeft: "40px", paddingRight: "30px", margin: "50px" }}
        >
          <div className="col s12 m12 l4" style={{ padding: "60px 5px" }}>
            <div className="card left cart-btn  hoverable move_my_products">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={clarinet_image} alt="img" />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                  Bb Clarinet
                  <i className="material-icons right">more_vert</i>
                </span>
              </div>
              {/* Clarinet card reveal */}
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">
                  <i className="material-icons right">close</i>

                  <div class="section">
                    <h5 className="headings_popup">Type of instrument:</h5>
                    <p className="card_text_colour">Woodwind</p>
                  </div>
                  <div class="divider" />
                  <div class="section">
                    <h5 className="headings_popup"> What is a clarinet?</h5>
                    <p className="card_text_colour">
                      The clarinet is a family of woodwind instruments. It has a
                      single-reed mouthpiece, a straight, cylindrical tube with
                      an almost cylindrical bore, and a flared bell. A person
                      who plays a clarinet is called a clarinetist.
                    </p>
                  </div>
                  <div class="divider" />
                  <div class="section">
                    <h5 className="headings_popup">Model</h5>
                    <p className="card_text_colour">
                      Bundy Selmer Resonite Bb Clarinet
                    </p>
                  </div>
                  <div class="divider" />
                  <div class="section">
                    <h5 className="headings_popup">Price:</h5>
                    <p className="card_text_colour">$215.53</p>
                  </div>

                  <div class="divider" />
                  <div class="section">
                    <h5 className="headings_popup">Cart</h5>
                    <p>
                      <button className="waves-effect waves-light btn left cart-btn black">
                        <i className="material-icons">add_shopping_cart</i>Add
                        to cart
                      </button>
                    </p>
                  </div>
                </span>
              </div>
              {/* Clarinet card reveal */}
            </div>
          </div>
          <div className="col s12 m12 l4" style={{ padding: "60px 5px" }}>
            <div className="card  hoverable move_my_products">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={flute_image} alt="img" />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                  Concert Flute<i className="material-icons right">more_vert</i>
                </span>
              </div>
              {/* Flute card reveal */}
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">
                  <i className="material-icons right">close</i>

                  <div class="section">
                    <h5 className="headings_popup">Type of instrument:</h5>
                    <p className="card_text_colour"> Woodwind</p>
                  </div>
                  <div class="divider" />
                  <div class="section">
                    <h5 className="headings_popup"> What is a flute?</h5>
                    <p className="card_text_colour">
                      The flute is a family of musical instruments in the
                      woodwind group. Unlike woodwind instruments with reeds, a
                      flute is an aerophone or reedless wind instrument that
                      produces its sound from the flow of air across an opening.
                    </p>
                  </div>
                  <div class="divider" />
                  <div class="section">
                    <h5 className="headings_popup">Model</h5>
                    <p className="card_text_colour">
                      Yamaha 211S Silver Headjoint Concert Flute
                    </p>
                  </div>
                  <div class="divider" />
                  <div class="section">
                    <h5 className="headings_popup">Price:</h5>
                    <p className="card_text_colour">$2000 </p>
                  </div>

                  <div class="divider" />
                  <div class="section">
                    <h5 className="headings_popup">Cart</h5>
                    <p>
                      <button className="waves-effect waves-light btn left cart-btn black">
                        <i className="material-icons">add_shopping_cart</i>Add
                        to cart
                      </button>
                    </p>
                  </div>
                </span>
              </div>
              {/* Flute card reveal */}
            </div>
          </div>
          <div className="col s12 m12 l4" style={{ padding: "60px 5px" }}>
            <div className="card  hoverable move_my_products">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={piccolo_image} alt="img" />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                  Gemeinhardt 4PMH Piccolo
                  <i className="material-icons right">more_vert</i>
                </span>
              </div>
              {/* Piccolo card reveal */}
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">
                  <i className="material-icons right">close</i>

                  <div class="section">
                    <h5 className="headings_popup">Type of instrument:</h5>
                    <p className="card_text_colour">Woodwind</p>
                  </div>
                  <div class="divider" />
                  <div class="section">
                    <h5 className="headings_popup"> What is a piccolo?</h5>
                    <p className="card_text_colour">
                      The piccolo is a half-size flute, and a member of the
                      woodwind family of musical instruments. The modern piccolo
                      has most of the same fingerings as its larger sibling, the
                      standard transverse flute, but the sound it produces is an
                      octave higher than written.
                    </p>
                  </div>
                  <div class="divider" />
                  <div class="section">
                    <h5 className="headings_popup">Model</h5>
                    <p className="card_text_colour">
                      Gemeinhardt 4PMH Piccolo, Black Plastic/Silver Plated
                    </p>
                  </div>
                  <div class="divider" />
                  <div class="section">
                    <h5 className="headings_popup">Price:</h5>
                    <p className="card_text_colour">$400</p>
                  </div>

                  <div class="divider" />
                  <div class="section">
                    <h5 className="headings_popup">Cart</h5>
                    <p>
                      <button className="waves-effect waves-light btn left cart-btn black">
                        <i className="material-icons">add_shopping_cart</i>Add
                        to cart
                      </button>
                    </p>
                  </div>
                </span>
              </div>
              {/* Piccolo card reveal */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Woodwind;
