import React from "react";
import { Row, Col } from "reactstrap";
import { connect } from "react-redux";
import { css } from "emotion";

import { ReactComponent as Arrow } from "../../assets/svg/arrow.svg";
import { changeCurrentForm, changePokemon } from "../../actions";
import { IPokemon } from "../../types";

interface ISpriteProps {
  pokemon: IPokemon[];
  currentForm: number;
  changeCurrentForm(index: number): void;
  changePokemon(index: string): void;
}

const Sprite = (props: ISpriteProps) => {
  const { pokemon, currentForm, changeCurrentForm, changePokemon } = props;
  const { name, number, sprite } = pokemon[currentForm];

  const renderPokemonSprite = () => (
    <Row
      className={css`
        flex: 1;

        @media (max-width: 768px) {
          padding: 60px 0;
        }
      `}
    >
      <Col className="d-flex justify-content-center align-items-center">
        <div className="d-flex justify-content-center align-items-center">
          <img style={{ maxWidth: "80%", zIndex: 1 }} src={sprite} alt={name} />
        </div>
      </Col>
    </Row>
  );

  const renderPokemonName = () => (
    <p
      className={`${css`
        padding-bottom: 5px;
        top: 0;
        left: 10px;
        font-size: 2.75rem;
        font-weight: 600;
        line-height: 52px;

        @media (max-width: 768px) {
          font-size: 2.25rem;
          left: 0px;
          right: 0px;
          text-align: center;
        }
      `} position-absolute text-white`}
    >
      {name}
    </p>
  );

  const renderPokemonNumber = () => (
    <p
      className={`${css`
        margin-left: 15px;
        flex: 1;
        text-align: right;
        bottom: 0;
        right: 10px;
        font-size: 2.25rem;
        font-weight: 600;
        line-height: 42px;

        @media (max-width: 768px) {
          font-size: 1.75rem;
          right: 30px;
        }
      `} position-absolute mb-0`}
    >
      #{number}
    </p>
  );

  const renderPokemonAvailableForm = () => (
    <div
      className={`${css`
        bottom: 0px;
        left: 10px;
        max-width: 10%;

        @media (max-width: 768px) {
          left: 20px;
          bottom: 10px;
        }
      `} position-absolute d-flex`}
    >
      {pokemon.map(
        (pokemon, index) =>
          index !== currentForm && (
            <img
              key={index}
              src={pokemon.sprite}
              alt={pokemon.name}
              title={pokemon.name}
              style={{
                margin: "0 10px",
                cursor: "pointer",
                padding: 10,
                boxSizing: "content-box",
                backgroundColor: `rgba(${pokemon.palettes.lightMuted}, 0.25)`,
                borderRadius: "50%"
              }}
              onClick={() => changeCurrentForm(index)}
            />
          )
      )}
    </div>
  );

  const renderPokemonNextAndPreviousArrow = () => {
    const previousNumber = pokemon[currentForm]["previous"].number;
    const nextNumber = pokemon[currentForm]["next"].number;

    const nextPokemonArrow = () =>
      nextNumber && (
        <div
          className="d-flex align-items-center d-md-none position-absolute"
          style={{ top: 0, bottom: 0, right: 20 }}
          onClick={() => changePokemon(nextNumber)}
        >
          <Arrow height="36" width="36" />
        </div>
      );

    const previousPokemonArrow = () =>
      previousNumber && (
        <div
          className="d-flex align-items-center d-md-none position-absolute"
          style={{ top: 0, bottom: 0, left: 20 }}
          onClick={() => changePokemon(previousNumber)}
        >
          <Arrow
            height="36"
            width="36"
            style={{ transform: "rotate(180deg)" }}
          />
        </div>
      );

    return (
      <>
        {previousPokemonArrow()}
        {nextPokemonArrow()}
      </>
    );
  };

  return (
    <Col
      md="12"
      lg="4"
      className="d-flex flex-column justify-content-between mb-2 mb-md-0"
    >
      {renderPokemonSprite()}
      {renderPokemonName()}
      {renderPokemonNumber()}
      {renderPokemonAvailableForm()}
      {renderPokemonNextAndPreviousArrow()}
    </Col>
  );
};

const mapStateToProps = (state: any) => {
  const { pokemons, currentPokemon, currentForm } = state.pokemon;

  return {
    pokemon: pokemons[currentPokemon],
    currentForm
  };
};

export default connect(
  mapStateToProps,
  { changeCurrentForm, changePokemon }
)(Sprite);
