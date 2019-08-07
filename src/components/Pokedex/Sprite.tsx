import React from "react";
import { Row, Col } from "reactstrap";
import { connect } from "react-redux";

const Sprite = ({
  name,
  number,
  sprite
}: {
  name: string;
  number: string;
  sprite: string;
}) => {
  return (
    <Col md="12" lg="4" className="d-flex flex-column justify-content-between">
      <Row className="text-center">
        <Col>
          <div className="d-flex justify-content-between align-items-end flex-wrap mb-4">
            <p
              style={{
                paddingBottom: "5px",
                borderBottom: "2.5px solid white"
              }}
              className="display-1 text-white"
            >
              {name}
            </p>
            <p
              style={{ marginLeft: "15px", flex: 1, textAlign: "right" }}
              className="display-3"
            >
              #{number}
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="d-flex justify-content-center align-items-center">
            <img style={{ maxWidth: "80%" }} src={sprite} alt={name} />
          </div>
        </Col>
      </Row>
    </Col>
  );
};

const mapStateToProps = (state: any) => {
  const { pokemon, selectedForm } = state.pokemon;

  return {
    name: pokemon[selectedForm].name,
    number: pokemon[selectedForm].number,
    sprite: pokemon[selectedForm].sprite
  };
};

export default connect(mapStateToProps)(Sprite);
