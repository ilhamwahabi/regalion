import React from "react";
import { Row, Col, Button } from "reactstrap";
import { connect } from "react-redux";
import { css } from "emotion";

import { changePokemon } from "../../actions";
import { IState } from "../../reducers";

interface IDescriptionProps {
  name: string;
  types: string[];
  height: string;
  weight: string;
  abilities: { normal: string[]; hidden: string[] };
  family: {
    id: number;
    evolutionStage: number;
    evolutionLine: { name: string; number: string; sprite: string }[];
  };
  changePokemon: Function;
}

const Description = (props: IDescriptionProps) => {
  const {
    name,
    types,
    height,
    weight,
    abilities,
    family,
    changePokemon
  } = props;

  const renderTypes = () => {
    return (
      <Row className="mb-2 mb-md-3">
        {types.map((type, index) => (
          <Col key={index} className="text-center">
            <Button color={type.toLowerCase()}>{type}</Button>
          </Col>
        ))}
      </Row>
    );
  };

  const renderHeightWeight = () => {
    return (
      <Row className="text-center my-2 my-md-3">
        <Col>
          <h4 className="mb-0 mb-md-3">Height</h4>
          <div className={heightWeightValueStyle}>{height}</div>
        </Col>
        <Col>
          <h4 className="mb-0 mb-md-3">Weight</h4>
          <div className={heightWeightValueStyle}>{weight}</div>
        </Col>
      </Row>
    );
  };

  const renderAbilities = () => {
    return (
      <>
        <Row className="mt-2 mt-md-3">
          <h4 className="m-auto">Abilities</h4>
        </Row>
        <Row className="text-center mt-2 mb-3">
          <Col>
            <h5 className={abilityLabelStyle}>Normal</h5>
            {abilities.normal.map((ability, index) => (
              <div key={index} className={abilityValueStyle}>
                {ability}
              </div>
            ))}
            {abilities.normal.length === 0 && (
              <div className="display-4 text-white">-</div>
            )}
          </Col>
          <Col>
            <h5 className={abilityLabelStyle}>Hidden</h5>
            {abilities.hidden.map((ability, index) => (
              <div key={index} className={abilityValueStyle}>
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

  const renderEvolutionLine = (pokemonName: string) => {
    return (
      <>
        <Row className="mt-2 mt-md-3">
          <h4 className="m-auto">Evolution Line</h4>
        </Row>
        <Row className="text-center mt-3 mb-4 mb-sm-0">
          {family.evolutionLine.length === 1 ? (
            <div className="h4 text-white mt-1" style={{ margin: "0 auto" }}>
              This Pokémon has no evolution line
            </div>
          ) : (
            family.evolutionLine.map(({ name, number: i, sprite }, index) => (
              <Col
                onClick={() => pokemonName !== name && changePokemon(i)}
                style={{ cursor: "pointer" }}
                key={index}
              >
                <img width="60" src={sprite} alt={name} />
                <h6 className="mt-3 mb-0 text-white">{name}</h6>
              </Col>
            ))
          )}
        </Row>
      </>
    );
  };

  return (
    <Col md="12" lg="4" className={containerStyle}>
      {renderTypes()}
      {renderHeightWeight()}
      {renderAbilities()}
      {renderEvolutionLine(name)}
    </Col>
  );
};

const containerStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const heightWeightValueStyle = css`
  font-size: 2.25rem;
  font-weight: 600;
  line-height: 1.2;
  color: white;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

const abilityLabelStyle = css`
  @media (max-width: 761px) {
    margin-bottom: 0;
  }
`;

const abilityValueStyle = css`
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.2;
  color: white;
  margin-bottom: 0.25rem;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const mapStateToProps = (state: IState) => {
  const { pokemons, currentPokemon, currentForm } = state.pokemon;
  const { name, types, height, weight, abilities, family } = pokemons[
    currentPokemon
  ][currentForm];

  return { name, types, height, weight, abilities, family };
};

export default connect(mapStateToProps, { changePokemon })(Description);
