import React from "react";
import { FormControl, Form, Navbar, Nav } from "react-bootstrap";

export default function Search() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Meteorite Explorer</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      </Form>
    </Navbar>
  );
}
