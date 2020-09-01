import React from "react";
import { Navbar, Nav } from "react-bootstrap";
//import LogoutButton from "../Buttons/LogoutButton";

//import Profile from "../Security/Profile";

const nav = () => {
  return (
    <Navbar bg="light" expand="lg" fixed="bottom">
      <Navbar.Brand href="/">Karov</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/blog">Blog</Nav.Link>
          <Nav.Link href="/graphs">Graps</Nav.Link>
          <Nav.Link href="/clusters">Clusters</Nav.Link>
          <Nav.Link href="/users">Users</Nav.Link>
        </Nav>
        {/* <LoginButton />
        <LogoutButton /> */}
        {/* <Profile /> */}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default nav;
