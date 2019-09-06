import React from "react";

import Spinner from "./Loading/Spinner";
import Backdrop from "./Loading/Backdrop";

const LoadingScreen = () => {
  return (
    <React.Fragment>
      <Spinner />
      <Backdrop />
    </React.Fragment>
  );
};

export default LoadingScreen;
