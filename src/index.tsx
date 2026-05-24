import React from "react";
import { createRoot } from "react-dom/client";
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

const root = createRoot(document.getElementById("root")!);
root.render(
  <Provider store={store}>
    <PersistGate loading={<LoadingScreen />} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
