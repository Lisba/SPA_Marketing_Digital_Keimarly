import React from 'react'

const Article = (props) => {
    return(
        <div className={`article ${props.className}`}>
            <img src={require('../img/prueba.jpg')} alt="prueba"/>
            <div className="text">
                <h2>{props.title}</h2>
                <p>{props.text}</p>
            </div>
        </div>
    )
}

export default Article;