/* eslint-disable no-unused-vars */
import React from "react";

import triangle_image from "../imagesofinstruments/triangle_image.jpg";
import cymbals_image from "../imagesofinstruments/cymbals_image.jpg";
import timpani_image from "../imagesofinstruments/timpani_image.jpg";
import background2 from "../imagesofinstruments/background2.jpg";
import "../../../App.css";

const Percussion = () => {
  return (
    <div>
      <div className="bg-color">
        <img src={background2} className="bg" alt="bg" />
      </div>
      <h1 className="instrument_sections">Percussion Section</h1>
      <section>
        <div
          className="row"
          style={{ paddingLeft: "40px", paddingRight: "30px", margin: "50px" }}
        >
          <div className="col s12 m12 l4" style={{ padding: "60px 5px" }}>
            <div className="card left cart-btn  hoverable move_my_products">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={cymbals_image} alt="img" />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                  Silent Cymbal Pack
                  <i className="material-icons right">more_vert</i>
                </span>
              </div>
              {/* Cymbals card reveal */}
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">
                  <i className="material-icons right">close</i>

                  <div class="section">
                    <h5 className="headings_popup">Type of instrument:</h5>
                    <p className="card_text_colour">Percussion</p>
                  </div>
                  <div class="divider" />
                  <div class="section">
                    <h5 className="headings_popup"> What is a cymbal?</h5>
                    <p className="card_text_colour">
                      A cymbal is a common percussion instrument. Often used in
                      pairs, cymbals consist of thin, normally round plates of
                      various alloys. The majority of cymbals are of indefinite
                      pitch, although small disc-shaped cymbals based on ancient
                      designs sound a definite note.
                    </p>
                  </div>
                  <div class="divider" />
                  <div class="section">
                    <h5 className="headings_popup">Model</h5>
                    <p className="card_text_colour">
                      Low Volume Quiet Silent Cymbal Pack 5pcs with 18" China
                      and Sleeved Cymbal Bag
                    </p>
                  </div>
                  <div class="divider" />
                  <div class="section">
                    <h5 className="headings_popup">Price:</h5>
                    <p className="card_text_colour">$70</p>
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
              {/* Cymbals card reveal */}
            </div>
          </div>
          <div className="col s12 m12 l4" style={{ padding: "60px 5px" }}>
            <div className="card  hoverable move_my_products">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={timpani_image} alt="img" />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                  Orchestral Timpani Head
                  <i className="material-icons right">more_vert</i>
                </span>
              </div>
              {/* Timpani card reveal */}
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">
                  <i className="material-icons right">close</i>

                  <div class="section">
                    <h5 className="headings_popup">Type of instrument:</h5>
                    <p className="card_text_colour">Percussion</p>
                  </div>
                  <div class="divider" />
                  <div class="section">
                    <h5 className="headings_popup"> What is a timpani?</h5>
                    <p className="card_text_colour">
                      Timpani or kettledrums are musical instruments in the
                      percussion family. A type of drum categorised as a
                      hemispherical drum, they consist of a membrane called a
                      head stretched over a large bowl traditionally made of
                      copper.
                    </p>
                  </div>
                  <div class="divider" />
                  <div class="section">
                    <h5 className="headings_popup">Model</h5>
                    <p className="card_text_colour">
                      Evans ET26 26" Orchestral Timpani Head
                    </p>
                  </div>
                  <div class="divider" />
                  <div class="section">
                    <h5 className="headings_popup">Price:</h5>
                    <p className="card_text_colour">$2251</p>
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
              {/* Timpani card reveal */}
            </div>
          </div>
          <div className="col s12 m12 l4" style={{ padding: "60px 5px" }}>
            <div className="card  hoverable move_my_products">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={triangle_image} alt="img" />
              </div>

              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                  Musical Steel Triangle
                  <i className="material-icons right">more_vert</i>
                </span>
              </div>
              {/* Triangle card reveal */}
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">
                  <i className="material-icons right">close</i>

                  <div class="section">
                    <h5 className="headings_popup">Type of instrument:</h5>
                    <p className="card_text_colour">Percussion</p>
                  </div>
                  <div class="divider" />
                  <div class="section">
                    <h5 className="headings_popup"> What is a triangle?</h5>
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
                      9 '' Musical Steel Triangle mit für Kinder Pädagogisches
                      Spielzeug
                    </p>
                  </div>
                  <div class="divider" />
                  <div class="section">
                    <h5 className="headings_popup">Price:</h5>
                    <p className="card_text_colour">$5</p>
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
              {/* Triangle card reveal */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Percussion;
