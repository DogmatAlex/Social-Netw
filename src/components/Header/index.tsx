import React from 'react';
import './Header.scss';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                {/* <img src="" alt="" /> */}
                <span>LOGO</span>
            </div>
            <input type="text" placeholder="Search" />
        </header>
    );
};

export default Header;
