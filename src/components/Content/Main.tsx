import React from "react";
import { Row, Col } from "reactstrap";
import { connect } from "react-redux";
import { css } from "emotion";

import { ReactComponent as Arrow } from "../../assets/svg/arrow.svg";
import { changeCurrentForm, changePokemon } from "../../actions";
import { IPokemon } from "../../types";
import { IState } from "../../reducers";

interface INavigationArrow {
  containerStyle?: React.CSSProperties;
  arrowStyle?: React.CSSProperties;
  actionClick: () => void;
}

const NavigationArrow = (props: INavigationArrow) => {
  const { containerStyle, arrowStyle, actionClick } = props;

  return (
    <div
      className="d-flex align-items-center d-lg-none position-absolute"
      style={{ top: "50%", transform: "translateY(-50%)", ...containerStyle }}
      onClick={actionClick}
    >
      <Arrow height="36" width="36" style={{ ...arrowStyle }} />
    </div>
  );
};

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
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ padding: "10%" }}
        >
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
    const previousIndex = pokemon[currentForm]["previous"].number;
    const nextIndex = pokemon[currentForm]["next"].number;

    const previousPokemonArrow = () =>
      previousIndex && (
        <NavigationArrow
          containerStyle={{ left: 20 }}
          arrowStyle={{ transform: "rotate(180deg)" }}
          actionClick={() => changePokemon(previousIndex)}
        />
      );

    const nextPokemonArrow = () =>
      nextIndex && (
        <NavigationArrow
          containerStyle={{ right: 20 }}
          actionClick={() => changePokemon(nextIndex)}
        />
      );

    return (
      <>
        {previousPokemonArrow()}
        {nextPokemonArrow()}
      </>
    );
  };

  return (
    <Col md="10" lg="4" className={containerStyle}>
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
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 481px) and (max-width: 767px) {
    max-width: 500px;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    margin-bottom: 1rem;
    max-width: 600px;
    min-height: 560px;
  }

  @media (min-width: 1025px) {
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

  @media (max-width: 1024px) {
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

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 2.5rem;
    bottom: 5%;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    font-size: 2rem;
  }

  @media (max-width: 767px) {
    right: 10%;
    bottom: 5%;
  }

  @media (max-width: 480px) {
    font-size: 1.75rem;
  }

  @media (max-width: 320px) {
    right: 7.5%;
  }
`;

const pokemonFormStyle = css`
  bottom: 0px;
  left: 10px;
  max-width: 10%;
  position: absolute;
  display: flex;
  z-index: 2;

  @media (min-width: 768px) and (max-width: 1024px) {
    bottom: 5%;
  }

  @media (max-width: 767px) {
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
