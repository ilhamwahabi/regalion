import React from "react";
import { connect } from "react-redux";

import Spinner from "./Spinner";
import Backdrop from "./Backdrop";

import { IState } from "../../reducers";

interface ILoadingProps {
  loading: boolean;
}

const LoadingScreen = (props: ILoadingProps) => {
  const { loading } = props;

  if (!loading) return null;
  return (
    <>
      <Spinner />
      <Backdrop />
    </>
  );
};

const mapStateToProps = ({ loading }: IState) => ({ loading });

export default connect(mapStateToProps)(LoadingScreen);
