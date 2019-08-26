import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = props => {
    return (
        <div className="nav-bar">
            <Link to="/">Home</Link>
            <Link to="/">Swyl'd 'n Crazy</Link>
            <Link to="/">About</Link>
        </div>
    )
}

export default NavBar;