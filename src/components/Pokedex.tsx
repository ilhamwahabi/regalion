import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";

import Sprite from "./Pokedex/Sprite";
import getData from "../assets/scripts/getData";
import Description from "./Pokedex/Description";

const Pokedex = () => {
  const [data, setData] = useState(getData());
  const [selectedPokemon, setSelectedPokemon] = useState(0);

  return (
    <Container>
      <Row>
        <Col md="12" lg="1" />
        <Col md="12" lg="5">
          <Sprite
            name={data[selectedPokemon].name}
            number={data[selectedPokemon].number}
            sprite={data[selectedPokemon].sprite}
          />
        </Col>
        <Col
          md="12"
          lg="5"
          className="d-flex flex-column justify-content-center"
        >
          <Description
            types={data[selectedPokemon].types}
            height={data[selectedPokemon].height}
            weight={data[selectedPokemon].weight}
            abilities={data[selectedPokemon].abilities}
            family={data[selectedPokemon].family}
          />
        </Col>
        <Col md="12" lg="1" />
      </Row>
    </Container>
  );
};

export default Pokedex;
