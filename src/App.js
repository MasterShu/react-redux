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
        return(
            <div>
                <h1>Now number is {num} </h1>
                <button onClick={() => store.dispatch(addNum())}>ADD NUMBER</button>
                <button onClick={() => store.dispatch(minusNum())}>MINUS NUMBER</button>
            </div>

        )
    }
}

export default App;