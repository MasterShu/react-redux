import React from 'react'
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { login, getUserData } from "./Auth.redux";
import axios from "axios";

@connect(
    state => state.auth,
    { login, getUserData}
)
class Auth extends React.Component{
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         data: {}
    //     }
    // }
    componentDidMount(){
        this.props.getUserData();
        // axios.get('/data')
        //     .then(res => {
        //         if (res.status === 200) {
        //             this.setState({data: res.data[1]})
        //         }
        //         console.log(res)
        //     })
    }
    render(){
        return(
            <div>
                { this.props.isAuth ? <Redirect to="/dashboard"></Redirect> : null }
                { this.props.isAuth ? console.log('is login'): console.log('is not login') }
                <h3>are you {this.props.user}, is age {this.props.age}</h3>
                 <h2>You have not permission to operate it, please login first! </h2>
                 <button onClick={this.props.login}>login</button>
            </div>
        )
    }
    
}

export default Auth;