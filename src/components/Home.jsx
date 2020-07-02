import React from 'react';
import { Parallax } from 'react-parallax';

const Home = () => {
    return(
        <div className="home">
            <Parallax
            blur={0}
            bgImage={require('../img/laptop-next-to-coffe-cup.jpg')}
            bgImageAlt="womanInSofa"
            strength={600}
            bgImageStyle={{top:'-50%'}}
            >
                <h1>Soy Kei Cisnero, te invito a que juntos incursionemos en este maravilloso mundo del marketing online</h1>
            </Parallax>
        </div>
    )
}

export default Home;