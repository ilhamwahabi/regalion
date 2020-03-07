import React from "react";
import { Row, Col } from "reactstrap";
import { connect } from "react-redux";
import { css } from "emotion";

import { ReactComponent as Arrow } from "../../assets/svg/arrow.svg";
import { changeCurrentForm, changePokemon } from "../../actions";
import { IPokemon } from "../../types";
import { IState } from "../../reducers";

interface ISpriteProps {
  pokemon: IPokemon[];
  currentForm: number;
  changeCurrentForm: (index: number) => void;
  changePokemon: (index: string) => void;
}

const Sprite = (props: ISpriteProps) => {
  const { pokemon, currentForm, changeCurrentForm, changePokemon } = props;
  const { name, number, sprite } = pokemon[currentForm];

  const renderPokemonSprite = () => (
    <Row className={pokemonSpriteStyle}>
      <Col className="d-flex justify-content-center align-items-center">
        <div className="d-flex justify-content-center align-items-center">
          <img style={{ maxWidth: "80%", zIndex: 1 }} src={sprite} alt={name} />
        </div>
      </Col>
    </Row>
  );

  const renderPokemonName = () => <p className={pokemonNameStyle}>{name}</p>;

  const renderPokemonNumber = () => (
    <p className={pokemonNumberStyle}>#{number}</p>
  );

  const renderPokemonAvailableForm = () => (
    <div className={pokemonFormStyle}>
      {pokemon.map(
        (form, index) =>
          index !== currentForm && (
            <div
              key={index}
              style={{
                cursor: "pointer",
                marginRight: 15,
                marginLeft: `${
                  (index === 1 && currentForm === 0) || index === 0 ? 0 : 15
                }px`
              }}
            >
              <img
                src={form.sprite}
                alt={form.name}
                title={form.name}
                style={{
                  margin: "0 10px",
                  padding: 10,
                  boxSizing: "content-box",
                  backgroundColor: `rgba(${form.palettes.lightMuted}, 0.25)`,
                  borderRadius: "50%"
                }}
                onClick={() => changeCurrentForm(index)}
              />
            </div>
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
          style={{ top: "50%", transform: "translateY(-50%)", right: 20 }}
          onClick={() => changePokemon(nextNumber)}
        >
          <Arrow height="36" width="36" />
        </div>
      );

    const previousPokemonArrow = () =>
      previousNumber && (
        <div
          className="d-flex align-items-center d-md-none position-absolute"
          style={{ top: "50%", transform: "translateY(-50%)", left: 20 }}
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
    <Col md="12" lg="4" className={containerStyle}>
      {renderPokemonSprite()}
      {renderPokemonName()}
      {renderPokemonNumber()}
      {renderPokemonAvailableForm()}
      {renderPokemonNextAndPreviousArrow()}
    </Col>
  );
};

const containerStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 0.5rem;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const pokemonSpriteStyle = css`
  flex: 1;

  @media (max-width: 768px) {
    padding: 60px 0;
  }
`;

const pokemonNameStyle = css`
  padding-bottom: 5px;
  top: 0;
  left: 10px;
  font-size: 2.75rem;
  font-weight: 600;
  line-height: 52px;
  position: absolute;
  color: white;

  @media (max-width: 768px) {
    font-size: 2.25rem;
    left: 0px;
    right: 0px;
    text-align: center;
  }
`;

const pokemonNumberStyle = css`
  margin-left: 15px;
  flex: 1;
  text-align: right;
  bottom: 0;
  right: 10px;
  font-size: 2.25rem;
  font-weight: 600;
  line-height: 42px;
  position: absolute;
  margin-bottom: 0;

  @media (max-width: 768px) {
    font-size: 1.75rem;
    right: 30px;
  }
`;

const pokemonFormStyle = css`
  bottom: 0px;
  left: 10px;
  max-width: 10%;
  position: absolute;
  display: flex;
  z-index: 2;

  @media (max-width: 768px) {
    left: 20px;
    bottom: 10px;
  }
`;

const mapStateToProps = (state: IState) => {
  const { pokemons, currentPokemon, currentForm } = state.pokemon;
  const pokemon = pokemons[currentPokemon];

  return { pokemon, currentForm };
};

export default connect(mapStateToProps, { changeCurrentForm, changePokemon })(
  Sprite
);
