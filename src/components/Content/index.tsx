import React from "react";
import { Container, Row } from "reactstrap";

import Main from "./Main";
import Description from "./Description";
import Preview from "./Preview";

const Pokedex = () => {
  return (
    <Container fluid={true}>
      <Row>
        <Preview type="previous" />
        <Main />
        <Description />
        <Preview type="next" />
      </Row>
    </Container>
  );
};

export default Pokedex;
