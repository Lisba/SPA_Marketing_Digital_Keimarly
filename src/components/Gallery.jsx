import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import image1 from '../img/2-people-sitting-during-daytime.jpg';
import image2 from '../img/action-adult-adventure-beautiful.jpg';
import image3 from '../img/amsterdam-arch-bridge-architecture.jpg';
import image4 from '../img/art-beach-beautiful-clouds.jpg';
import image5 from '../img/backlit-beach-dawn-dusk.jpg';
import image6 from '../img/brown-hut-island-gazebo.jpg';
import image7 from '../img/reconectando con la naturaleza.jpg';
import image8 from '../img/cafe-camera.jpg';
import image9 from '../img/close-up-of-pictures.jpg';
import image10 from '../img/green-car-near-blue-ocean.jpg';
import image11 from '../img/paris-eiffel-tower.jpg';
import image12 from '../img/photography-of-airplane-during-sunrise.jpg';

const Gallery = () => {
    return(
        <div className="gallery">
            <Carousel autoPlay infiniteLoop stopOnHover={false} >
                <div>
                    <img className="img1" src={image1} alt="laptop-next-to-coffe-cup" />
                </div>
                <div>
                    <img className="img2" src={image2} alt="person-using-tablet" />
                </div>
                <div>
                    <img className="img3" src={image3} alt="workDesk" />
                </div>
                <div>
                    <img className="img1" src={image4} alt="img" />
                </div>
                <div>
                    <img className="img1" src={image5} alt="img" />
                </div>
                <div>
                    <img className="img1" src={image6} alt="img" />
                </div>
                <div>
                    <img className="img1" src={image7} alt="img" />
                </div>
                <div>
                    <img className="img1" src={image8} alt="img" />
                </div>
                <div>
                    <img className="img1" src={image9} alt="img" />
                </div>
                <div>
                    <img className="img1" src={image10} alt="img" />
                </div>
                <div>
                    <img className="img1" src={image11} alt="img" />
                </div>
                <div>
                    <img className="img1" src={image12} alt="img" />
                </div>
            </Carousel> 
        </div>
    )
}

export default Gallery;