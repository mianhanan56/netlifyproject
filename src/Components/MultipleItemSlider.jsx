import React from "react";
import Image from "next/image"; // Import Next.js Image component
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MultipleItemsSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };

  return (
    <>
      <div className="slider-heading" style={{ textAlign: "center" }}>
        <div
          className="container mt-5"
          style={{ maxWidth: "870px", marginLeft: "auto", marginRight: "auto" }}
        >
          <h2><span className="color-header">Evaluate</span> and <span className="color-header">deploy</span> with confidence</h2>
          <p>
            AI practitioners around the world are using Edge Impulse to push
            the boundaries on building tomorrow&#39;s enterprise products.
          </p>
        </div>
      </div>

      <div className="slider-container">
        <Slider {...settings}>
          <div className="info">
            <Image src="/images/slider-logo-1.svg" alt="Slider Logo 1" width={100} height={100} />
            <p>
              The Edge Impulse tools are highly effective and have been a
              competitive advantage for Know Labs...
            </p>
            <div className="bottom-text">
              <h6>Steve Kent</h6>
              <p>Chief Product Officer, Know Labs</p>
            </div>
          </div>

          <div className="info info-2">
            <Image src="/images/slider-logo-2.svg" alt="Slider Logo 2" width={100} height={100} />
            <p>
              The sleep data we collect is... messy and hard to scrub. Edge
              Impulse makes it easy to bring data in...
            </p>
            <div className="bottom-text">
              <h6>Xi Zhang</h6>
              <p>Head of Health Sensing, Oura</p>
            </div>
          </div>

          <div className="info">
            <Image src="/images/slider-logo-3.webp" alt="Slider Logo 3" width={100} height={100} />
            <p>
              We’re aggregating sensor data to produce more useful results.
              With the Edge Impulse platform...
            </p>
            <div className="bottom-text">
              <h6>Joe Boettcher</h6>
              <p>Chief Development Officer, SlateSafety</p>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
}

export default MultipleItemsSlider;
