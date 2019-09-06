import React from "react";
import { Row, Col } from "reactstrap";
import { connect } from "react-redux";

import { changeCurrentForm } from "../../actions";

import { IPokemon } from "../../types";

interface ISpriteProps {
  pokemon: IPokemon[];
  currentForm: number;
  changeCurrentForm(index: number): void;
}

const Sprite = (props: ISpriteProps) => {
  const { pokemon, currentForm, changeCurrentForm } = props;

  const { name, number, sprite } = pokemon[currentForm];

  return (
    <Col md="12" lg="4" className="d-flex flex-column justify-content-between">
      <Row className="text-center">
        <Col>
          <div className="d-flex justify-content-between align-items-end flex-wrap mb-4">
            <p
              style={{
                paddingBottom: "5px",
                borderBottom: "2.5px solid white"
              }}
              className="display-1 text-white"
            >
              {name}
            </p>
            <p
              style={{ marginLeft: "15px", flex: 1, textAlign: "right" }}
              className="display-3"
            >
              #{number}
            </p>
          </div>
        </Col>
      </Row>
      <Row style={{ flex: 1 }}>
        <Col className="d-flex justify-content-center align-items-center">
          <div className="d-flex justify-content-center align-items-center">
            <img style={{ maxWidth: "80%" }} src={sprite} alt={name} />
          </div>
        </Col>
      </Row>
      <div
        className="position-absolute d-flex"
        style={{ bottom: 0, left: 10, maxWidth: "10%" }}
      >
        {pokemon.map(
          (pokemon, index) =>
            index !== currentForm && (
              <img
                key={index}
                src={pokemon.sprite}
                alt={pokemon.name}
                title={pokemon.name}
                style={{
                  margin: "0 10px",
                  cursor: "pointer",
                  padding: 10,
                  boxSizing: "content-box",
                  backgroundColor: `rgba(${pokemon.palettes.lightMuted}, 0.25)`,
                  borderRadius: "50%"
                }}
                onClick={() => changeCurrentForm(index)}
              />
            )
        )}
      </div>
    </Col>
  );
};

const mapStateToProps = (state: any) => {
  const { pokemons, currentPokemon, currentForm } = state.pokemon;

  return {
    pokemon: pokemons[currentPokemon],
    currentForm
  };
};

export default connect(
  mapStateToProps,
  { changeCurrentForm }
)(Sprite);
