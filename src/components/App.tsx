import React, { Component } from "react";
import { connect } from "react-redux";

import Footer from "./Footer";
import Navbar from "./Navbar";
import Pokedex from "./Pokedex";

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
      </div>
    );
  }
}

const mapStateToProps = ({ loading }: { loading: boolean }) => {
  return { loading };
};

export default connect(mapStateToProps)(App);
