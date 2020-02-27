import React from "react";
import { css } from "emotion";
import { connect } from "react-redux";

interface IBackdropProps {
  loading: boolean;
}

const Backdrop = (props: IBackdropProps) => {
  const { loading } = props;

  if (!loading) return null;
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

const mapStateToProps = ({ loading }: { loading: boolean }) => ({ loading });

export default connect(mapStateToProps)(Backdrop);
