import React from "react";
import { css } from "emotion";

const Backdrop = () => {
  return <div className={backdropStyle} />;
};

const backdropStyle = css`
  background-color: #212121;
  opacity: 0.5;
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 20;
`;

export default Backdrop;
