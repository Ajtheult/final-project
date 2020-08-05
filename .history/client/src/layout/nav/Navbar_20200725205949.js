import React, { Fragment, useContext } from "react";

import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import mybackground from "./mybackground.jpg";
import logo from "./logo.jpg";

export class Navbar extends Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".sidenav");
      var instances = M.Sidenav.init(elems, {});
    });
  }
  render() {
    const authContext = useContext(AuthContext);

    const { isAuthenticated, logout, user } = authContext;

    const onLogout = () => {
      logout();
    };

    const authLinks = (
      <Fragment>
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
        </ul>
      </Fragment>
    );

    const guestLinks = (
      <Fragment>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </Fragment>
    );
    return (
      <div>
        <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
      </div>
    );
  }
}

export default Navbar;
