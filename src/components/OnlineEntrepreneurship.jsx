import React from 'react'
import { Link }from 'react-router-dom'
import { Parallax } from 'react-parallax';
import ImgOnlineEntrepreneurship from './ImgOnlineEntrepreneurship';

const OnlineEntrepreneurship = () => {
    return(
        <div className="online-entrepreneurship">
            <Parallax blur={0} bgImage={require('../img/woman-drinking-coffee.jpg')} bgImageAlt="computer-desk" strength={600} bgImageStyle={{top:'-50%'}} >
                <h1>Emprende Online >>></h1>
            </Parallax>
            <Link to="/articles/googleAdsArticle">
                <ImgOnlineEntrepreneurship classe="googleAdsDiv" src={require('../img/g-color.png')} alt="googleAds" />
            </Link>
            <Link to="/articles/youtubeArticle">
                <ImgOnlineEntrepreneurship classe="youtubeDiv" src={require('../img/y-color.png')} alt="youtube" />
            </Link>
            <Link to="/articles/hotmartArticle">
                <ImgOnlineEntrepreneurship classe="hotmartDiv" src={require('../img/h-color.png')} alt="hotmart" />
            </Link>
            <Link to="/articles/instagramArticle">
                <ImgOnlineEntrepreneurship classe="instagramDiv" src={require('../img/i-color.png')} alt="instagram" />
            </Link>
        </div>
    )
}

export default OnlineEntrepreneurship;