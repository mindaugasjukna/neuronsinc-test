import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div id="Navbar">
      <NavLink exact to="/">
        <li>Neurons hub</li>
      </NavLink>
      <NavLink to="/login">
        <li>Login</li>
      </NavLink>
    </div>
  );
}
