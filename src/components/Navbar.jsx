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
                    <Link to="/aboutme">
                        Sobre Mi
                    </Link>
                </div>
                <div>
                    <Link to="/gallery">
                        Galería
                    </Link>
                </div>
                <div>
                    <Link to="/articles">
                        Articulos
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