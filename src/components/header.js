import React from "react";
import logo from "../logo.svg";



export default function header() {
  return (
    <header>
      <div className="container d-flex">
        <img src={logo} className="logo" alt="Sikayetvar Logo " />
        <nav>
          <ul className="mb-0">
            <li>Posts</li>
            <li className="btn-featured">Login</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
