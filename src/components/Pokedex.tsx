import React from "react";
import { Container, Row, Col } from "reactstrap";
import { connect } from "react-redux";

import Sprite from "./Pokedex/Sprite";
import Description from "./Pokedex/Description";
import Direction from "./Pokedex/Direction";

const Pokedex = (props: any) => {
  const { pokemon, selectedForm } = props.pokemon;

  return (
    <Container fluid={true}>
      <Row>
        <Direction
          sprite={pokemon[selectedForm].previous.sprite}
          name={pokemon[selectedForm].previous.name}
          number={pokemon[selectedForm].previous.number}
        />
        <Col md="12" lg="4">
          <Sprite
            name={pokemon[selectedForm].name}
            number={pokemon[selectedForm].number}
            sprite={pokemon[selectedForm].sprite}
          />
        </Col>
        <Col
          md="12"
          lg="4"
          className="d-flex flex-column justify-content-center"
        >
          <Description
            types={pokemon[selectedForm].types}
            height={pokemon[selectedForm].height}
            weight={pokemon[selectedForm].weight}
            abilities={pokemon[selectedForm].abilities}
            family={pokemon[selectedForm].family}
          />
        </Col>
        <Direction
          sprite={pokemon[selectedForm].next.sprite}
          name={pokemon[selectedForm].next.name}
          number={pokemon[selectedForm].next.number}
        />
      </Row>
    </Container>
  );
};

const mapStateToProps = (state: any) => {
  return { pokemon: state.pokemon };
};

export default connect(mapStateToProps)(Pokedex);
