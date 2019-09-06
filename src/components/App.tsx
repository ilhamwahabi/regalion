import React from "react";
import { connect } from "react-redux";

import Footer from "./Footer";
import Searchbar from "./Searchbar";
import Content from "./Content";
import Loading from "./Loading";

import { IPalettes } from "../types";

interface IAppProps {
  palettes: IPalettes;
}

const App = (props: IAppProps) => {
  const { palettes } = props;

  return (
    <div
      className="d-flex flex-column justify-content-between"
      style={{
        backgroundColor: `rgb(${palettes.darkMuted})`,
        height: "100vh",
        transition: "background-color 1s",
        overflow: "hidden"
      }}
    >
      <Searchbar />
      <Content />
      <Footer />
      <Loading />
    </div>
  );
};

const mapStateToProps = (state: any) => {
  const { pokemons, currentPokemon, currentForm } = state.pokemon;

  return { palettes: pokemons[currentPokemon][currentForm].palettes };
};

export default connect(mapStateToProps)(App);
