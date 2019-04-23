import React from "react";
import Sprite from "./Pokedex/Sprite";
import getData from "../assets/scripts/getData";
import { Container, Row, Col } from "reactstrap";
import Description from "./Pokedex/Description";

class Pokedex extends React.Component {
  state = getData();

  render() {
    return (
      <Container>
        <Row>
          <Col xs="1" />
          <Col xs="12" md="6">
            <Sprite name={this.state[0].name} sprite={this.state[0].sprite} />
          </Col>
          <Col
            xs="12"
            md="4"
            className="d-flex flex-column justify-content-center"
          >
            <Description
              name={this.state[0].name}
              number={this.state[0].number}
              types={this.state[0].types}
              height={this.state[0].height}
              weight={this.state[0].weight}
              gender={this.state[0].gender}
              abilities={this.state[0].abilities}
              family={this.state[0].family}
            />
          </Col>
          <Col xs="1" />
        </Row>
      </Container>
    );
  }
}

export default Pokedex;
