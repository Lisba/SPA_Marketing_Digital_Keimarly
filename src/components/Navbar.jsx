import React from 'react';
import { Link } from 'react-router-dom';
import SocialNetworks from './SocialNetworks';
import NavButtons from './NavButtons';

const Navbar = () => {
    return (
        <div className="navBarDiv">
            <Link to="/"><img src={require('../img/kei-cisnero.jpg')} alt=""/></Link>
            <NavButtons classe="buttons" />
            <div>
                <SocialNetworks />
            </div>
        </div>
    )
}

export default Navbar;