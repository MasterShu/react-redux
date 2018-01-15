import React from "react";
import { connect } from "react-redux";
import { addNum, addNumAsync, minusNum } from "./index.redux";

// App = connect(mapStatetoProps, actionCreators)(App);

@connect(
    // state 属性
    state => {return {num: state}},
    // 需要传入的方法
    {addNum, addNumAsync, minusNum}
)
class App extends React.Component {
    // constructor(props){
    //     super(props)
    // }
    render(){
        return(
            <div>
                <h1>Now number is {this.props.num} </h1>
                <button onClick={this.props.addNum}>ADD NUMBER</button>
                <button onClick={this.props.minusNum}>MINUS NUMBER</button>
                <button onClick={this.props.addNumAsync}>wait a minute ADD NUMBER</button>
            </div>

        )
    }
}

export default App;