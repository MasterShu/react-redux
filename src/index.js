import React from "react";
import ReactDom from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";


import Auth from "./Auth";
import Dashboard from "./Dashboard";
import reducers from "./reducer";
import './config'

const reduxDevtools = window.devToolsExtension
    ? window.devToolsExtension()
    : f=>f;
const store = createStore(reducers, compose(
    applyMiddleware(thunk),
    reduxDevtools
) );

// class Test extends React.Component {
//     constructor(props){
//         super(props)
        
//     }

//     render() {
//         console.log(this.props)
//         return <h2>Test Component {this.props.match.params.location}</h2>
//     }
// }

ReactDom.render(
    (<Provider store = { store } >
        <BrowserRouter>
            <Switch>
                {/* Switch 中仅渲染第一个匹配到的 URL */}
                <Route path="/login" exact component={Auth}></Route>
                <Route path="/dashboard" component={Dashboard}></Route>
                <Redirect to="/dashboard"></Redirect>

            </Switch>
        </BrowserRouter>
    </Provider>),
    document.getElementById('root')
);

