import React from 'react';
import teslaLogo from '../assets/teslaLogoSmall.svg';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <div className="header__icon">
                <img src={teslaLogo} alt="tesla logo"></img>
            </div>
            <div className="header__menu__center">
                <p>model s</p>
                <p>model 3</p>
                <p>model x</p>
                <p>model y</p>
                <p>solar roof</p>
                <p>solar panels</p>
            </div>
            <div className="header__menu__right">
                <p>shop</p>
                <p>tesla account</p>
            </div>
        </div>
    );
};

export default Header;