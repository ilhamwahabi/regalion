import React from "react";
import { Row, Col } from "reactstrap";

const Description = ({
  name,
  number,
  types,
  height,
  weight,
  gender,
  abilities,
  family
}: {
  name: string;
  number: string;
  types: string[];
  height: string;
  weight: string;
  gender: number[];
  abilities: { normal: string[]; hidden: string[] };
  family: { id: number; evolutionStage: number; "evolution-line": string[] };
}) => {
  return (
    <div>
      <Row>
        <Col xs="9">{name}</Col>
        <Col xs="3">{number}</Col>
      </Row>
      <Row>
        {types.map((type, index) => (
          <Col key={index}>{type}</Col>
        ))}
      </Row>
      <Row>
        <Col>{height}</Col>
        <Col>{weight}</Col>
      </Row>
      <Row>
        {gender.map((type, index) => (
          <Col key={index}>{type}</Col>
        ))}
      </Row>
      <Row>
        <Col>
          {abilities.normal.map((ability, index) => (
            <div key={index}>{ability}</div>
          ))}
        </Col>
        <Col>
          {abilities.hidden.map((ability, index) => (
            <div key={index}>{ability}</div>
          ))}
        </Col>
      </Row>
      <Row>
        {family["evolution-line"].map((type, index) => (
          <Col key={index}>{type}</Col>
        ))}
      </Row>
    </div>
  );
};

export default Description;
