import React, { useEffect } from "react";
import { connect } from "react-redux";
import { css } from "@emotion/css";

import Footer from "./Footer";
import Searchbar from "./Searchbar";
import Content from "./Content";
import Loading from "./Loading";

import { initRandomPokemon } from "../actions";
import { IPalettes } from "../types";
import { IState } from "../reducers";
import { getDefaultPalette } from "../utils/pokemonFormat";

interface IAppProps {
  palettes: IPalettes;
  initialized: boolean;
  initRandomPokemon: () => void;
}

const App = (props: IAppProps) => {
  const { palettes, initialized, initRandomPokemon } = props;

  useEffect(() => {
    if (!initialized) {
      initRandomPokemon();
    }
  }, [initialized, initRandomPokemon]);

  if (!initialized) {
    const defaultPalette = getDefaultPalette();

    return (
      <div
        className={appStyle}
        style={{ backgroundColor: `rgb(${defaultPalette.darkMuted})` }}
      >
        <Loading />
      </div>
    );
  }

  return (
    <div
      className={appStyle}
      style={{ backgroundColor: `rgb(${palettes.darkMuted})` }}
    >
      <Searchbar />
      <Content />
      <Footer />
      <Loading />
    </div>
  );
};

const appStyle = css`
  height: 100vh;
  transition: background-color 1s;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 1024px) {
    height: initial;
    overflow: visible;
  }
`;

const mapStateToProps = (state: IState) => {
  const { pokemons, currentPokemon, currentForm } = state.pokemon;
  const initialized = Boolean(currentPokemon && pokemons[currentPokemon]);
  const palettes = initialized
    ? pokemons[currentPokemon][currentForm].palettes
    : getDefaultPalette();

  return { palettes, initialized };
};

export default connect(mapStateToProps, { initRandomPokemon })(App);
