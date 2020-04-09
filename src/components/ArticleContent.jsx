import React from 'react'

const ArticleContent = (props) => {
    return (
        <article className="articleContent">
            <h1 className="articleTitle">{props.title}</h1>
            <p className="textContent">{props.text}</p>
        </article>
    )
}

export default ArticleContent;