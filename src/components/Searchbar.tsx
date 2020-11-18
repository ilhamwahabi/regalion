import React, { Component } from "react";
import { Navbar, Container, Input, Form, FormGroup } from "reactstrap";
import { Field, reduxForm, InjectedFormProps, Validator } from "redux-form";
import { connect } from "react-redux";
import { css } from "emotion";

import { changePokemon } from "../actions";
import { pokemonNames } from "../assets/ts/name";
import { IPalettes } from "../types";
import { IState } from "../reducers";

interface INavbarProps {
  name: string;
  palettes: IPalettes;
  changePokemon: (index: string) => void;
}

class Searchbar extends Component<
  INavbarProps & InjectedFormProps<{}, INavbarProps>
> {
  onSearchPokemon = (submitProps: any) => {
    const { search } = submitProps;
    const { name, changePokemon } = this.props;

    // If it's same with current pokemon don't do search
    if (name.toLowerCase() === search.toLowerCase()) return;

    // If name is not valid don't do search
    const findIndex = pokemonNames.findIndex(
      availableName => availableName.toLowerCase() === search.toLowerCase()
    );
    if (findIndex === -1) return;

    changePokemon((findIndex + 1).toString());
  };

  renderField = (fieldProps: any) => {
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
        aria-label="Search any Pokémon"
        {...input}
      />
    );
  };

  render() {
    return (
      <Navbar style={{ zIndex: 10 }} className="navbar-transparent" expand="lg">
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

const mapStateToProps = (state: IState) => {
  const { pokemons, currentPokemon, currentForm } = state.pokemon;
  const { name, palettes } = pokemons[currentPokemon][currentForm];

  return { name, palettes };
};

export default connect(mapStateToProps, {
  changePokemon
})(
  reduxForm<{}, INavbarProps>({
    form: "searchPokemon",
    validate
  })(Searchbar)
);
