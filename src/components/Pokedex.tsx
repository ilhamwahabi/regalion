import React from "react";
import Sprite from "./Pokedex/Sprite";
import getData from "../assets/scripts/getData";
import { Container, Row, Col } from "reactstrap";

class Pokedex extends React.Component {
  state = getData();

  render() {
    return (
      <Container>
        <Row>
          <Col xs="12" md="6">
            <Sprite name={this.state[0].name} sprite={this.state[0].sprite} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Pokedex;
