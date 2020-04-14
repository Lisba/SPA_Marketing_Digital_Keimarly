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
            return true; //Solo es necesario para eliminar el warning de consola.
        }
        return false;
    })

    let arrayOfStrings = currentArticle.text.split("&");
    
    return (
        <React.Fragment>
            <article className="articleContent">
                <div className="articleContentDiv">
                    <h1 className="articleContentH1">{currentArticle.title}</h1>
                    {
                        arrayOfStrings.map(item => 
                            (
                                (item.indexOf("<p>") !== -1) ?
                                <p className="articleContentP">{item.trim().slice(3,-4)}</p>
                                : (item.indexOf("<h2>") !== -1) ?
                                <h2 className="articleContentH2">{item.trim().slice(4,-5)}</h2>
                                : (item.indexOf("<h3>") !== -1) ?
                                <h3 className="articleContentH3">{item.trim().slice(4,-5)}</h3>
                                : null
                            )
                        )
                    }
                </div>
            </article>
            <Footer />
        </React.Fragment>
    )
}

export default ArticleContent;