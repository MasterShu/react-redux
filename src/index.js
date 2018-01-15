import React from "react";
import ReactDom from 'react-dom'
import App from "./App";
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk";
import { counter, addNum, minusNum, addNumAsync } from "./index.redux";

const reduxDevtools = window.devToolsExtension
    ? window.devToolsExtension()
    : f=>f;
const store = createStore(counter, compose(
    applyMiddleware(thunk),
    reduxDevtools
) );
function render() {
    ReactDom.render(
< App store = {
    store
}
addNum = {
    addNum
}
minusNum = {
    minusNum
}
addNumAsync = {
    addNumAsync }/>,
    document.getElementById('root'));
}

render();

store.subscribe(render)