/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import "../../App.css";
import logo from "./logo.jpg";
import mybackground from "./mybackground.jpg";

export class Navbar extends Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".sidenav");
      // eslint-disable-next-line
      var instances = M.Sidenav.init(elems, {});
    });
  }

  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper black">
            <a
              data-target="slide-out"
              className="sidenav-trigger show-on-large"
            >
              <i className="material-icons">menu</i>
            </a>
          </div>
        </nav>
        <ul id="slide-out" className="sidenav">
          <li>
            <div className="user-view">
              <div className="background">
                <img src={mybackground} className="myback" alt="background" />
              </div>
              <a href="/">
                <img className="circle" src={logo} alt="logo" />
              </a>

              <span className="white-text name size">40 hours</span>
              <br />
            </div>
          </li>
          <li>
            <a className="waves-effect" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="waves-effect" href="/login">
              Login
            </a>
          </li>

          <li>
            <a className="waves-effect" href="/about">
              About Us
            </a>
          </li>

          <li>
            <div className="divider"></div>
          </li>

          <li>
            <div className="subheader">Catalogue</div>
          </li>

          <li>
            <a className="waves-effect" href="/keys">
              Keys
            </a>
          </li>

          <li>
            <a className="waves-effect" href="/string">
              String
            </a>
          </li>

          <li>
            <a className="waves-effect" href="/woodwind">
              Woodwind
            </a>
          </li>

          <li>
            <a className="waves-effect" href="/percussion">
              Percussion
            </a>
          </li>
          <li>
            <div className="divider"></div>
          </li>
          <li>
            <div className="subheader">My Portfolio</div>
          </li>
          <li>
            <a
              className="waves-effect"
              href="https://Ajtheult.github.io/portfolio"
            >
              Asaph Franks
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
