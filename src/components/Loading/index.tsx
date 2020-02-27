import React from "react";

import Spinner from "./Spinner";
import Backdrop from "./Backdrop";

const LoadingScreen = () => {
  return (
    <>
      <Spinner />
      <Backdrop />
    </>
  );
};

export default LoadingScreen;
