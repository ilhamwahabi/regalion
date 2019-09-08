import React, { Component } from "react";
import { Navbar, Container, Input, Form, FormGroup } from "reactstrap";
import {
  Field,
  reduxForm,
  InjectedFormProps,
  WrappedFieldProps,
  Validator
} from "redux-form";
import { connect } from "react-redux";
import { css } from "emotion";

import { changePokemon } from "../actions";
import { pokemonNames } from "../assets/ts/name";
import { IPalettes } from "../types";

interface INavbarProps {
  name: string;
  palettes: IPalettes;
  changePokemon(pokemonNameOrIndex: number | string): void;
}

class Searchbar extends Component<
  INavbarProps & InjectedFormProps<{}, INavbarProps>
> {
  onSearchPokemon = (submitProps: any) => {
    const { search } = submitProps;

    // If it's same with current pokemon don't do search
    if (this.props.name.toLowerCase() === search) return;

    // If name is not valid don't do search
    const findIndex = pokemonNames.findIndex(
      availableName => availableName.toLowerCase() === search.toLowerCase()
    );
    if (findIndex === -1) return;

    this.props.changePokemon(findIndex + 1);
  };

  renderField = (fieldProps: WrappedFieldProps) => {
    const { input, meta } = fieldProps;
    const { palettes } = this.props;

    const textColor = `rgb(${palettes.lightMuted})`;
    const borderColor = meta.valid
      ? `rgb(${palettes.lightMuted})`
      : `rgb(${palettes.darkVibrant})`;

    return (
      <Input
        type="text"
        name="pokemon"
        placeholder="Search any Pokémon"
        spellCheck={false}
        className={css`
          text-align: center;
          font-size: 16px;
          color: ${textColor};
          border-color: ${borderColor} !important;
          transition: border-color 1s;
          &::placeholder {
            color: ${textColor};
            transition: color 1s;
          }
        `}
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
              <Field
                name="search"
                component={this.renderField}
                props={this.props}
              />
            </FormGroup>
          </Form>
        </Container>
      </Navbar>
    );
  }
}

const validate: Validator = value => {
  const { search } = value;

  if (
    search &&
    pokemonNames.findIndex(
      availableName => availableName.toLowerCase() === search.toLowerCase()
    ) === -1
  )
    return { search: "Invalid Pokémon Name" };
};

const mapStateToProps = (state: any) => {
  const { pokemons, currentPokemon, currentForm } = state.pokemon;

  return {
    name: pokemons[currentPokemon][currentForm].name,
    palettes: pokemons[currentPokemon][currentForm].palettes
  };
};

export default connect(
  mapStateToProps,
  {
    changePokemon
  }
)(
  reduxForm<{}, INavbarProps>({
    form: "searchPokemon",
    validate
  })(Searchbar)
);
