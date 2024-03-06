import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
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
            <Slider {...settings}>
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
            </Slider>
        </div>
    )
}

export default SliderPortion;