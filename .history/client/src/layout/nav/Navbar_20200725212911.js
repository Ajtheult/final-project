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
              <br />
              <br />
            </div>
          </li>
          <li>
            <Link className="waves-effect waves-red" to="/">
              Home
            </Link>
            <Link className="waves-effect waves-red" to="/about">
              About Us
            </Link>
          </li>
          <li>
            <div className="divider"></div>
          </li>

          <li>
            <h4 className="sidenav_title_text">User</h4>
            <h6 className="sidenav_title_text_2">
              You cannot go to these pages if you are already logged in
            </h6>

            <Link className="waves-effect waves-red" to="/login">
              Login
            </Link>
            <Link className="waves-effect waves-red" to="/register">
              Register user
            </Link>
          </li>

          <li>
            <div className="divider"></div>
          </li>

          <li>
            <h4 className="sidenav_title_text">Products</h4>
            <Link className="waves-effect waves-red" to="/catalogue">
              Catalogue
            </Link>

            <Link className="waves-effect waves-red" to="/cart">
              Cart
            </Link>
          </li>
          <li>
            <div className="divider"></div>
          </li>
          <li>
            <h4 className="sidenav_title_text">Portfolio</h4>
          </li>
          <li>
            <a
              className="waves-effect waves-red"
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
