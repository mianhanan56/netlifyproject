import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import polarimg from "../../public/Images/Polar.svg";
import ultrahumanimg from "../../public/Images/Vertical Stack-Black 1.svg";
import hyfeimg from "../../public/Images/Hyfe.svg";
import chamberlainimg from "../../public/Images/Chamberlain.svg";
import halmaimg from "../../public/Images/Halma.svg";

const ClientLogosSlide = () => {
  const settings = {
    dots: false, // Disable navigation dots
    arrows: false,
    infinite: true, // Infinite looping
    slidesToShow: 6, // Number of logos visible at a time
    slidesToScroll: 1, // Scroll one logo at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 0, // Continuous scrolling
    speed: 8000, // Slow, smooth transition
    cssEase: "linear", // Linear animation for consistent speed
    ltr: true, // Force right-to-left scrolling
  };

  return (
    // <div className="container">
      <div className="client-logo-wrapper">
       <div className="container">
       <div className="slider-container ">
          <Slider {...settings}>
            <div className="img-container">
              <img src="Images/Polar.svg" alt="Client Logo 1" />
            </div>
            <div className="img-container">
              <img src="Images/Vertical Stack-Black 1.svg" alt="Client Logo 2" />
            </div>
            <div className="img-container">
              <img src="Images/Hyfe.svg" alt="Client Logo 3" />
            </div>
            <div className="img-container">
              <img src="Images/Chamberlain.svg" alt="Client Logo 4" />
            </div>
            <div className="img-container">
              <img src="Images/Halma.svg" alt="Client Logo 5" />
            </div>
            {/* Repeat logos to ensure seamless scrolling */}
            <div className="img-container">
              <img src="Images/Polar.svg" alt="Client Logo 1" />
            </div>
            <div className="img-container">
              <img src="Images/Vertical Stack-Black 1.svg" alt="Client Logo 2" />
            </div>
            <div className="img-container">
              <img src="Images/Hyfe.svg" alt="Client Logo 3" />
            </div>
            <div className="img-container">
              <img src="Images/Chamberlain.svg" alt="Client Logo 4" />
            </div>
            <div className="img-container">
              <img src="Images/Halma.svg" alt="Client Logo 5" />
            </div>
          </Slider>
        </div>
       </div>
      </div>
    //  </div>
  );
};

export default ClientLogosSlide;
