import Button from 'react-bootstrap/Button'
import React from 'react'
import Article from './Article'
import {art, art2, art3, art4} from '../textArticles'
import { Link } from 'react-router-dom'

const Articles = () => {
    return(
        <div className="articles">
            <h1 className="titleArticles">Artículos</h1>
            <div className="groupArticles">
                <Link to="/articles/why-marketing" className="articleLink uno">
                    <Article className='one' imgRoute={require('../img/img1.jpg')} alt='img' title={'¿Para qué hacemos marketing?'} text={art} />
                </Link>
                <Link to="/articles/what-is-branding" className="articleLink dos">
                    <Article className='two' imgRoute={require('../img/computer-with-keyboard.jpg')} alt='img' title="¿Qué es el Branding de marca?" text={art2} />
                </Link>
                <Link to="/articles/What-do-we-do-marketing-for" className="articleLink tres">
                    <Article className='three' imgRoute={require('../img/workDesk.jpg')} alt='img' title={'¿Para qué hacemos marketing?'} text={art3} />
                </Link>
                <Link to="/articles/why-and-where-marketing" className="articleLink cuatro">
                    <Article className='four' imgRoute={require('../img/electronics.jpg')} alt='img' title={'¿Para qué hacemos marketing?'} text={art4} />
                </Link>
            </div>
            <div className="divButton">
                <Link to="/articles">
                    <Button variant="primary">Leer más >>></Button>
                </Link>
            </div>
        </div>
    )
}

export default Articles;