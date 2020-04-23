import React from 'react';
import SocialNetworks from './SocialNetworks';
import NavButtons from './NavButtons';

const Navbar = () => {
    return (
        <div className="navBarDiv">
            <img src={require('../img/kei-cisnero.jpg')} alt=""/>
            <NavButtons classe="buttons" />
            <div>
                <SocialNetworks />
            </div>
        </div>
    )
}

export default Navbar;