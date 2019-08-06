import React, { Component } from "react";
import { Navbar, Container, Input, Form, FormGroup } from "reactstrap";
import { Field, reduxForm, InjectedFormProps } from "redux-form";
import { connect } from "react-redux";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { changePokemon } from "../actions";
import { pokemonNames } from "../assets/ts/name";
import { IPalettes } from "../types";

interface INavbarProps {
  name: string;
  palettes: IPalettes;
  changePokemon(pokemonNameOrIndex: number | string): void;
}

class ComponentsNavbar extends Component<
  INavbarProps & InjectedFormProps<{}, INavbarProps>
> {
  onSearchPokemon = ({ search }: any) => {
    if (
      pokemonNames.map(p => p.toLowerCase()).includes(search) &&
      this.props.name.toLowerCase() !== search
    )
      this.props.changePokemon(search);
  };

  renderField = ({ input, meta }: any) => {
    const { palettes } = this.props;

    const borderColor = meta.valid
      ? `rgb(${palettes.lightMuted})`
      : `rgb(${palettes.darkVibrant})`;

    return (
      <Input
        type="text"
        name="pokemon"
        placeholder="Search any Pokémon"
        spellCheck={false}
        css={css`
          text-align: center;
          font-size: 16px;
          color: rgb(${palettes.lightMuted});
          border-color: ${borderColor} !important;
          &::placeholder {
            color: rgb(${palettes.lightMuted});
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
              <Field name="search" component={this.renderField} />
            </FormGroup>
          </Form>
        </Container>
      </Navbar>
    );
  }
}

const validate = ({ search }: any) => {
  if (
    !pokemonNames
      .map(pokemonName => pokemonName.toLowerCase())
      .includes(search) &&
    search
  )
    return { search: "Invalid Pokémon Name" };
};

const formWrapper = reduxForm<{}, INavbarProps>({
  form: "searchPokemon",
  validate: validate as any
})(ComponentsNavbar);

const mapStateToProps = (state: any) => {
  const { pokemon, selectedForm } = state.pokemon;

  return {
    name: pokemon[selectedForm].name,
    palettes: pokemon[selectedForm].palettes
  };
};

export default connect(
  mapStateToProps,
  {
    changePokemon
  }
)(formWrapper);
