import Button from 'react-bootstrap/Button'
import React from 'react'
import ArticleCard from './ArticleCard'
import * as articleContent from '../textArticles'
import { Link } from 'react-router-dom'

let arrString = articleContent.title4.split(" ");
let newString = arrString.join('-');
console.log(newString);

const ArticleHome = () => {

    const classNameArticleCard = "articleCard";

    return(
        <div className="articlesDiv">
            <h1 className="titleArticles">Artículos</h1>
            <div className="groupArticles">
                <Link to="/articles/why-marketing" className="articleLink upper">
                    <ArticleCard className={classNameArticleCard} imgRoute={require('../img/img1.jpg')} alt='img' title={articleContent.title1} text={articleContent.article1} />
                </Link>
                <Link to="/articles/what-is-branding" className="articleLink lower">
                    <ArticleCard className={classNameArticleCard} imgRoute={require('../img/computer-with-keyboard.jpg')} alt='img' title={articleContent.title2} text={articleContent.article2} />
                </Link>
                <Link to={`/articles/por-que-hacemos-marketing`} className="articleLink upper">
                    <ArticleCard className={classNameArticleCard} imgRoute={require('../img/workDesk.jpg')} alt='img' title={articleContent.title3} text={articleContent.article3} />
                </Link>
                <Link to={`/articles/${newString}`} className="articleLink lower">
                    <ArticleCard className={classNameArticleCard} imgRoute={require('../img/electronics.jpg')} alt='img' title={articleContent.title4} text={articleContent.article4} />
                </Link>
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
export { newString };