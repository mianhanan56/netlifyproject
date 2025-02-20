import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa6";
import Accordion from 'react-bootstrap/Accordion';


function CustomerSlider() {
  const settings = {
    dots: false, // Disable navigation dots
    arrows: false,
    infinite: true, // Infinite looping
    slidesToShow: 2, // Number of logos visible at a time
    slidesToScroll: 1, // Scroll one logo at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 0, // Continuous scrolling
    speed: 8000, // Slow, smooth transition
    cssEase: "linear", // Linear animation for consistent speed
    ltr: true, // Force right-to-left scrolling
  };
  return (
    <>
      <div className="customer-slider-container">
        <div className="container">
          <div className="customer-slider-header">
            <h1>What <span className="color-header">our customers</span> say about us</h1>
          </div>
        </div>
      </div>

      <div className="client-logo-wrapper customer-slider">
        <div className="container">
          <div className="slider-container ">
            <Slider {...settings}>
              <div className="img-container customer-slider-img">
                {/* <img
                  src="https://cdn.prod.website-files.com/618cdeef45d18e4ef2fd85f3/66bcf1b376f0d424bf55e42c_W8-quite%20easy-p-1080.webp"
                  alt="Client Logo 1"
                /> */}
                <div className="customer-header">
                  <span>Edge Impulse</span>
                  <div className="customer-slider-content">
                    <p>
                      The product is quite easy to use while the vendor is very active in helping us make sure our plans work out
                    </p>
                   <div className="star-img-section">
                    <div className="star-img">
                      <img src="https://i.vimeocdn.com/video/1678027340-e102e101e9f2c6efa95f5c9b7a65ea0dbf41805d1feb620d23d1f04eaf175d6c-d?mw=800&mh=450&q=70" alt="" />
                    </div>

                   <div>
                   <p>
                      Head of Products - Software
                    </p>
                    <div className="customer-star">
                      <span><FaStar />
                      </span>
                      <span><FaStar />
                      </span>
                      <span><FaStar />
                      </span>
                      <span><FaStar />
                      </span>
                      <span><FaStar />
                      </span>

                    </div>
                   </div>
                   </div>
                  </div>
                </div>
              </div>
              <div className="img-container  customer-slider-img">
              <div className="customer-header">
                  <span>Edge Impulse</span>
                  <div className="customer-slider-content">
                    <p>
                      The product is quite easy to use while the vendor is very active in helping us make sure our plans work out
                    </p>
                   <div className="star-img-section">
                    <div className="star-img">
                      <img src="https://i.vimeocdn.com/video/1678027340-e102e101e9f2c6efa95f5c9b7a65ea0dbf41805d1feb620d23d1f04eaf175d6c-d?mw=800&mh=450&q=70" alt="" />
                    </div>

                   <div>
                   <p>
                      Head of Products - Software
                    </p>
                    <div className="customer-star">
                      <span><FaStar />
                      </span>
                      <span><FaStar />
                      </span>
                      <span><FaStar />
                      </span>
                      <span><FaStar />
                      </span>
                      <span><FaStar />
                      </span>

                    </div>
                   </div>
                   </div>
                  </div>
                </div>
              </div>
              <div className="img-container  customer-slider-img">
              <div className="customer-header">
                  <span>Edge Impulse</span>
                  <div className="customer-slider-content">
                    <p>
                      The product is quite easy to use while the vendor is very active in helping us make sure our plans work out
                    </p>
                   <div className="star-img-section">
                    <div className="star-img">
                      <img src="https://i.vimeocdn.com/video/1678027340-e102e101e9f2c6efa95f5c9b7a65ea0dbf41805d1feb620d23d1f04eaf175d6c-d?mw=800&mh=450&q=70" alt="" />
                    </div>

                   <div>
                   <p>
                      Head of Products - Software
                    </p>
                    <div className="customer-star">
                      <span><FaStar />
                      </span>
                      <span><FaStar />
                      </span>
                      <span><FaStar />
                      </span>
                      <span><FaStar />
                      </span>
                      <span><FaStar />
                      </span>

                    </div>
                   </div>
                   </div>
                  </div>
                </div>
              </div>
              {/* Repeat logos to ensure seamless scrolling */}
              <div className="img-container  customer-slider-img">
              <div className="customer-header">
                  <span>Edge Impulse</span>
                  <div className="customer-slider-content">
                    <p>
                      The product is quite easy to use while the vendor is very active in helping us make sure our plans work out
                    </p>
                   <div className="star-img-section">
                    <div className="star-img">
                      <img src="https://i.vimeocdn.com/video/1678027340-e102e101e9f2c6efa95f5c9b7a65ea0dbf41805d1feb620d23d1f04eaf175d6c-d?mw=800&mh=450&q=70" alt="" />
                    </div>

                   <div>
                   <p>
                      Head of Products - Software
                    </p>
                    <div className="customer-star">
                      <span><FaStar />
                      </span>
                      <span><FaStar />
                      </span>
                      <span><FaStar />
                      </span>
                      <span><FaStar />
                      </span>
                      <span><FaStar />
                      </span>

                    </div>
                   </div>
                   </div>
                  </div>
                </div>
              </div>
              <div className="img-container  customer-slider-img">
              <div className="customer-header">
                  <span>Edge Impulse</span>
                  <div className="customer-slider-content">
                    <p>
                      The product is quite easy to use while the vendor is very active in helping us make sure our plans work out
                    </p>
                   <div className="star-img-section">
                    <div className="star-img">
                      <img src="https://i.vimeocdn.com/video/1678027340-e102e101e9f2c6efa95f5c9b7a65ea0dbf41805d1feb620d23d1f04eaf175d6c-d?mw=800&mh=450&q=70" alt="" />
                    </div>

                   <div>
                   <p>
                      Head of Products - Software
                    </p>
                    <div className="customer-star">
                      <span><FaStar />
                      </span>
                      <span><FaStar />
                      </span>
                      <span><FaStar />
                      </span>
                      <span><FaStar />
                      </span>
                      <span><FaStar />
                      </span>

                    </div>
                   </div>
                   </div>
                  </div>
                </div>
              </div>
              <div className="img-container  customer-slider-img">
              <div className="customer-header">
                  <span>Edge Impulse</span>
                  <div className="customer-slider-content">
                    <p>
                      The product is quite easy to use while the vendor is very active in helping us make sure our plans work out
                    </p>
                   <div className="star-img-section">
                    <div className="star-img">
                      <img src="https://i.vimeocdn.com/video/1678027340-e102e101e9f2c6efa95f5c9b7a65ea0dbf41805d1feb620d23d1f04eaf175d6c-d?mw=800&mh=450&q=70" alt="" />
                    </div>

                   <div>
                   <p>
                      Head of Products - Software
                    </p>
                    <div className="customer-star">
                      <span><FaStar />
                      </span>
                      <span><FaStar />
                      </span>
                      <span><FaStar />
                      </span>
                      <span><FaStar />
                      </span>
                      <span><FaStar />
                      </span>

                    </div>
                   </div>
                   </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>

      <div className="main-accordion">
      <div className="container">
          <div className="faq-section">
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="faq-accordion-wrapper">
          <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">  
        <Accordion.Header>How much can I earn?</Accordion.Header>
        <Accordion.Body>
        Earn up to 40% recurring commissions for each user who subscribes through your referral link.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>How do I get paid?</Accordion.Header>
        <Accordion.Body>
        Teachers Aid is a Chrome Extension designed to streamline and enhance your teaching experience. It helps you organize and manage classroom communications, tag and categorize chats, and sync information across teams, making it easier to stay organized and focused on teaching.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>How do I get paid?</Accordion.Header>
        <Accordion.Body>
        Teachers Aid is a Chrome Extension designed to streamline and enhance your teaching experience. It helps you organize and manage classroom communications, tag and categorize chats, and sync information across teams, making it easier to stay organized and focused on teaching.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>How do I get paid?</Accordion.Header>
        <Accordion.Body>
        Teachers Aid is a Chrome Extension designed to streamline and enhance your teaching experience. It helps you organize and manage classroom communications, tag and categorize chats, and sync information across teams, making it easier to stay organized and focused on teaching.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>How do I get paid?</Accordion.Header>
        <Accordion.Body>
        Teachers Aid is a Chrome Extension designed to streamline and enhance your teaching experience. It helps you organize and manage classroom communications, tag and categorize chats, and sync information across teams, making it easier to stay organized and focused on teaching.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
          </div>
        </div>
      </div>

      <div className="text-wrapper">
        <div className="container">
          <div className="for-background">
            <h2>
            Trusted by thousands of customers who achieve better results and grow faster 🚀
            </h2>
            <p>
            Stop losing prospects and resolve up to 70% of questions with ChatFlow for 
           <strong> ultra-efficient customer experiences.</strong>
            </p>
            <div className="purple-btn">
              <button>
              Get started today for free 
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container">
        <div className="nividia-overview nividia-color">
          <div className="nividia-overview-wrapper">
            <div className="row">
              <div className="col-6">
                <div className="overview-heading">
                  <h3 class="heading">
                    Get started with <br />
                    Edge Impulse <br />
                  </h3>
                  <div className="btn-blue">
                  <button className="demo-btn">Schedule a demo</button>
                    <button>Get started</button>
                    <button className="demo-btn">Schedule a demo</button>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div>
                  <img
                    src="Images/6464d7969e8adf4726c172d4_Group 1732.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="whole-subscribe-div">
            <div className="container">
              <div className="subscribe">
                <div className="text">
                  <h2>Join our One More Epoch monthly newsletter</h2>
                  <p>
                    Keep up with the latest ML news from Edge Impulse and the
                    rest of the industry.
                  </p>
                </div>
                <div className="blue-btn">
                  <button>Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default CustomerSlider;
