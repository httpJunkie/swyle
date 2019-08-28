import React, {Component} from 'react';
import NavBar from './navbar';
import logout from './mutations/logout';
import {Link} from 'react-router-dom'
import {graphql} from 'react-apollo';
import currentUser from './queries/current_user';

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            shutUpLint: true,
            currentUser: this.props.currentUser
        }
        this.logout = this.logout.bind(this)
    }

    componentWillReceiveProps(newProps) {
        console.log("New Props:", newProps)
        if (this.props.currentUser !== newProps.currentUser) {
            this.setState({ currentUser: newProps.currentUser})
        }
    }

    logout () {
        // localStorage.setItem("mlToken", "")
        this.props.mutate({ refetchQueries: [{ currentUser }]})
    }

    render() {
        return (
            <div className="header">
                <div className="header-top" >
                    <div className="header-site-name" />
                    <form className="header-search">
                        <input className="header-search-bar" type="text">
                        </input>
                        <div className="header-search-submit" />

                    </form>
                    {
                        !this.state.currentUser ?
                                                
                    <div className="header-session-buttons">
                        <Link to="/login" className="header-login">Login</Link>
                        <button className="header-register">Register</button>
                    </div>
                    :
                            <div className="header-personal-greeting">
                                <h3>Hello, {this.state.currentUser.username || "nobody"} </h3>
                                <button className="header-login" onClick={this.logout}>Logout</button>
                            </div>
                    }
                </div>
                <NavBar />
            </div>
        )

    }
}

export default graphql(logout)(Header);