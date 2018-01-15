import React from "react";
import ReactDom from 'react-dom'
import App from "./App";
import { createStore } from 'redux';
import { counter, addNum, minusNum } from "./index.redux";

const store = createStore(counter);

function render() {
    ReactDom.render(
        <App store={store} addNum={addNum} minusNum={minusNum}/>, document.getElementById('root'));
}

render();

store.subscribe(render)