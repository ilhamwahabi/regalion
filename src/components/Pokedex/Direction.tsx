import React, { useState } from "react";
import { Col } from "reactstrap";

const Direction = ({
  sprite,
  name,
  number,
  type
}: {
  sprite: string;
  name: string;
  number: string;
  type: "previous" | "next";
}) => {
  const [opacity, setOpacity] = useState(0.5);

  return (
    <Col
      md="12"
      lg="1"
      className="d-flex flex-column justify-content-center text-center"
    >
      <div
        style={{ opacity, transition: ".5s opacity", cursor: "pointer" }}
        onMouseOver={e => setOpacity(1)}
        onMouseOut={e => setOpacity(0.5)}
      >
        <img src={sprite} alt={name} />
        <h5 className="text-white mb-1 mt-2">{name}</h5>
        <h6 className="text-white">#{number}</h6>
      </div>
    </Col>
  );
};

export default Direction;
