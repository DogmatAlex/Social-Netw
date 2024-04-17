import React from 'react';
import './Nav.scss';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="nav">
            <NavLink to="/Profile">Profile</NavLink>
            <NavLink to="/Dialogs">Messages</NavLink>
            <NavLink to="/News">News</NavLink>
            <NavLink to="/Music">Music</NavLink>
            <NavLink to="/Settings">Settings</NavLink>
        </nav>
    );
};

export default Nav;
