import React, { Component } from "react";
import { Navbar, Container, Input, Form, FormGroup } from "reactstrap";
import { Field, reduxForm, InjectedFormProps } from "redux-form";
import { connect } from "react-redux";

import { changePokemon } from "../actions";
import pokemon from "../assets/ts/name";

class ComponentsNavbar extends Component<InjectedFormProps, {}> {
  onSearchPokemon = ({ search }: any) => {
    if (pokemon.map(p => p.toLowerCase()).includes(search))
      (this.props as any).changePokemon(search);
  };

  renderField = ({ input, meta }: any) => {
    return (
      <Input
        type="text"
        name="pokemon"
        placeholder="Search any Pokémon"
        style={{ textAlign: "center", fontSize: "16px" }}
        autoComplete="off"
        invalid={meta.active && !!meta.error}
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

const validate = ({ search }: any) => {
  if (!pokemon.map(p => p.toLowerCase()).includes(search) && search)
    return { search: "Invalid Pokémon Name" };
};

const formWrapper = reduxForm({
  form: "searchPokemon",
  validate: validate as any
})(ComponentsNavbar);

export default connect(
  null,
  {
    changePokemon
  }
)(formWrapper);
