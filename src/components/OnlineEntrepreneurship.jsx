import React from 'react';
import { Link }from 'react-router-dom';
import { Parallax } from 'react-parallax';
import ImgOnlineEntrepreneurship from './ImgOnlineEntrepreneurship';
import Articles from '../EntryPointArticles'

const OnlineEntrepreneurship = () => {

    return(
        <div className="online-entrepreneurship">
            <Parallax blur={0} bgImage={require('../img/woman-drinking-coffee.jpg')} bgImageAlt="computer-desk" strength={600} bgImageStyle={{top:'-50%'}} >
                <h1>Emprende Online >>></h1>
            </Parallax>
            <ul>
                {
                    Articles.map(item => 
                    ( (item.id >= 5 && item.id <= 8) ?
                        <Link to={`/articles/${item.id}`}>
                            <ImgOnlineEntrepreneurship classe={`div${item.id}`} src={require('../' + item.icon)} alt={item.title} />
                        </Link>
                        : null
                    ))
                }
            </ul>
        </div>
    )
}

export default OnlineEntrepreneurship;