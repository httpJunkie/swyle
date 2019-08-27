import React, {Component} from 'react';
import NavBar from './navbar';
import {Link} from 'react-router-dom'
class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            shutUpLint: true,
            currentUser: this.props.currentUser
        }
    }

    componentWillReceiveProps(newProps) {
        console.log("New Props:", newProps)
        if (this.props.currentUser !== newProps.currentUser) {
            this.setState({ currentUser: newProps.currentUser})
        }
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
                        !this.props.currentUser ?
                                                
                    <div className="header-session-buttons">
                        <Link to="/login" className="header-login">Login</Link>
                        <button className="header-register">Register</button>
                    </div>
                    :
                            <div className="header-personal-greeting">
                                <h3>Hello, {this.props.currentUser.username || "nobody"} </h3>
                                <button className="header-login">Logout</button>
                            </div>
                    }
                </div>
                <NavBar />
            </div>
        )

    }
}

export default Header;