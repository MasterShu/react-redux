import React from "react";

class App extends React.Component {
    // constructor(props){
    //     super(props)
    // }
    render(){
        const store = this.props.store;
        const num = store.getState();
        const addNum = this.props.addNum;
        const minusNum = this.props.minusNum;
        const addNumAsync = this.props.addNumAsync;
        return(
            <div>
                <h1>Now number is {num} </h1>
                <button onClick={() => store.dispatch(addNum())}>ADD NUMBER</button>
                <button onClick={() => store.dispatch(minusNum())}>MINUS NUMBER</button>
                <button onClick={() => store.dispatch(addNumAsync())}>wait a minute ADD NUMBER</button>
            </div>

        )
    }
}

export default App;