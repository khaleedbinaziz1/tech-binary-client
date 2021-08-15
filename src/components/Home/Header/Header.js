import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import './Header.css';
import Navigationbar from './../../Shared/Navigationbar/Navigationbar';

const Header = () => {
    return (
        <div className="header-container">
            <Navigationbar />
            <HeaderMain></HeaderMain>
        </div>
    );
};

export default Header;