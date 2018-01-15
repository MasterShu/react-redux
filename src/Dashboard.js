import React from 'react'
import {Link, Route, Redirect} from "react-router-dom";
import { connect } from "react-redux";
import App from "./App";
import { logout } from "./Auth.redux";

function Categories() {
    return <h2>Category</h2>
}
function Products() {
    return <h2>Product</h2>
}

@connect(
    state => state.auth,
    {logout}
)
class Dashboard extends React.Component {

    render() {
        const redirectToLogin = <Redirect to="/login"></Redirect>
        const match = this.props.match;
        const app = (
            <div>
                <button onClick={this.props.logout}>Logout</button>
                <ul>
                    <li>
                        <Link to={`${match.url}/`}>Home</Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/categories`}>Category</Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/products`}>Product</Link>                        
                    </li>
                </ul>
                <Route path={`${match.url}/`} exact component={App}></Route>
                <Route path={`${match.url}/categories`} component={Categories}></Route>
                <Route path={`${match.url}/products`} component={Products}></Route>
            </div>
        );
        return this.props.isAuth ? app : redirectToLogin;
    }

}

export default Dashboard;