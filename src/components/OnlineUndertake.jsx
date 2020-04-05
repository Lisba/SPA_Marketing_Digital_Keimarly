import React from 'react'
import { Link }from 'react-router-dom'
import { Parallax } from 'react-parallax';
import ImgOnlineUndertake from './ImgOnlineUndertake';

const onlineUndertake = () => {
    return(
        <div className="online-undertake">
            <Parallax blur={0} bgImage={require('../img/computer-desk.jpg')} bgImageAlt="computer-desk" strength={600} bgImageStyle={{top:'-50%'}} >
                <h1>Emprende Online</h1>
            </Parallax>
            <Link to="/googleAdsArticle">
                <ImgOnlineUndertake classe="googleAdsDiv" src={require('../img/googleAds.png')} alt="googleAds" />
            </Link>
            <Link to="/youtubeArticle">
                <ImgOnlineUndertake classe="youtubeDiv" src={require('../img/youtube.png')} alt="youtube" />
            </Link>
            <Link to="/hotmartArticle">
                <ImgOnlineUndertake classe="hotmartDiv" src={require('../img/hotmart.png')} alt="hotmart" />
            </Link>
            <Link to="/instagramArticle">
                <ImgOnlineUndertake classe="instagramDiv" src={require('../img/instagram.png')} alt="instagram" />
            </Link>
        </div>
    )
}

export default onlineUndertake;