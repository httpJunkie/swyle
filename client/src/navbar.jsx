import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
const NavBar = props => {
    const currentPanel = props.location.pathname
    return (
        <div className="nav-bar">
            <Link className={`nav-bar-link${currentPanel === "/" ? "-active" : ''}`} to="/">Home</Link>
            <Link className={`nav-bar-link${currentPanel === "/trending" ? "-active" : ''}`} to="/trending">Swyl'd 'n Crazy</Link>
            <Link className={`nav-bar-link${currentPanel === "/about" ? "-active" : ''}`} to="/">About</Link>
        </div>
    )
}

export default withRouter(NavBar);