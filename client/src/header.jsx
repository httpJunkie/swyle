import React, {Component} from 'react';
import { Query } from "react-apollo";
import NavBar from './navbar';
import currentUser from './queries/current_user';

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            shutUpLint: true
        }
    }

    render() {
        return (
        <Query query={currentUser}>
                {({ loading, error, data }) => {
                    if (loading) return <p></p>;
                    if (error) return <p></p>;
                        console.log(data);
                return (
                    <div className="header">
                        <div className="header-top" >
                            <div className="header-site-name" />>
                            <form className="header-search">
                                <input className="header-search-bar" type="text">
                                </input>
                                <div className="header-search-submit" />

                            </form>
                            {
                                data.currentUser ?
                                <div className="header-session-buttons">
                                    <h3>Hello, {data.currentUser.username}</h3>
                                    <button className="header-login">Logout</button>
                                </div>
                                 :                          
                            <div className="header-session-buttons">
                                <button className="header-login">Login</button>
                                <button className="header-register">Register</button>
                            </div>
                           }
                        </div>
                        <NavBar />
                    </div>
                )
                }}
        </Query>
        )
    }
}

export default Header;