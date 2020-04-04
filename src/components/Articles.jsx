import Button from 'react-bootstrap/Button'
import React from 'react'
import Article from './Article'
import {art, art2, art3, art4} from '../textArticles'

const Articles = () => {
    return(
        <div className="articles">
            <h1 className="titleArticles">Articulos!!!</h1>
            <div className="groupArticles">
                <Article className='one' imgRoute={require('../img/img1.jpg')} alt='img' title={'¿Para qué hacemos marketing?'} text={art} />
                <Article className='two' imgRoute={require('../img/keima.jpg')} alt='img' title="¿Qué es el Branding de marca?" text={art2} />
                <Article className='three' imgRoute={require('../img/prueba.jpg')} alt='img' title={'¿Para qué hacemos marketing?'} text={art3} />
                <Article className='four' imgRoute={require('../img/electronics.jpg')} alt='img' title={'¿Para qué hacemos marketing?'} text={art4} />
            </div>
            <div className="divButton">
                <Button variant="primary">Leer mas -></Button>{' '}
            </div>
        </div>
    )
}

export default Articles;