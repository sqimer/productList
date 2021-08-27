import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { createStore, compose, applyMiddleware } from "redux";
import { sagaWatcher } from "./redux/sagaWatcher";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./redux/reducer";

const saga = createSagaMiddleware();

const store = createStore(rootReducer, compose(applyMiddleware(saga)));

saga.run(sagaWatcher);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
