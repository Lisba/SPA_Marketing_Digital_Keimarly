import React from 'react'
import SocialNetworks from './SocialNetworks'
import NavButtons from './NavButtons'

const Navbar = () => {
    return (
        <div className="navBarDiv">
            <h1>LOGO</h1>
            <NavButtons classe="buttons" />
            <div>
                <SocialNetworks />
            </div>
        </div>
    )
}

export default Navbar;