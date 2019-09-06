import React, { useState } from "react";
import { Col } from "reactstrap";
import { connect } from "react-redux";

import { changePokemon } from "../../actions";

interface IDirectionProps {
  sprite: string;
  name: string;
  number: string;
  changePokemon: Function;
}

const Direction = (props: IDirectionProps) => {
  const { sprite, name, number, changePokemon } = props;

  const [opacity, setOpacity] = useState(0.5);

  return (
    <Col
      md="12"
      lg="2"
      className="d-flex flex-column justify-content-center text-center"
    >
      {name && (
        <div
          style={{ opacity, transition: ".25s opacity", cursor: "pointer" }}
          onMouseOver={e => setOpacity(1)}
          onMouseOut={e => setOpacity(0.5)}
          onClick={() => changePokemon(number)}
        >
          <img width="75" src={sprite} alt={name} />
          <h5 className="text-white mt-2 mb-1">{name}</h5>
          <h4 className="text-white mt-1 display-5">#{number}</h4>
        </div>
      )}
    </Col>
  );
};

const mapStateToProps = (state: any, { type }: any) => {
  const { pokemons, currentPokemon, currentForm } = state.pokemon;

  return {
    sprite: pokemons[currentPokemon][currentForm][type].sprite,
    name: pokemons[currentPokemon][currentForm][type].name,
    number: pokemons[currentPokemon][currentForm][type].number
  };
};

export default connect(
  mapStateToProps,
  { changePokemon }
)(Direction);
