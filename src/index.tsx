import React from "react";
import ReactDOM from "react-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

import "assets/scss/blk-design-system-react.scss?v=1.0.0";

import App from "./components/App";
import { store, persistor } from "./configureStore";
import LoadingScreen from "./components/LoadingScreen";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<LoadingScreen />} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
