import React from "react";
import { css } from "@emotion/core";
import { PulseLoader } from "react-spinners";
import { connect } from "react-redux";

import Backdrop from "./Backdrop";

const override = css`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
`;

const Spinner = ({ loading }: { loading: boolean }) => (
  <>
    <PulseLoader css={override as any} loading={loading} color="white" />
    { loading && <Backdrop /> }
  </>
);

const mapStateToProps = ({ loading }: { loading: boolean }) => {
  return { loading };
};

export default connect(mapStateToProps)(Spinner);
