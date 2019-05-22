import React from "react";
import { FormControl, Form, Navbar, Nav } from "react-bootstrap";
import { connect } from "react-redux";
import { searchData } from "../redux/actions";

const mapDispatchToProps = dispatch => ({
  onSearchChange: event => dispatch(searchData(event.target.value))
});

function Search(props) {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Meteorite Explorer</Navbar.Brand>
      <Nav className="mr-auto">
        {/* <Nav.Link href="#home">Home</Nav.Link> */}
      </Nav>
      <Form inline>
        <FormControl
          type="text"
          placeholder="Search"
          className="mr-sm-2"
          onChange={props.onSearchChange}
        />
      </Form>
    </Navbar>
  );
}

export default connect(
  null,
  mapDispatchToProps
)(Search);
