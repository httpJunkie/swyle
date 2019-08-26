import React, {Component} from 'react';
import NavBar from './navbar';

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            shutUpLint: true
        }
    }

    componentWillReceiveProps(newProps) {
        console.log("New Props:", newProps)
    }

    render() {
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
                        !this.props.currentUser ?
                                                
                    <div className="header-session-buttons">
                        <button className="header-login">Login</button>
                        <button className="header-register">Register</button>
                    </div>
                    :
                            <div className="header-session-buttons">
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