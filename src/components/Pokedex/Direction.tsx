import React, { useState } from "react";
import { Col } from "reactstrap";
import { connect } from "react-redux";

import { changePokemon } from "../../actions";

const Direction = ({
  sprite,
  name,
  number,
  changePokemon
}: {
  sprite: string;
  name: string;
  number: string;
  changePokemon: Function;
}) => {
  const [opacity, setOpacity] = useState(0.5);

  return (
    <Col
      md="12"
      lg="2"
      className="d-flex flex-column justify-content-center text-center"
      onClick={() => changePokemon(name)}
    >
      <div
        style={{ opacity, transition: ".25s opacity", cursor: "pointer" }}
        onMouseOver={e => setOpacity(1)}
        onMouseOut={e => setOpacity(0.5)}
      >
        <img width="75" src={sprite} alt={name} />
        <h5 className="text-white mt-2 mb-1">{name}</h5>
        <h4 className="text-white mt-1 display-5">#{number}</h4>
      </div>
    </Col>
  );
};

const mapStateToProps = (state: any, { type }: any) => {
  const { pokemon, selectedForm } = state.pokemon;

  return {
    sprite: pokemon[selectedForm][type].sprite,
    name: pokemon[selectedForm][type].name,
    number: pokemon[selectedForm][type].number
  };
};

export default connect(
  mapStateToProps,
  { changePokemon }
)(Direction);
