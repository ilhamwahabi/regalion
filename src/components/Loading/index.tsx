import React from "react";

import Spinner from "./Spinner";
import Backdrop from "./Backdrop";

const LoadingScreen = () => {
  return (
    <React.Fragment>
      <Spinner />
      <Backdrop />
    </React.Fragment>
  );
};

export default LoadingScreen;
