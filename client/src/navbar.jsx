import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = props => {
    return (
        <div className="nav-bar">
            <Link className="nav-bar-link" to="/">Home</Link>
            <Link className="nav-bar-link" to="/">Swyl'd 'n Crazy</Link>
            <Link className="nav-bar-link" to="/">About</Link>
        </div>
    )
}

export default NavBar;