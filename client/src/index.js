import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
// Redux Imports
/*
Provider - Keeps track of the store which is at a global state.
And that allows us to access that store from anywhere inside of the app. 
*/
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import { reducers } from "./reducers";
// Initialize redux
// Step1: Create the store
const store = createStore(reducers, compose(applyMiddleware(thunk)));
// Wrap application with Provider and pass store as props

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
