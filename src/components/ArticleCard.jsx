import React from 'react';
import articles from '../EntryPointArticles';

const ArticleCard = (props) => {

    let actualData = {};

    articles.map(item => 
    {
        if(item.cover_image === props.imgRoute)
        {
            actualData = item;
        }
        return true;
    });

    return(
        <div className={props.className}>
            <div className={props.imgContainer}>
                <img src={require('../' + actualData.icon)} alt={props.alt} width={props.width} height={props.height} />
            </div>
            <div className={props.textContainer}>
                <h2>{props.title}</h2>
                <p>{props.text}</p>
            </div>
        </div>
    )
}

export default ArticleCard;