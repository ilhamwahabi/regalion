import React from "react";
import { css } from "emotion";
import { connect } from "react-redux";

interface ISpinnerProps {
  loading: boolean;
}

const Spinner = (props: ISpinnerProps) => {
  const { loading } = props;

  if (!loading) return null;
  return (
    <div className={spinnerStyle}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};

const spinnerStyle = css`
  display: inline-block;
  width: 64px;
  height: 64px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 30;

  div {
    position: absolute;
    top: 27px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: #fff;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  div:nth-of-type(1) {
    left: 6px;
    animation: lds-ellipsis1 0.6s infinite;
  }
  div:nth-of-type(2) {
    left: 6px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  div:nth-of-type(3) {
    left: 26px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  div:nth-of-type(4) {
    left: 45px;
    animation: lds-ellipsis3 0.6s infinite;
  }
  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(19px, 0);
    }
  }
`;

const mapStateToProps = ({ loading }: { loading: boolean }) => ({ loading });

export default connect(mapStateToProps)(Spinner);
