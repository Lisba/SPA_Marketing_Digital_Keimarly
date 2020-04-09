import React from 'react'

const ArticleCard = (props) => {
    return(
        <div className={props.className}>
            <img src={props.imgRoute} alt={props.alt}/>
            <div className="articleCardText">
                <h2>{props.title}</h2>
                <p>{props.text}</p>
            </div>
        </div>
    )
}

export default ArticleCard;