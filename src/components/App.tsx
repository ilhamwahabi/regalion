import React from "react";
import { connect } from "react-redux";

import Footer from "./Footer";
import Navbar from "./Navbar";
import Pokedex from "./Pokedex";

import { IPalettes } from "../types";
import LoadingScreen from "./LoadingScreen";

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
      <Navbar />
      <Pokedex />
      <Footer />
      <LoadingScreen />
    </div>
  );
};

const mapStateToProps = (state: any) => {
  const { pokemon, selectedForm } = state.pokemon;

  return { palettes: pokemon[selectedForm].palettes };
};

export default connect(mapStateToProps)(App);
