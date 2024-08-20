import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import Imag1 from '../assets/Images/gh.jpg';
import Imag2 from '../assets/Images/kl.jpg';
import Imag3 from '../assets/Images/th.jpg';
import Imag4 from '../assets/Images/Screenshot_108.png';
import Imag5 from '../assets/Images/Screenshot_109.png';

import 'bootstrap/dist/css/bootstrap.min.css';

const HeroSection = () => {
    return (
        <div className="container">
            {/* <h2 className="text-center my-4">Carousel Example</h2> */}
            <Carousel id="myCarousel" interval={3000} controls indicators>
                <Carousel.Item>
                    <Image src={Imag4} className="d-block w-100" alt="Slide 1" />
                    <Carousel.Caption>
                        {/* <h3>BEST SALES!!</h3> */}
                        {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image src={Imag5} className="d-block w-100" alt="Slide 2" />
                    <Carousel.Caption>
                        {/* <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image src={Imag3} className="d-block w-100" alt="Slide 3" />
                    <Carousel.Caption>
                        {/* <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <style jsx>{`
                .carousel-item img {
                    height: 500px;
                    object-fit: cover;
                }
                .carousel-caption {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    text-align: center;
                    color: white;
                }
                .carousel-caption h3 {
                    font-size: 2rem;
                    font-weight: bold;
                }
                .carousel-caption p {
                    font-size: 1.2rem;
                }
                .carousel-control-prev, .carousel-control-next {
                    width: 5%;
                }
                .carousel-control-prev-icon, .carousel-control-next-icon {
                    background-color: black;
                }
            `}</style>
        </div>
    );
};

export default HeroSection;
