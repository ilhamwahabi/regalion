import React from "react";
import { Row, Col, Button } from "reactstrap";

const Description = ({
  types,
  height,
  weight,
  abilities,
  family
}: {
  types: string[];
  height: string;
  weight: string;
  abilities: { normal: string[]; hidden: string[] };
  family: {
    id: number;
    evolutionStage: number;
    "evolution-line": { name: string; sprite: string }[];
  };
}) => {
  return (
    <div>
      <Row className="mb-3">
        {types.map((type, index) => (
          <Col key={index} className="text-center">
            <Button color="info">{type}</Button>
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
      <Row className="mt-3">
        <h4 className="m-auto">Abilities</h4>
      </Row>
      <Row className="text-center mt-2 mb-3">
        <Col>
          <h5>Normal</h5>
          {abilities.normal.map((ability, index) => (
            <div className="display-4 text-white" key={index}>
              {ability}
            </div>
          ))}
        </Col>
        <Col>
          <h5>Hidden</h5>
          {abilities.hidden.map((ability, index) => (
            <div className="display-4 text-white" key={index}>
              {ability}
            </div>
          ))}
        </Col>
      </Row>
      <Row className="mt-3">
        <h4 className="m-auto">Evolution Line</h4>
      </Row>
      <Row className="text-center m-3">
        {family["evolution-line"].map(({ name, sprite }, index) => (
          <Col style={{ cursor: "pointer" }} key={index}>
            <img width="60" src={sprite} alt={name} />
            <h6 className="mt-3 text-white">{name}</h6>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Description;
