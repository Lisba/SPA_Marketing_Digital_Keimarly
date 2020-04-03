import React from 'react'
import {Link} from 'react-router-dom'

const NavButtons = () => {
    return(
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
    )
}

export default NavButtons;