import React from 'react';
import { Parallax } from 'react-parallax';

const Home = (props) => {
    return(
        <div className="home">
            <Parallax
            blur={0}
            bgImage={require('../img/laptop-next-to-coffe-cup.jpg')}
            bgImageAlt="womanInSofa"
            strength={600}
            bgImageStyle={{top:'-50%'}}
            >
                <h1>Soy Kei Cisnero, especialista en Marketing Digital y Administracion de negocios</h1>
            </Parallax>
        </div>
    )
}

export default Home;