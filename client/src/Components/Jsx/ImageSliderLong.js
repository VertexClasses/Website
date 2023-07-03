import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Styles/CarouselLong.css";
import React from 'react';
import { useState, useEffect } from 'react';

const ImageSliderLong = ({ images }) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const settings = {
    infinite: true,
    dots: true,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  // Update slidesToShow based on device width
  if (width >= 900) { // Laptops and iPads
    settings.slidesToShow = 2;
  } else {
    settings.slidesToShow = 1; // Mobile devices
  }

  return (
    <>
      <div className="imgslider1">
        <Slider {...settings}>
          {images.map((item) => (
            <div key={item.id} className="chotaimg">
              <img src={item.src} alt={item.alt} />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default ImageSliderLong;
