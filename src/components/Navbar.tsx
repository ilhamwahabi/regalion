import React, { Component } from "react";
import { Navbar, Container, Input, Form, FormGroup } from "reactstrap";
import { Field, reduxForm, InjectedFormProps } from "redux-form";
import { connect } from "react-redux";

import { changePokemon } from "../actions";
import pokemon from "../assets/ts/name";

class ComponentsNavbar extends Component<InjectedFormProps, {}> {
  onSearchPokemon = ({ search }: any) => {
    const pokemonName = search[0].toUpperCase() + search.slice(1);

    if (pokemon.includes(pokemonName))
      (this.props as any).changePokemon(search);
  };

  renderField = ({ input }: any) => {
    return (
      <Input
        type="text"
        name="pokemon"
        placeholder="Search any Pokémon"
        style={{ textAlign: "center", fontSize: "16px" }}
        autoComplete="off"
        list="pokemons"
        {...input}
      />
    );
  };

  render() {
    return (
      <Navbar className="navbar-transparent" expand="lg">
        <Container>
          <Form
            className="w-100"
            onSubmit={this.props.handleSubmit(this.onSearchPokemon)}
          >
            <FormGroup>
              <Field name="search" component={this.renderField} />
            </FormGroup>
          </Form>
        </Container>
      </Navbar>
    );
  }
}

const formWrapper = reduxForm({ form: "searchPokemon" })(ComponentsNavbar);

export default connect(
  null,
  {
    changePokemon
  }
)(formWrapper);
