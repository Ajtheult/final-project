/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component, Fragment, useContext } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import "../../App.css";
import logo from "./logo.jpg";
import mybackground from "./mybackground.jpg";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";

const Navbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);

  const { isAuthenticated, logout, user } = authContext;

  const onLogout = () => {
    logout();
  };

  const authContext = useContext(AuthContext);

  const { isAuthenticated, logout, user } = authContext;
  const onLogout = () => {
    logout();
  };
  const authLinks = (
    <Fragment>
      <li>Hello {user && user.name}</li>
      <li>
        <a onClick={onLogout} href="#!">
          <i className="fas fa-sign-out-alt"></i>{" "}
          <span class="material-icons">login</span>
        </a>
      </li>
      <nav>
        <div className="nav-wrapper black">
          <a data-target="slide-out" className="sidenav-trigger show-on-large">
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
    <div className="navbar bg-primary">
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Contact Keeper",
  icon: "fas fa-id-card-alt",
};
export default Navbar;
