import React, { Component } from "react";
import { Navbar, Container, Input, Form, FormGroup } from "reactstrap";

class ComponentsNavbar extends Component {
  state = {
    search: ""
  };

  onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ search: event.target.value });
  };

  onSearchPokemon = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(this.state.search, "Submitted!!!");
  };

  render() {
    return (
      <Navbar className="navbar-transparent" expand="lg">
        <Container>
          <Form className="w-100" onSubmit={this.onSearchPokemon}>
            <FormGroup>
              <Input
                type="text"
                name="pokemon"
                placeholder="Search any Pokemon"
                style={{ textAlign: "center", fontSize: "16px" }}
                value={this.state.search}
                onChange={this.onChangeSearch}
              />
            </FormGroup>
          </Form>
        </Container>
      </Navbar>
    );
  }
}

export default ComponentsNavbar;
