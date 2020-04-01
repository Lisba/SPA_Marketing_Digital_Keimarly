import React from 'react'
import { Parallax } from 'react-parallax';

const onlineUndertake = () => {
    return(
        <div className="online-undertake">
            <Parallax
            blur={0}
            bgImage={require('../img/womanInSofa.jpg')}
            bgImageAlt="womanInSofa"
            strength={600}
            bgImageStyle={{top:'-50%'}}
            >
                <h1>Emprende Online!!</h1>
            </Parallax>
        </div>
    )
}

export default onlineUndertake;