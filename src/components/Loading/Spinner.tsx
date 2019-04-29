import React from "react";
import { css } from "@emotion/core";
import { PulseLoader } from "react-spinners";
import { connect } from "react-redux";

const override = css`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Spinner = ({ loading }: { loading: boolean }) => (
  <PulseLoader css={override as any} loading={loading} color="white" />
);

const mapStateToProps = ({ loading }: { loading: boolean }) => {
  return { loading };
};

export default connect(mapStateToProps)(Spinner);
