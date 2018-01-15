import React from 'react'
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "./Auth.redux";

@connect(
    state => state.auth,
    {login}
)
class Auth extends React.Component{
    render(){
        return(
            <div>
                { this.props.isAuth ? <Redirect to="/dashboard"></Redirect> : null }
                { this.props.isAuth ? console.log('is login'): console.log('is not login') }
                 <h2>You have not permission to operate it, please login first! </h2>
                 <button onClick={this.props.login}>login</button>
            </div>
        )
    }
    
}

export default Auth;