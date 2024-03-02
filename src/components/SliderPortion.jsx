import React, { useEffect, useState } from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import IIM from "../Assets/800px-IIMA_LOGO_BLACK.png";
import amins from "../Assets/amins logo.png";
import bsb from "../Assets/BSB_logo_burgundy.png";
import jsw from "../Assets/JSW_Group_logo.png";
import sarva from "../Assets/sarva-shiksha-abhiyan.png";
import surface from "../Assets/surface1.png";
import tata from "../Assets/Tata-Power.png";
import tcp from "../Assets/tpcdt logo.png";
import world from "../Assets/WorldBank_Logo_optimized-17.png";

const SliderPortion = () => {
    const [screen, setScren] = useState();
    useEffect(() => {
        const handleResize = () => {
            setScren(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };

    return (
        <div className='mt-5 mb-5'>
            {/* <Slider {...settings}>
                <div className='my-auto'>
                    <img style={{ height: "70px" }} src={IIM} alt="" />
                </div>
                <div className='my-auto'>
                    <img style={{ height: "70px" }} src={amins} alt="" />
                </div>
                <div className='my-auto'>
                    <img style={{ height: "70px" }} src={bsb} alt="" />
                </div>
                <div className='my-auto'>
                    <img style={{ height: "70px" }} src={jsw} alt="" />
                </div>
                <div className='my-auto'>
                    <img style={{ height: "70px" }} src={sarva} alt="" />
                </div>
                <div className='my-auto'>
                    <img style={{ height: "70px" }} src={surface} alt="" />
                </div>
                <div className='my-auto'>
                    <img style={{ height: "70px" }} src={tata} alt="" />
                </div>
                <div className='my-auto'>
                    <img style={{ height: "70px" }} src={tcp} alt="" />
                </div>
                <div className='my-auto'>
                    <img style={{ height: "70px" }} src={world} alt="" />
                </div>
            </Slider> */}
            {
                window.innerWidth < 546 ? <>
                    <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false" data-bs-interval="false">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div class="d-flex justify-content-around">
                                    <img src={IIM} style={{ height: "50px" }} class="d-block" alt="Image 1" />
                                    <img src={amins} style={{ height: "50px" }} class="d-block" alt="Image 1" />
                                    <img src={jsw} style={{ height: "50px" }} class="d-block" alt="Image 1" />

                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="d-flex justify-content-around">
                                    <img src={sarva} style={{ height: "50px" }} class="d-block " alt="Image 2" />
                                    <img src={surface} style={{ height: "50px" }} class="d-block " alt="Image 3" />
                                    <img src={tata} style={{ height: "50px" }} class="d-block" alt="Image 1" />

                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="d-flex justify-content-around">
                                    <img src={tcp} style={{ height: "50px" }} class="d-block" alt="Image 1" />
                                    <img src={world} style={{ height: "50px" }} class="d-block" alt="Image 1" />
                                    <img src={IIM} style={{ height: "50px" }} class="d-block " alt="Image 2" />
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </> : <>
                    <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false" data-bs-interval="false">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div class="d-flex justify-content-around">
                                    <img src={IIM} style={{ height: "100px" }} class="d-block" alt="Image 1" />
                                    <img src={amins} style={{ height: "100px" }} class="d-block" alt="Image 1" />
                                    <img src={jsw} style={{ height: "100px" }} class="d-block" alt="Image 1" />
                                    <img src={sarva} style={{ height: "100px" }} class="d-block " alt="Image 2" />
                                    <img src={surface} style={{ height: "100px" }} class="d-block " alt="Image 3" />
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="d-flex justify-content-around">
                                    <img src={tata} style={{ height: "100px" }} class="d-block" alt="Image 1" />
                                    <img src={tcp} style={{ height: "100px" }} class="d-block" alt="Image 1" />
                                    <img src={world} style={{ height: "100px" }} class="d-block" alt="Image 1" />
                                    <img src={IIM} style={{ height: "100px" }} class="d-block " alt="Image 2" />
                                    <img src={amins} style={{ height: "100px" }} class="d-block " alt="Image 3" />
                                </div>
                            </div>
                            {/* <div class="carousel-item">
                        <div class="d-flex justify-content-around">
                            <img src={IIM} style={{ height: "100px" }} class="d-block" alt="Image 1" />
                            <img src={amins} style={{ height: "100px" }} class="d-block" alt="Image 1" />
                            <img src={bsb} style={{ height: "100px" }} class="d-block" alt="Image 1" />
                            <img src={amins} style={{ height: "100px" }} class="d-block " alt="Image 2" />
                            <img src={bsb} style={{ height: "100px" }} class="d-block " alt="Image 3" />
                        </div>
                    </div> */}
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </>
            }
        </div>
    )
}

export default SliderPortion;