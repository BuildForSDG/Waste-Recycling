/* eslint-disable no-underscore-dangle */
import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import { history } from "./Utils";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import createStore from "./redux/store/createStore";

const initialState = window._INITIAL_STATE_;

const store = createStore(initialState);

const hist = history;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={hist}>
        <App />
      </Router>
    </Provider>
    ,
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
