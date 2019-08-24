import React, {Component} from 'react';
import { Query } from "react-apollo";
import NavBar from './navbar';

class Header extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="header">
                <div className="header-top" >
                    <span className="header-site-name">SWYLE</span>
                    <form className="header-search">
                        <input className="header-search-bar" type="text">
                        </input>
                    </form>
                    <div className="header-session-buttons">
                        <button className="header-login">Login</button>
                        <button className="header-register">Register</button>
                    </div>
                </div>
                <NavBar />
            </div>
        )
    }
}

export default Header;