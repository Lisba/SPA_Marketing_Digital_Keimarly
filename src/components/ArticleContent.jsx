import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from './Footer';
import articles from '../textArticles'

const ArticleContent = () => {

    let {id} = useParams();
    id = parseInt(id); //Solo es necesario para eliminar el warning de consola.

    let currentArticle;

    // Para mayor rendimiento ya que se usa break al encontrar el item buscado:
    // for(let i=0; i<articles.length; i++)
    // {
    //     if(articles[i].id == id)
    //     {
    //         currentArticle = articles[i];
    //         break;
    //     }
    // }

    articles.map(item => {
        if(id === item.id) // Se usa estrictamente igual (===) ya que id fue parseado.
        { 
            currentArticle = item;
        }
        return null; //Solo es necesario para eliminar el warning de consola.
    })
    
    return (
        <React.Fragment>
            <article className="articleContent">
                <h2>{currentArticle.title}</h2>
                <p>{currentArticle.text}</p>
            </article>
            <Footer />
        </React.Fragment>
    )
}

export default ArticleContent;