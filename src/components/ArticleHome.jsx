import Button from 'react-bootstrap/Button'
import React from 'react'
import ArticleCard from './ArticleCard'
import articles from '../textArticles'
import { Link } from 'react-router-dom'

const ArticleHome = () => {

    const classNameArticleCard = "articleCard";

    return(
        <div className="articlesDiv">
            <h1 className="titleArticles">Artículos</h1>
            <div className="groupArticles">
                <ul className="groupArticlesUl">
                    {
                        articles.map(item => 
                            ( (item.id <= 4) ?
                                <li key={item.id} className={`${item.id % 2 === 0 ? 'lower' : 'upper'}`}>
                                    <Link to={`/articles/${item.id}`} className={`articleLink`}>
                                        <ArticleCard className={classNameArticleCard} imgRoute={require('../img/img1.jpg')} alt='img' title={item.title} text={item.text} />
                                    </Link>
                                </li> : null
                            )
                        )
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