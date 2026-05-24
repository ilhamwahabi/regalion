import React from "react";
import { Row, Col } from "reactstrap";
import { connect } from "react-redux";
import { css } from "@emotion/css";

import { ReactComponent as Arrow } from "../../assets/arrow.svg";
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
          style={{ padding: "10% 10% 0" }}
        >
          <img style={{ maxWidth: "80%", zIndex: 1 }} src={sprite} alt={name} />
        </div>
      </Col>
    </Row>
  );

  const renderPokemonHeader = () => (
    <div className={pokemonHeaderStyle}>
      <p className={pokemonNameStyle}>{name}</p>
      <p className={pokemonNumberStyle}>#{number}</p>
    </div>
  );

  const renderPokemonAvailableForm = () => {
    const alternateForms = pokemon
      .map((form, index) => ({ form, index }))
      .filter(({ form }) => !form.isDefault);

    return (
      <div className={pokemonFormScrollStyle}>
        <div className={pokemonFormListStyle}>
          {alternateForms.map(({ form, index }) => (
            <div key={index} className={formItemStyle}>
              <img
                src={form.sprite}
                alt={form.name}
                title={form.name}
                loading="lazy"
                className={css`
                  width: 43px;
                  height: 43px;
                  object-fit: contain;
                  padding: 10px;
                  box-sizing: content-box;
                  background-color: rgba(${form.palettes.lightMuted}, 0.25);
                  border-radius: 50%;
                  border: 1.5px solid transparent;
                  transition: border 0.5s;

                  &:hover {
                    border: 1.5px solid rgb(${form.palettes.lightMuted});
                  }
                `}
                onClick={() => changeCurrentForm(index)}
              />
            </div>
          ))}
        </div>
      </div>
    );
  };

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
      {renderPokemonHeader()}
      {renderPokemonSprite()}
      {pokemon.some(form => !form.isDefault) && renderPokemonAvailableForm()}
      {renderPokemonNextAndPreviousArrow()}
    </Col>
  );
};

const containerStyle = css`
  display: flex;
  flex-direction: column;
  position: relative;
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
    padding: 48px 0 16px;
  }
`;

const pokemonHeaderStyle = css`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  display: flex;
  align-items: baseline;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem 1rem;
  text-align: center;
`;

const pokemonNameStyle = css`
  margin: 0;
  padding-bottom: 5px;
  font-size: 2.75rem;
  font-weight: 600;
  line-height: 52px;
  color: white;

  @media (max-width: 1024px) {
    font-size: 2.25rem;
  }
`;

const pokemonNumberStyle = css`
  margin: 0;
  font-size: 2.25rem;
  font-weight: 600;
  line-height: 42px;
  color: rgba(255, 255, 255, 0.65);

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 2.5rem;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.75rem;
  }
`;

const formItemStyle = css`
  flex-shrink: 0;
  cursor: pointer;
`;

const pokemonFormScrollStyle = css`
  width: 100%;
  margin-top: 0.5rem;
  padding-bottom: 8px;
  overflow-x: auto;
  overflow-y: visible;
  scroll-padding-inline: 12px;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.35) transparent;

  &::-webkit-scrollbar {
    height: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.35);
    border-radius: 2px;
  }
`;

const pokemonFormListStyle = css`
  display: flex;
  flex-wrap: nowrap;
  gap: 8px;
  width: max-content;
  margin-inline: auto;
  padding-inline: 12px;
`;

const mapStateToProps = (state: IState) => {
  const { pokemons, currentPokemon, currentForm } = state.pokemon;
  const pokemon = pokemons[currentPokemon];

  return { pokemon, currentForm };
};

export default connect(mapStateToProps, { changeCurrentForm, changePokemon })(
  Sprite,
);
