import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import image1 from '../img/laptop-next-to-coffe-cup.jpg'
import image2 from '../img/person-using-tablet.jpg'
import image3 from '../img/workDesk.jpg'

const Home = (props) => {
    return(
        <div className="home">
            <h1>Acerca de mi</h1>
            <Carousel autoPlay infiniteLoop showIndicators={false} showThumbs={false} showArrows={false} showStatus={false}>
                <div>
                    <img className="img1" src={image1} alt="laptop-next-to-coffe-cup" />
                </div>
                <div>
                    <img className="img2" src={image2} alt="person-using-tablet" />
                </div>
                <div>
                    <img className="img3" src={image3} alt="workDesk" />
                </div>
            </Carousel>  
        </div>
    )
}

export default Home;