import React from "react";
import piano_image from "../imagesofinstruments/piano_image.jpg";
import organ_image from "../imagesofinstruments/organ_image.jpg";
import harpsichord_image from "../imagesofinstruments/harpsichord_image.jpg";
import background2 from "../imagesofinstruments/background2.jpg";
import cello_image from "../imagesofinstruments/cello_image.jpg";
import violin_image from "../imagesofinstruments/violin_image.jpg";
import doublebass_image from "../imagesofinstruments/doublebass_image.jpg";
import triangle_image from "../imagesofinstruments/triangle_image.jpg";
import cymbals_image from "../imagesofinstruments/cymbals_image.jpg";
import timpani_image from "../imagesofinstruments/timpani_image.jpg";
import piccolo_image from "../imagesofinstruments/piccolo_image.jpg";
import flute_image from "../imagesofinstruments/flute_image.jpg";
import clarinet_image from "../imagesofinstruments/clarinet_image.jpg";

const Catalogue = () => {
  return (
    <div>
      <div className="bg-color">
        <img src={background2} className="bg" alt="bg" />
      </div>
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
                <img
                  className="activator size_of_image"
                  src={piano_image}
                  alt="img"
                />
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
                <img
                  className="activator size_of_image"
                  src={organ_image}
                  alt="img"
                />
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
                <img
                  className="activator size_of_image"
                  src={harpsichord_image}
                  alt="img"
                />
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
                <img
                  className="activator size_of_image"
                  src={piano_image}
                  alt="img"
                />
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
                <img
                  className="activator size_of_image"
                  src={organ_image}
                  alt="img"
                />
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
                <img
                  className="activator size_of_image"
                  src={harpsichord_image}
                  alt="img"
                />
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
                <img
                  className="activator size_of_image"
                  src={piano_image}
                  alt="img"
                />
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
                <img
                  className="activator size_of_image"
                  src={organ_image}
                  alt="img"
                />
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
                <img
                  className="activator size_of_image"
                  src={harpsichord_image}
                  alt="img"
                />
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
      <section>
        <div
          className="row"
          style={{ paddingLeft: "40px", paddingRight: "30px", margin: "50px" }}
        >
          <div className="col s12 m12 l4" style={{ padding: "60px 5px" }}>
            <div className="card left cart-btn  hoverable move_my_products">
              <div className="card-image waves-effect waves-block waves-light">
                <img
                  className="activator size_of_image"
                  src={clarinet_image}
                  alt="img"
                />
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
                <img
                  className="activator size_of_image"
                  src={flute_image}
                  alt="img"
                />
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
                <img
                  className="activator size_of_image"
                  src={piccolo_image}
                  alt="img"
                />
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
      <section>
        <div
          className="row"
          style={{ paddingLeft: "40px", paddingRight: "30px", margin: "50px" }}
        >
          <div className="col s12 m12 l4" style={{ padding: "60px 5px" }}>
            <div className="card left cart-btn  hoverable move_my_products">
              <div className="card-image waves-effect waves-block waves-light">
                <img
                  className="activator size_of_image"
                  src={cymbals_image}
                  alt="img"
                />
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
                <img
                  className="activator size_of_image"
                  src={timpani_image}
                  alt="img"
                />
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
                <img
                  className="activator size_of_image"
                  src={triangle_image}
                  alt="img"
                />
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

export default Catalogue;
