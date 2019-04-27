import React from "react";
import { Container, Row } from "reactstrap";

import Sprite from "./Pokedex/Sprite";
import Description from "./Pokedex/Description";
import Direction from "./Pokedex/Direction";

const Pokedex = () => {
  return (
    <Container fluid={true}>
      <Row>
        <Direction type="previous" />
        <Sprite />
        <Description />
        <Direction type="next" />
      </Row>
    </Container>
  );
};

export default Pokedex;
