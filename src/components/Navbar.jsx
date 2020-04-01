import React from 'react'
import {Link} from 'react-router-dom'
import SocialNetworks from './SocialNetworks'

const Navbar = () => {
    return (
        <div className="navBarDiv">
            <h1>LOGO</h1>
            <div className="buttons">
                <div>
                    <Link to="/">
                        Home
                    </Link>
                </div>
                <div>
                    <Link to="/articles">
                        Artículos
                    </Link>
                </div>
                <div>
                    <Link to="/online-undertake">
                        Emprende Online
                    </Link>
                </div>
                <div>
                    <Link to="/gallery">
                        Galería
                    </Link>
                </div>
            </div>
            <div>
                <SocialNetworks />
            </div>
        </div>
    )
}

export default Navbar;