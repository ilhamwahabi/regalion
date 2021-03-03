import React from "react";
import ReactDOM from "react-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import splitbee from '@splitbee/web';

import "assets/scss/index.scss";

import App from "./components/App";
import { store, persistor } from "./configureStore";
import LoadingScreen from "./components/Loading";

splitbee.init({
  scriptUrl: "/bee.js",
  apiUrl: "/_hive",
})

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<LoadingScreen />} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
