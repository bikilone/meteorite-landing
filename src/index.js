import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App/App";
import * as serviceWorker from "./serviceWorker";

import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { fetchDataReducer, searchDataReducer } from "./redux/reducers";
import { Provider } from "react-redux";

const rootReducer = combineReducers({ fetchDataReducer, searchDataReducer });

const store = createStore(rootReducer, applyMiddleware(thunk));

/*
 spinner,
 infiniteScroll,
 map,
 animation,
 responsive
*/

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
