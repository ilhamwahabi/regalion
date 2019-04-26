import React from "react";
import { Container, Row, Col } from "reactstrap";

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
    <Container>
      <Row className="text-center" style={{ marginBottom: "20px" }}>
        <Col>
          <div className="d-flex justify-content-between align-items-end">
            <span
              style={{ paddingBottom: "5px", borderBottom: "1px solid white" }}
              className="display-1 text-white"
            >
              {name}
            </span>
            <span className="display-3">#{number}</span>
          </div>
        </Col>
      </Row>
      <Row className="text-center">
        <Col>
          <img style={{ maxHeight: "360px" }} src={sprite} alt={name} />
        </Col>
      </Row>
    </Container>
  );
};

export default Sprite;
