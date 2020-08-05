import React, { useState } from "react";
import piano_image from "../imagesofinstruments/piano_image.jpg";
import organ_image from "../imagesofinstruments/organ_image.jpg";
import harpsichord_image from "../imagesofinstruments/harpsichord_image.jpg";
import cello_image from "../imagesofinstruments/cello_image.jpg";
import violin_image from "../imagesofinstruments/violin_image.jpg";
import doublebass_image from "../imagesofinstruments/doublebass_image.jpg";
import triangle_image from "../imagesofinstruments/triangle_image.jpg";
import cymbals_image from "../imagesofinstruments/cymbals_image.jpg";
import timpani_image from "../imagesofinstruments/timpani_image.jpg";
import piccolo_image from "../imagesofinstruments/piccolo_image.jpg";
import flute_image from "../imagesofinstruments/flute_image.jpg";
import clarinet_image from "../imagesofinstruments/clarinet_image.jpg";
import background2 from "../imagesofinstruments/background2.jpg";
import "../../../App.css";

const Catalogue = () => {
  const [products] = useState([
    {
      img:
        "https://images.unsplash.com/photo-1545293527-e26058c5b48b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",
      name: "Yamaha Baby Grand Piano",
      type: "Keys",
      what: "What is a piano?",
      description:
        "The piano is an acoustic, stringed musical instrument invented in Italy by Bartolomeo Cristofori around the year 1700, in which the strings are struck by wooden hammers that are coated with a softer material.",
      model: "Yamaha GB1K-PE Baby Grand Piano w/ Bench - Polished Ebony",
      price: "$94000",
    },
    {
      img:
        "https://images.unsplash.com/photo-1447160430190-9d1cae0b73db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1048&q=80",
      name: "1960 Hammond A100 Organ",
      type: "Keys",
      what: "What is an organ?",
      description:
        "a large musical instrument having rows of pipes supplied with air from bellows (now usually electrically powered), and played using a keyboard or by an automatic mechanism The pipes are generally arranged in ranks of a particular type, each controlled by a stop, and often into larger sets linked to separate keyboards.",
      model: "1960 Hammond A100 Organ",
      price: "$35000",
    },
    {
      img:
        "https://cdn.pixabay.com/photo/2014/02/05/17/29/handel-harpsichord-259262_960_720.jpg",
      name: "French manual Harpsichord",
      type: "Keys",
      what: "What is a harpsichord?",
      description:
        "A harpsichord is a musical instrument played by means of a keyboard. Like a pipe organ, a harpsichord may have more than one keyboard manual and harpsichords may have stop buttons which add or remove additional octaves. Some harpsichords may have a lute stop, which simulates the sound of a plucked lute.",
      model: "French manual Harpsichord",
      price: "$16000",
    },
    {
      img:
        "https://cdn.pixabay.com/photo/2018/02/01/06/21/violin-3122660_960_720.jpg",
      name: "Old French Violin",
      type: "String",
      what: "What is a violin?",
      description:
        "a stringed musical instrument of treble pitch, played with a horsehair bow. The classical European violin was developed in the 16th century. It has four strings and a body of characteristic rounded shape,narrowed at the middle and with two f-shaped soundholes.",
      model: "Old French Violin By JTL Mirecourt With Bow Rosin",
      price: "$20000",
    },

    {
      img:
        "https://cdn.pixabay.com/photo/2016/05/29/16/30/bass-1423289_1280.jpg",
      name: "3/4 Size Doublebass",
      type: "String",
      what: "What is a double bass?",
      description:
        "The double bass, also known simply as the bass, is the largest and lowest-pitched bowed, string instrument in the modern symphony orchestra. The bass is a standard member of the orchestra's string section, as well as the concert band, and is featured in concertos, solo, and chamber music in Western classical music.",
      model:
        "3/4 Size Doublebass Contrabass Hand-Made in Europe from Solid Wood",
      price: "$1500",
    },

    {
      img:
        "https://cdn.pixabay.com/photo/2017/10/08/17/22/cello-2830670_960_720.jpg",
      name: "Old Baroque Cello",
      type: "String",
      what: "What is a cello?",
      description:
        " The cello or violoncello is a bowed string instrument of the violin family. Its four strings are usually tuned in perfect fifths: from low to high, C₂, G₂, D₃ and A₃, an octave lower than the viola.",
      model: "OLD BAROQUE CELLO, violoncello barocco antico",
      price: "$3000",
    },

    {
      img:
        "https://cdn.pixabay.com/photo/2015/04/14/21/26/clarinet-722815_960_720.jpg",
      name: "Bb Clarinet",
      type: "Woodwind",
      what: "What is a clarinet?",
      description:
        "The clarinet is a family of woodwind instruments. It has a single-reed mouthpiece, a straight, cylindrical tube with an almost cylindrical bore, and a flared bell. A person who plays a clarinet is called a clarinetist.",
      model: "Bundy Selmer Resonite Bb Clarinet",
      price: "$215.53",
    },
    {
      img: { flute_image },
      name: "Concert Flute",
      type: "Woodwind",
      description:
        "The flute is a family of musical instruments in the woodwind group. Unlike woodwind instruments with reeds, a flute is an aerophone or reedless wind instrument that produces its sound from the flow of air across an opening.",
      model: "Yamaha 211S Silver Headjoint Concert Flute",
      price: "$2000",
    },
    {
      img: { piccolo_image },
      name: "Gemeinhardt 4PMH Piccolo",
      type: "Woodwind",
      what: "What is a piccolo?",
      description:
        "The piccolo is a half-size flute, and a member of the woodwind family of musical instruments. The modern piccolo has most of the same fingerings as its larger sibling, the standard transverse flute, but the sound it produces is an octave higher than written.",
      model: "Gemeinhardt 4PMH Piccolo, Black Plastic/Silver Plated",
      price: "$400",
    },
    {
      img: { cymbals_image },
      name: "Silent Cymbal Pack",
      type: "Percussion",
      what: "What is a cymbal?",
      description:
        "A cymbal is a common percussion instrument. Often used in pairs, cymbals consist of thin, normally round plates of various alloys. The majority of cymbals are of indefinite pitch, although small disc-shaped cymbals based on ancient designs sound a definite note.",
      model:
        "Low Volume Quiet Silent Cymbal Pack 5pcs with 18 China and Sleeved Cymbal Bag",
      price: "$70",
    },
    {
      img: { timpani_image },
      name: "Orchestral Timpani Head",
      type: "Percussion",
      what: "What is a timpani?",
      description:
        "Timpani or kettledrums are musical instruments in the percussion family. A type of drum categorised as a hemispherical drum, they consist of a membrane called a head stretched over a large bowl traditionally made of copper.",
      model: "Evans ET26 26'' Orchestral Timpani Head",
      price: "$2251",
    },
    {
      img: { triangle_image },
      name: "Musical Steel Triangle",
      type: "Percussion",
      what: "What is a triangle?",
      description:
        "The triangle is an idiophone type of musical instrument in the percussion family. It is a bar of metal, usually steel but sometimes other metals such as beryllium copper, bent into a triangle shape. The instrument is usually held by a loop of some form of thread or wire at the top curve.",
      model:
        "9 '' Musical Steel Triangle mit für Kinder Pädagogisches Spielzeug",
      price: "$5",
    },
  ]);

  return (
    <div>
      <div className="bg-color">
        <img src={background2} className="bg" alt="bg" />
      </div>
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
        {products.map((product) => (
          <div className="col s12 m12 l4" style={{ padding: "60px 5px" }}>
            <div className="card left cart-btn hoverable move_my_products">
              <div className="card-image waves-effect waves-block waves-light">
                <img
                  className="activator size_of_image"
                  src={product.img}
                  alt="img"
                />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                  {product.name}
                  <i className="material-icons right">more_vert</i>
                </span>
              </div>
              {/* Piano card reveal */}
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
        ))}
      </div>
    </div>
  );
};

export default Catalogue;
