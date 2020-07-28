import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Gallery = () => {

    const images = [
        'img/2-people-sitting-during-daytime.jpg',
        'img/action-adult-adventure-beautiful.jpg',
        'img/amsterdam-arch-bridge-architecture.jpg',
        'img/art-beach-beautiful-clouds.jpg',
        'img/backlit-beach-dawn-dusk.jpg',
        'img/brown-hut-island-gazebo.jpg',
        'img/reconectando con la naturaleza.jpg',
        'img/cafe-camera.jpg',
        'img/close-up-of-pictures.jpg',
        'img/green-car-near-blue-ocean.jpg',
        'img/paris-eiffel-tower.jpg',
        'img/photography-of-airplane-during-sunrise.jpg'
    ];

    return(
        <div className="gallery">
            <Carousel autoPlay infiniteLoop stopOnHover={false} >
                {
                    images.map((item, index) => (
                            <div key={index}>
                                <img className={'img'} src={require('../' + item)} alt={item} />
                            </div>
                        )
                    )
                }
            </Carousel>
        </div>
    )
}

export default Gallery;