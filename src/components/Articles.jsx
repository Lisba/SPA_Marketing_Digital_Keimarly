import Button from 'react-bootstrap/Button'
import React from 'react'
import Article from './Article'
import art from '../article1'

const Articles = () => {
    return(
        <div className="articles">
            <h1 className="titleArticles">Articulos!!!</h1>
            <div className="groupArticles">
                <Article className='one' title={'¿Para que hacemos marketing?'} text={art}/>
                <Article className='two'/>
                <Article className='three'/>
                <Article className='four'/>
            </div>
            <div className="divButton">
                <Button variant="primary">Leer mas -></Button>{' '}
            </div>
        </div>
    )
}

export default Articles;