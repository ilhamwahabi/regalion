import React from "react";
import { Row, Col } from "reactstrap";
import { connect } from "react-redux";

import { changeSelectedForm } from "../../actions";

import { IPokemon } from "../../types";

interface ISpriteProps {
  pokemon: IPokemon[];
  selectedForm: number;
  changeSelectedForm(index: number): void;
}

const Sprite = ({
  pokemon,
  selectedForm,
  changeSelectedForm
}: ISpriteProps) => {
  const { name, number, sprite } = pokemon[selectedForm];

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
            index !== selectedForm && (
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
                onClick={() => changeSelectedForm(index)}
              />
            )
        )}
      </div>
    </Col>
  );
};

const mapStateToProps = (state: any) => {
  const { pokemon, selectedForm } = state.pokemon;

  return {
    pokemon,
    selectedForm
  };
};

export default connect(
  mapStateToProps,
  { changeSelectedForm }
)(Sprite);
