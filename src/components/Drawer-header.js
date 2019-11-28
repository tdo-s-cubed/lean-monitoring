import React from "react";
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faStream,
  faChartBar
} from "@fortawesome/free-solid-svg-icons";

import Drawer from "./Drawer";

function DrawerHeader() {
  return (
    <div className="sideNAV">
      <h1>Lean Monitoring</h1>
      <img
        className="logo"
        src="../../images/S-cubed-logo-dark-medium.png"
        alt="S-cubed-logo"
      ></img>
      <nav className="col-md-2 d-none d-md-block bg-light sidebar">
        <div className="sidebar-sticky">
          <ul className="nav flex-column">
            <NavLink
              to="/"
              className="nav-item"
              activeClassName="is-active"
              exact={true}
            >
              <FontAwesomeIcon className="__icon" icon={faHome} />
              Home
            </NavLink>

            <NavLink
              to="/stream"
              className="nav-item"
              activeClassName="is-active"
              exact={true}
            >
              <FontAwesomeIcon className="__icon" icon={faStream} />
              Stream
            </NavLink>

            <NavLink to="/app" className="nav-item" activeClassName="is-active">
              <FontAwesomeIcon className="__icon" icon={faChartBar} />
              App
            </NavLink>
          </ul>

          <h2>Streams</h2>

          <Drawer />
        </div>
      </nav>
    </div>
  );
}

export default DrawerHeader;
