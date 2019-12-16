import React from "react";
// import { NavLink, Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Drawer from "./Drawer";

function DrawerHeader() {
  return (
    <div className="_side-nav-container">
      <div className="navigation-wrapper">
        <div className="sideNAV">
          <h1 className="name">Lean Monitoring</h1>
          <img
            className="logo"
            src="../images/S-cubed-logo-dark-medium.png"
            alt="S-cubed-logo"
          ></img>
          <nav className="col-md-2 d-none d-md-block bg-light sidebar">
            <div className="sidebar-sticky">
              <h2>Streams</h2>

              <Drawer />
            </div>
          </nav>
        </div>
        <div className="topNAV">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <h1 className="name">Lean Monitoring</h1>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <button
                  to="/"
                  className="nav-item"
                  activeclassname="is-active"
                  exact="true"
                >
                  <FontAwesomeIcon className="__icon" icon={faHome} />
                  Home
                </button>
                <h2>Streams</h2>
                <Drawer />
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default DrawerHeader;
