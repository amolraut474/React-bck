import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Banner.css';
function AutoCarousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };

    return (
        <Slider {...settings}>

            <div className='Slide-1'>
                <div class="hero-item">
                    <h3 className='top-dec'>25 may 2021</h3>
                    <h2 className='slider-heading'> Trion Personal<br /> Creative  Portfolio</h2>
                    <div class="hero-dec"></div>
                    <p className='bottom-dec'>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary .</p>
                    <button class="btn" type="submit">View Project</button>
                </div>
                <div class="overlay"></div>
            </div>
            <div className='Slide-2'>
                <div class="hero-item">
                    <h3 className='top-dec'>25 may 2021</h3>
                    <h2 className='slider-heading'> Trion Personal<br /> Creative  Portfolio</h2>
                    <div class="hero-dec"></div>
                    <p className='bottom-dec'>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary .</p>
                    <button class="btn" type="submit">View Project</button>
                </div>
                <div class="overlay"></div>
            </div>
            <div className='Slide-3'>
                <div class="hero-item">
                    <h3 className='top-dec'>25 may 2021</h3>
                    <h2 className='slider-heading'> Trion Personal<br /> Creative  Portfolio</h2>
                    <div class="hero-dec"></div>
                    <p className='bottom-dec'>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary .</p>
                    <button class="btn" type="submit">View Project</button>
                </div>
                <div class="overlay"></div>
            </div>

            <div className='Slide-4'>
                <div class="hero-item">
                    <h3 className='top-dec'>25 may 2021</h3>
                    <h2 className='slider-heading'> Trion Personal<br /> Creative  Portfolio</h2>
                    <div class="hero-dec"></div>
                    <p className='bottom-dec'>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary .</p>
                    <button class="btn" type="submit">View Project</button>
                </div>
                <div class="overlay"></div>
            </div>

            {/* Add more slides as needed */}
        </Slider>
    );
}

export default AutoCarousel;