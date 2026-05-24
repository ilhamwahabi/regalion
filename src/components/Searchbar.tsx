import React, { Component } from "react";
import { Navbar, Container, Input, Form, FormGroup } from "reactstrap";
import {
  Field,
  reduxForm,
  InjectedFormProps,
  SubmissionError
} from "redux-form";
import { connect } from "react-redux";
import { css } from "@emotion/css";

import { searchPokemonByName } from "../actions";
import { IPalettes } from "../types";
import { IState } from "../reducers";

interface INavbarProps {
  palettes: IPalettes;
  searchPokemonByName: (query: string) => Promise<string | null>;
}

interface ISearchFormValues {
  search?: string;
}

class Searchbar extends Component<
  INavbarProps & InjectedFormProps<ISearchFormValues, INavbarProps>
> {
  onSearchPokemon = async (submitProps: ISearchFormValues) => {
    const { search } = submitProps;
    const { searchPokemonByName } = this.props;
    const trimmed = search?.trim();

    if (!trimmed) return;

    const error = await searchPokemonByName(trimmed);
    if (error) {
      throw new SubmissionError({ search: error });
    }
  };

  renderField = (fieldProps: any) => {
    const { input, meta } = fieldProps;
    const { palettes } = this.props;

    const textColor = `rgb(${palettes.lightMuted})`;
    const hasError = meta.submitFailed && meta.error;
    const borderColor = hasError
      ? `rgb(${palettes.darkVibrant})`
      : `rgb(${palettes.lightMuted})`;

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
        invalid={hasError}
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
            <FormGroup style={{ marginBottom: 10 }}>
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

const mapStateToProps = (state: IState) => {
  const { pokemons, currentPokemon, currentForm } = state.pokemon;
  const { palettes } = pokemons[currentPokemon][currentForm];

  return { palettes };
};

export default connect(mapStateToProps, {
  searchPokemonByName
})(
  reduxForm<ISearchFormValues, INavbarProps>({
    form: "searchPokemon"
  })(Searchbar)
);
