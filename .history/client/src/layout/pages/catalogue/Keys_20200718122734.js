import React from "react";
import piano_image from "../imagesofinstruments/piano_image.jpg";
import organ_image from "../imagesofinstruments/organ_image.jpg";
import harpsichord_image from "../imagesofinstruments/harpsichord_image.jpg";
import background2 from "../imagesofinstruments/background2.jpg";
import "../../../App.css";

const Keys = () => {
  return (
    <div>
      <div className="bg-color">
        <img src={background2} className="bg" alt="bg" />
      </div>
      <h1 className="instrument_sections">Keys Section</h1>
      <section>
        <div
          className="row"
          style={{
            paddingLeft: "40px",
            paddingRight: "30px",
            margin: "20px",
          }}
        >
          <div className="col s12 m12 l4" style={{ padding: "60px 5px" }}>
            <div className="card left cart-btn hoverable move_my_products">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={piano_image} alt="img" />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                  Yamaha Baby Grand Piano
                  <i className="material-icons right">more_vert</i>
                </span>
              </div>
              {/* Piano card reveal */}
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">
                  <i className="material-icons right">close</i>

                  <div class="section">
                    <h5 className="headings_popup">Type of instrument:</h5>
                    <p className="card_text_colour">Keys</p>
                  </div>
                  <div class="divider" />
                  <div class="section">
                    <h5 className="headings_popup"> What is a piano?</h5>
                    <p className="card_text_colour">
                      The piano is an acoustic, stringed musical instrument
                      invented in Italy by Bartolomeo Cristofori around the year
                      1700, in which the strings are struck by wooden hammers
                      that are coated with a softer material.
                    </p>
                  </div>
                  <div class="divider" />
                  <div class="section">
                    <h5 className="headings_popup">Model</h5>
                    <p className="card_text_colour">
                      Yamaha GB1K-PE Baby Grand Piano w/ Bench - Polished Ebony
                    </p>
                  </div>
                  <div class="divider" />
                  <div class="section">
                    <h5 className="headings_popup">Price:</h5>
                    <p className="card_text_colour">$94000</p>
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
              {/* Piano card reveal*/}
            </div>
          </div>
          <div className="col s12 m12 l4" style={{ padding: "60px 5px" }}>
            <div className="card hoverable move_my_products">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={organ_image} alt="img" />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                  1960 Hammond A100 Organ
                  <i className="material-icons right">more_vert</i>
                </span>
              </div>
              {/* Organ card reveal*/}
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">
                  <i className="material-icons right">close</i>

                  <div class="section">
                    <h5 className="headings_popup">Type of instrument</h5>
                    <p className="card_text_colour">Keys</p>
                  </div>
                  <div class="divider" />
                  <div class="section">
                    <h5 className="headings_popup"> What is an organ?</h5>
                    <p className="card_text_colour">
                      a large musical instrument having rows of pipes supplied
                      with air from bellows (now usually electrically powered),
                      and played using a keyboard or by an automatic mechanism.
                      The pipes are generally arranged in ranks of a particular
                      type, each controlled by a stop, and often into larger
                      sets linked to separate keyboards.
                    </p>
                  </div>
                  <div class="divider" />
                  <div class="section">
                    <h5 className="headings_popup">Model</h5>
                    <p className="card_text_colour">1960 Hammond A100 Organ</p>
                  </div>
                  <div class="divider" />
                  <div class="section">
                    <h5 className="headings_popup">Price:</h5>
                    <p className="card_text_colour">$35000</p>
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
              {/* Organ card reveal*/}
            </div>
          </div>
          <div className="col s12 m12 l4" style={{ padding: "60px 5px" }}>
            <div className="card hoverable move_my_products">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={harpsichord_image} alt="img" />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                  French manual Harpsichord
                  <i className="material-icons right">more_vert</i>
                </span>
              </div>
              {/* Harpsichord card reveal*/}
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">
                  <i className="material-icons right">close</i>

                  <div class="section">
                    <h5 className="headings_popup">Type of instrument</h5>
                    <p className="card_text_colour">Keys</p>
                  </div>
                  <div class="divider" />
                  <div class="section">
                    <h5 className="headings_popup">What is a harpsichord?</h5>
                    <p className="card_text_colour">
                      A harpsichord is a musical instrument played by means of a
                      keyboard. Like a pipe organ, a harpsichord may have more
                      than one keyboard manual and harpsichords may have stop
                      buttons which add or remove additional octaves. Some
                      harpsichords may have a lute stop, which simulates the
                      sound of a plucked lute.
                    </p>
                  </div>
                  <div class="divider" />
                  <div class="section">
                    <h5 className="headings_popup">Model</h5>
                    <p className="card_text_colour">
                      French manual Harpsichord
                    </p>
                  </div>
                  <div class="divider" />
                  <div class="section">
                    <h5 className="headings_popup">Price:</h5>
                    <p className="card_text_colour">$16000</p>
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
              {/* Harpsichord card reveal*/}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Keys;
