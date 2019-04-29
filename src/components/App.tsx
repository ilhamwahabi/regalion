import React, { Component } from "react";

import Footer from "./Footer";
import Navbar from "./Navbar";
import Pokedex from "./Pokedex";
import Spinner from "./Loading/Spinner";

class App extends Component {
  render() {
    return (
      <div
        className="d-flex flex-column justify-content-between"
        style={{ height: "100vh" }}
      >
        <Navbar />
        <Pokedex />
        <Footer />
        <Spinner />
      </div>
    );
  }
}

export default App;
