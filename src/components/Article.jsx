import React from 'react'

const Article = (props) => {
    return(
        <div className={`article ${props.className}`}>
            <img src={props.imgRoute} alt={props.alt}/>
            <div className="text">
                <h2>{props.title}</h2>
                <p>{props.text}</p>
            </div>
        </div>
    )
}

export default Article;