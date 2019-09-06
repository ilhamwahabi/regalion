import { createStore, applyMiddleware, Reducer } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import reduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

import reducers from "./reducers";

const persistConfig = {
  key: "regalion",
  storage,
  stateReconciler: autoMergeLevel2
};

const persistedReducer = persistReducer(persistConfig, reducers as Reducer);

export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(reduxThunk))
);

export const persistor = persistStore(store);
