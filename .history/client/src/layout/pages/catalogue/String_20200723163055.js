/* eslint-disable no-unused-vars */

import React from "react";
import cello_image from "../imagesofinstruments/cello_image.jpg";
import violin_image from "../imagesofinstruments/violin_image.jpg";
import doublebass_image from "../imagesofinstruments/doublebass_image.jpg";
import background2 from "../imagesofinstruments/background2.jpg";
import "../../../App.css";

const String = () => {
  return (
    <div>
      <div className="bg-color">
        <img src={background2} className="bg" alt="bg" />
      </div>
      <h1 className="instrument_sections">String Section</h1>
      <section>
        <div
          className="row move_this_up"
          style={{
            paddingLeft: "40px",
            paddingRight: "30px",
            margin: "10px",
          }}
        >
          <div className="col s12 m12 l4" style={{ padding: "60px 5px" }}>
            <div className="card left cart-btn hoverable move_my_products  size_of_image">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={violin_image} alt="img" />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                  Old French Violin
                  <i className="material-icons right">more_vert</i>
                </span>
              </div>
              {/* Violin card reveal */}
              <div className="card-reveal ">
                <span className="card-title grey-text text-darken-4">
                  <i className="material-icons right">close</i>

                  <div class="section">
                    <h5 className="headings_popup">Type of instrument:</h5>
                    <p className="card_text_colour">String</p>
                  </div>
                  <div class="divider" />
                  <div class="section">
                    <h5 className="headings_popup">What is a violin?</h5>
                    <p className="card_text_colour">
                      a stringed musical instrument of treble pitch, played with
                      a horsehair bow. The classical European violin was
                      developed in the 16th century. It has four strings and a
                      body of characteristic rounded shape,narrowed at the
                      middle and with two f-shaped soundholes.
                    </p>
                  </div>
                  <div class="divider" />
                  <div class="section">
                    <h5 className="headings_popup">Model</h5>
                    <p className="card_text_colour">
                      Old French Violin By JTL Mirecourt With Bow Rosin
                    </p>
                  </div>
                  <div class="divider" />
                  <div class="section">
                    <h5 className="headings_popup">Price:</h5>
                    <p className="card_text_colour">$20000 </p>
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
              {/* Violin card reveal */}
            </div>
          </div>
          <div className="col s12 m12 l4" style={{ padding: "60px 5px" }}>
            <div className="card hoverable move_my_products">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={doublebass_image} alt="img" />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                  3/4 Size Doublebass
                  <i className="material-icons right">more_vert</i>
                </span>
              </div>
              {/* Double BASS card reveal */}
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">
                  <i className="material-icons right">close</i>

                  <div class="section">
                    <h5 className="headings_popup">Type of instrument:</h5>
                    <p className="card_text_colour">String</p>
                  </div>
                  <div class="divider" />
                  <div class="section">
                    <h5 className="headings_popup"> What is a double bass?</h5>
                    <p className="card_text_colour">
                      The double bass, also known simply as the bass, is the
                      largest and lowest-pitched bowed, string instrument in the
                      modern symphony orchestra. The bass is a standard member
                      of the orchestra's string section, as well as the concert
                      band, and is featured in concertos, solo, and chamber
                      music in Western classical music.
                    </p>
                  </div>
                  <div class="divider" />
                  <div class="section">
                    <h5 className="headings_popup">Model</h5>
                    <p className="card_text_colour">
                      3/4 Size Doublebass Contrabass Hand-Made in Europe from
                      Solid Wood
                    </p>
                  </div>
                  <div class="divider" />
                  <div class="section">
                    <h5 className="headings_popup">Price:</h5>
                    <p className="card_text_colour">$1500</p>
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
              {/* Double BASS card reveal */}
            </div>
          </div>
          <div className="col s12 m12 l4" style={{ padding: "60px 5px" }}>
            <div className="card hoverable move_my_products">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={cello_image} alt="img" />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                  Old Baroque Cello
                  <i className="material-icons right">more_vert</i>
                </span>
              </div>
              {/* Cello card reveal */}
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">
                  <i className="material-icons right">close</i>

                  <div class="section">
                    <h5 className="headings_popup">Type of instrument:</h5>
                    <p className="card_text_colour">String</p>
                  </div>
                  <div class="divider" />
                  <div class="section">
                    <h5 className="headings_popup"> What is a cello?</h5>
                    <p className="card_text_colour">
                      The cello or violoncello is a bowed string instrument of
                      the violin family. Its four strings are usually tuned in
                      perfect fifths: from low to high, C₂, G₂, D₃ and A₃, an
                      octave lower than the viola.
                    </p>
                  </div>
                  <div class="divider" />
                  <div class="section">
                    <h5 className="headings_popup">Model</h5>
                    <p className="card_text_colour">
                      OLD BAROQUE CELLO, violoncello barocco antico
                    </p>
                  </div>
                  <div class="divider" />
                  <div class="section">
                    <h5 className="headings_popup">Price:</h5>
                    <p className="card_text_colour">$3000</p>
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
              {/* Cello card reveal */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default String;
