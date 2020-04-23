import Button from 'react-bootstrap/Button';
import React from 'react';
import ArticleCard from './ArticleCard';
import articles from '../EntryPointArticles';
import { Link } from 'react-router-dom';

const ArticleHome = () => {

    const classNameArticleCard = "articleCard";

    return(
        <div className="articlesDiv">
            <h1 className="titleArticles">Artículos</h1>
            <div className="groupArticles">
                <ul className="groupArticlesUl">
                    {
                        articles.map((item, i) => 
                        ( (item.id <= 4) ?
                            <li key={item.id} className={`${item.id % 2 === 0 ? 'lower' : 'upper'}`}>
                                <Link to={`/articles/${item.id}`} className={`articleLink card${item.id}`}>
                                    <ArticleCard className={classNameArticleCard} imgRoute={item.cover_image} alt={item.cover_image} title={item.title} text={item.description} />
                                </Link>
                            </li> : null
                        ))
                    }
                </ul>
            </div>
            <div className="articleReadMoreButton">
                <Link to="/articles">
                    <Button variant="primary">Leer más >>></Button>
                </Link>
            </div>
        </div>
    )
}

export default ArticleHome;