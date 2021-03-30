import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/app.css";
function Nav() {
  return (
    <div className="navigation">
      <nav>
        <div className="head-nav">
          <div className="logo">
            <h1>My Team</h1>
          </div>
          <div className="links">
            <ul className="nav-links">
              <NavLink exact to="/" activeClassName="active">
                <li>Home</li>
              </NavLink>
              <NavLink exact to="/AddUser" activeClassName="active">
                <li>Add Contact</li>
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
