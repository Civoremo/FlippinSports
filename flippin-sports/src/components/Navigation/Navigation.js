import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <ul className="navbar">
      <li>
        <NavLink exact to="/" activeClassName="activeLink">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/nba" activeClassName="activeLink">
          NBA
        </NavLink>
      </li>
      <li>
        <NavLink to="/nfl" activeClassName="activeLink">
          NFL
        </NavLink>
      </li>
      <li>
        <NavLink to="/mlb" activeClassName="activeLink">
          MLB
        </NavLink>
      </li>
      <li>
        <NavLink to="/nhl" activeClassName="activeLink">
          NHL
        </NavLink>
      </li>
      <li>
        <NavLink to="/mls" activeClassName="activeLink">
          MLS
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
