import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
    return(
        <div>
            <Link to="/">
                <button>TAKE ME HOME... PLEASE!!</button>
            </Link>
            <img src={require('../img/lost.jpg')} alt="woman-in-dessert"/>
        </div>
    )
}

export default NotFoundPage;