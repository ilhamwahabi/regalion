import React, { Component } from "react";
import { Navbar, Container, Input } from "reactstrap";

class ComponentsNavbar extends Component {
  render() {
    return (
      <Navbar className="navbar-transparent" expand="lg">
        <Container>
          <Input
            type="text"
            name="pokemon"
            placeholder="Search any Pokemon"
            style={{ textAlign: "center", fontSize: "16px" }}
          />
        </Container>
      </Navbar>
    );
  }
}

export default ComponentsNavbar;
