import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function productLeaderSlider() {
    const settings = {
        dots: false, // Disable navigation dots
        arrows: false,
        infinite: true, // Infinite looping
        slidesToShow: 4, // Number of logos visible at a time
        slidesToScroll: 1, // Scroll one logo at a time
        autoplay: true, // Enable autoplay
        autoplaySpeed: 0, // Continuous scrolling
        speed: 8000, // Slow, smooth transition
        cssEase: "linear", // Linear animation for consistent speed
        ltr: true, // Force right-to-left scrolling
      };
  return (
    <div className="client-logo-wrapper">
       <div className="container">
       <div className="slider-container ">
          <Slider {...settings}>
           
           
            <div className="img-container">
            <img src="Images/646b6f376cfd1c323de67178_Sony.svg" alt="" />
            </div>
           
            
            <div className="img-container">
            <img src="Images/646b6f3fa81086f652be180a_Oura (2).svg" alt="" />
            </div>
          
            
            <div className="img-container">
            <img
                src="Images/654e5f9e0a27470ca4643067_Nordic_Semiconductor.svg"
                alt=""
              />
            </div>
         
            
            <div className="img-container">
            <img src="Images/654ce97c5e8ce1f1fd0bd61f_Nvidia.svg" alt="" />

            </div>
           
            {/* Repeat logos to ensure seamless scrolling */}
          
           <div className="img-container">
            <img src="Images/646b6f376cfd1c323de67178_Sony.svg" alt="" />
            </div>
           
            
            <div className="img-container">
            <img src="Images/646b6f3fa81086f652be180a_Oura (2).svg" alt="" />
            </div>
           
            <div className="img-container">
            <img
                src="Images/654e5f9e0a27470ca4643067_Nordic_Semiconductor.svg"
                alt=""
              />
            </div>
            
          
             <div className="img-container">
            <img src="Images/654ce97c5e8ce1f1fd0bd61f_Nvidia.svg" alt="" />

            </div>

          </Slider>
        </div>
       </div>
       </div>
    
  )
}

export default productLeaderSlider
