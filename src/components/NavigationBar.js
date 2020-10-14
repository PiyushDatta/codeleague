import React from "react";
import { Nav, Navbar } from "react-bootstrap";

export const NavigationBar = () => (
  <Navbar expand="lg">
    <Navbar.Brand className="nav-item-text" href="/">Code League</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Item className="nav-item">
          <Nav.Link className="nav-item-text" href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item className="nav-item">
          <Nav.Link className="nav-item-text" href="/play">Play</Nav.Link>
        </Nav.Item>
        <Nav.Item className="nav-item">
          <Nav.Link className="nav-item-text" href="/problems">Problems</Nav.Link>
        </Nav.Item>
        <Nav.Item className="nav-item">
          <Nav.Link className="nav-item-text" href="/leaderboards">Leaderboards</Nav.Link>
        </Nav.Item>
        <Nav.Item className="nav-item">
          <Nav.Link className="nav-item-text" href="/account">My Account</Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
