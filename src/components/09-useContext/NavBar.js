import React from "react";
import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          useContext
        </Link>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink exact activeClassName="active" className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink
              exact
              activeClassName="active"
              className="nav-link"
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              exact
              activeClassName="active"
              className="nav-link"
              to="/login"
            >
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </nav>

    // <nav>
    //   <ul>
    //     <li>
    //       <Link to="/">Home</Link>
    //     </li>
    //     <li>
    //       <Link to="/about">About</Link>
    //     </li>
    //     <li>
    //       <Link to="/login">Login</Link>
    //     </li>
    //   </ul>
    // </nav>
  );
};
