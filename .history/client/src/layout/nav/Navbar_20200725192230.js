/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import "../../App.css";
import logo from "./logo.jpg";
import mybackground from "./mybackground.jpg";
import { Link } from "react-router-dom";

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
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About Us</li>
          </Link>
          <li>
            <div className="divider"></div>
          </li>

          <li>
            <div className="subheader">User</div>
          </li>

          <Link to="/login">
            <li>Login</li>
          </Link>
          <Link to="/register">
            <li>Register user</li>
          </Link>

          <Link to="/cart">
            <li>Cart</li>
          </Link>
          <li>
            <div className="divider"></div>
          </li>

          <li>
            <div className="subheader">Products</div>
          </li>

          <Link to="/catalogue">
            <li>Catalogue</li>
          </Link>

          <li>
            <div className="divider"></div>
          </li>
          <li>
            <div className="subheader">Portfolio</div>
          </li>
          <li>
            <a
              className="waves-effect"
              href="https://ajtheult.github.io/portfolio-v3/"
              rel="noopener noreferrer"
              target="_blank"
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
