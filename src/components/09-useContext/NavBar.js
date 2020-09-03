import React from 'react';
import {Link, NavLink} from 'react-router-dom';


export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">UseContext</Link>
            
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                
                <NavLink exact activeClassName="active" className="nav-link active" to="/">Home</NavLink>
                <NavLink exact activeClassName="active" className="nav-link" to="/login">Login</NavLink>
                <NavLink exact activeClassName="active" className="nav-link" to="/about">About</NavLink>
                
                </div>
            </div>
        </nav>
    )
}
