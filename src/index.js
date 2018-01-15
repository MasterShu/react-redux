import React from "react";
import ReactDom from 'react-dom'
import App from "./App";
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { counter } from "./index.redux";

const reduxDevtools = window.devToolsExtension
    ? window.devToolsExtension()
    : f=>f;
const store = createStore(counter, compose(
    applyMiddleware(thunk),
    reduxDevtools
) );
    ReactDom.render(
        (<Provider store = { store } >
            <App/>
        </Provider>),
        document.getElementById('root')
    );