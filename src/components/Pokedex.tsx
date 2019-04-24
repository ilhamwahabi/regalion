import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";

import Sprite from "./Pokedex/Sprite";
import getData from "../assets/scripts/getData";
import Description from "./Pokedex/Description";
import Direction from "./Pokedex/Direction";

const Pokedex = () => {
  const [data, setData] = useState(getData());
  const [selectedPokemon, setSelectedPokemon] = useState(0);

  return (
    <Container>
      <Row>
        <Direction
          sprite={data[selectedPokemon].previous.sprite}
          name={data[selectedPokemon].previous.name}
          number={data[selectedPokemon].previous.number}
          type="previous"
        />
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
        <Direction
          sprite={data[selectedPokemon].next.sprite}
          name={data[selectedPokemon].next.name}
          number={data[selectedPokemon].next.number}
          type="next"
        />
      </Row>
    </Container>
  );
};

export default Pokedex;
