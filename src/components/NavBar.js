import React from "react";
import logo from "../logo.png";
import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

export default function NavBarComponent() {
  return (
    <>
    <div className="navBar">
        <div className="navBar__image">
            <img src={logo}/>
        </div>
        <ul>
            <li>Home</li>
            <li>Logs</li>
        </ul>
    </div>
    </>
  );
}
