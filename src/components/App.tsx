import React from "react";
import { connect } from "react-redux";
import { css } from "emotion";

import Footer from "./Footer";
import Searchbar from "./Searchbar";
import Content from "./Content";
import Loading from "./Loading";

import { IPalettes } from "../types";
import { IState } from "../reducers";

interface IAppProps {
  palettes: IPalettes;
}

const App = (props: IAppProps) => {
  const { palettes } = props;

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
  const { palettes } = pokemons[currentPokemon][currentForm];

  return { palettes };
};

export default connect(mapStateToProps)(App);
