import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import "./style.css";

export default function Navbar(props) {
  return (
    <>
      <nav className="navbar shadow navbar-expand-lg nb">
        <div className="container-fluid">
          <a className="navbar-brand text-light" href="/">
            {props.title}
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active text-light"
                  aria-current="page"
                  to="/Home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active text-light"
                  aria-current="page"
                  to="/"
                >
                  Support
                </Link>
              </li>
            </ul>
            <button type="button" className="btn mx-3 btn-outline-light">
              <Link className="nav-link" aria-current="page" to="/LoginPage">
                Login
              </Link>
            </button>
            <button type="button" className="btn btn-outline-light">
            <Link className="nav-link" aria-current="page" to="/RegisterPage">
                Register
              </Link>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};
