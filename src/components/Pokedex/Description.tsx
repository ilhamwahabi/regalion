import React from "react";
import { Row, Col, Button } from "reactstrap";
import { connect } from "react-redux";

import { changePokemon } from "../../actions";

const Description = ({
  types,
  height,
  weight,
  abilities,
  family,
  changePokemon
}: {
  types: string[];
  height: string;
  weight: string;
  abilities: { normal: string[]; hidden: string[] };
  family: {
    id: number;
    evolutionStage: number;
    evolutionLine: { name: string; sprite: string }[];
  };
  changePokemon: Function;
}) => {
  const renderAbilities = () => {
    return (
      <>
        <Row className="mt-3">
          <h4 className="m-auto">Abilities</h4>
        </Row>
        <Row className="text-center mt-2 mb-3">
          <Col>
            <h5>Normal</h5>
            {abilities.normal.map((ability, index) => (
              <div className="display-4 text-white mb-1" key={index}>
                {ability}
              </div>
            ))}
            {abilities.normal.length === 0 && (
              <div className="display-4 text-white">-</div>
            )}
          </Col>
          <Col>
            <h5>Hidden</h5>
            {abilities.hidden.map((ability, index) => (
              <div className="display-4 text-white mb-1" key={index}>
                {ability}
              </div>
            ))}
            {abilities.hidden.length === 0 && (
              <div className="display-4 text-white">-</div>
            )}
          </Col>
        </Row>
      </>
    );
  };

  const renderEvolutionLine = () => {
    return (
      <>
        <Row className="mt-3">
          <h4 className="m-auto">Evolution Line</h4>
        </Row>
        <Row className="text-center m-3">
          {family.evolutionLine.length === 1 ? (
            <div className="h4 text-white mt-1" style={{ margin: "0 auto" }}>
              This Pokémon has no evolution line
            </div>
          ) : (
            family.evolutionLine.map(({ name, sprite }, index) => (
              <Col
                onClick={() => changePokemon(name)}
                style={{ cursor: "pointer" }}
                key={index}
              >
                <img width="60" src={sprite} alt={name} />
                <h6 className="mt-3 text-white">{name}</h6>
              </Col>
            ))
          )}
        </Row>
      </>
    );
  };

  return (
    <Col md="12" lg="4" className="d-flex flex-column justify-content-center">
      <Row className="mb-3">
        {types.map((type, index) => (
          <Col key={index} className="text-center">
            <Button color={type.toLowerCase()}>{type}</Button>
          </Col>
        ))}
      </Row>
      <Row className="text-center my-3">
        <Col>
          <h4>Height</h4>
          <div className="display-3 text-white">{height}</div>
        </Col>
        <Col>
          <h4>Weight</h4>
          <div className="display-3 text-white">{weight}</div>
        </Col>
      </Row>
      {renderAbilities()}
      {renderEvolutionLine()}
    </Col>
  );
};

const mapStateToProps = (state: any) => {
  const { pokemon, selectedForm } = state.pokemon;

  return {
    types: pokemon[selectedForm].types,
    height: pokemon[selectedForm].height,
    weight: pokemon[selectedForm].weight,
    abilities: pokemon[selectedForm].abilities,
    family: pokemon[selectedForm].family
  };
};

export default connect(
  mapStateToProps,
  { changePokemon }
)(Description);
