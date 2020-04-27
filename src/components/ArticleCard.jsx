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
            <img src={require('../' + actualData.icon)} alt={props.alt}/>
            <div className="articleCardText">
                <h2>{props.title}</h2>
                <p>{props.text}</p>
            </div>
        </div>
    )
}

export default ArticleCard;