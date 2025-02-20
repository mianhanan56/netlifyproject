"use client";

import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FiBox } from "react-icons/fi";

import { FaArrowRightLong } from "react-icons/fa6";
import { BsLightningCharge } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import { LuBrain } from "react-icons/lu";
import { BsLightning } from "react-icons/bs";
import { MdOutlineSettingsInputAntenna } from "react-icons/md";

function page() {
  return (
    <div>
      <div className="appliance-container">
        <div className="appliance-section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="appliance-heading">
                  <h1>
                  Advanced infrastructure
                  </h1>
                  <p>
                    With Edge Impulse, ship intelligent home and business
                    appliances with hyper-optimized <br /> performance through
                    self-sensing and autonomous response.
                  </p>
                  <div className="demo-btns">
                    {/* <button className="schedule-btn">Schedule demo</button> */}
                    <button className="schedule-btn start-btn">
                      Get Started
                    </button>
                  </div>
                  <div className="appliance-bottom">
                    <p>
                      <span>
                        <LuBrain />
                      </span>
                      <span> AI-Powered Efficiency</span>
                    </p>
                    <p>
                      <span>
                        <BsLightning />
                      </span>
                      <span> Energy Saving Mode</span>
                    </p>
                    <p>
                      <span>
                        <MdOutlineSettingsInputAntenna />
                      </span>{" "}
                      <span>Smart App Control</span>
                    </p>
                  </div>
                  {/* <div className="appliance-img">
                  <img src="Images/appliance1.avif" alt="" />
                </div> */}
                </div>
              </div>
              {/* <div className="col-md-6">
                <div className="appliance-img">
                  <img src="Images/appliance1.avif" alt="" />
                </div>
              </div> */}
            </div>
          </div>
        </div>

        <div className="value-section">
          <div className="container">
            <div className="value-heading">
              <h3>
                Add value to <span className="color-header">appliances</span>{" "}
                with ML
              </h3>
              <p>
                Improve appliance efficiency with real-time inputs. Enable
                richer end-user interaction by leveraging 99% more sensor data.
              </p>
            </div>
            <div className="value-cards">
              <div className="row">
                <div className="col-md-4">
                  <div className="card1-value">
                    <FiBox />

                    {/* <img
                                        src="https://cdn.prod.website-files.com/61925c69a0bbf45243511187/61bb397ed66f1b3e1b2d9038_Frame.svg"
                                        alt=""
                                      /> */}
                    <div className="card-heading">
                      <h4>Optimize performance</h4>
                      <p>
                        Enable richer end-user interaction by leveraging 99%
                        more sensor data.
                      </p>
                      <a href="#">
                        Learn more <FaArrowRightLong />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="card1-value">
                    {/* <img
                                        src="https://cdn.prod.website-files.com/61925c69a0bbf45243511187/61bb399c88eb8e6d545d7720_More%20user-privacy.svg"
                                        alt=""
                                      /> */}
                    <BsLightningCharge />

                    <div className="card-heading">
                      <h4>Increase reliability</h4>
                      <p>
                        Protect sensitive user data with on-device inferencing
                        while maintaining intelligent monitoring.
                      </p>
                      <a href="#">
                        Learn more <FaArrowRightLong />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="card1-value">
                    {/* <img
                                        src="https://cdn.prod.website-files.com/61925c69a0bbf45243511187/61bb398484a6be6f45803e10_Frame-1.svg"
                                        alt=""
                                      /> */}
                    <IoPersonOutline />

                    <div className="card-heading">
                      <h4>Save energy</h4>
                      <p>Improve appliance efficiency with real-time inputs.</p>
                      <a href="#">
                        Learn more <FaArrowRightLong />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="value-section use-case-section">
          <div className="container">
            <div className="value-heading">
              <h3>
                <span className="color-header">Appliance</span> use cases
              </h3>
            </div>
            <div className="use-case-cards">
              <div className="row gy-4">
                <div className="col-md-4">
                  <div className="card1-use-case">
                    {/* <div className="use-case-img">
                                    <img src="Images/washing-water.avif" alt="" />
                                  </div> */}
                    <div className="use-case-heading">
                      <h4>High-precision washer water sensing</h4>
                      <p>
                        Adjust washer water fill amount based on custom load
                        size using humidity sensor
                      </p>
                      <div className="appliance-arrow">
                        <span>
                          <FaArrowRightLong />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="card1-use-case">
                    {/* <div className="use-case-img">
                                    <img src="Images/leak-detection.avif" alt="" />
                                  </div> */}
                    <div className="use-case-heading">
                      <h4>Leak detection</h4>
                      <p>
                        Detect early water leakage using humidity, pipe
                        pressure, and acoustics.
                      </p>
                      <div className="appliance-arrow">
                        <span>
                          <FaArrowRightLong />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="card1-use-case">
                    {/* <div className="use-case-img">
                                    <img src="Images/failure-detection.avif" alt="" />
                                  </div> */}
                    <div className="use-case-heading">
                      <h4>Condenser failure detection</h4>
                      <p>
                        Predict condenser failure using humidity and temperature
                        sensors for early appliance maintenance.
                      </p>
                      <div className="appliance-arrow">
                        <span>
                          <FaArrowRightLong />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="card1-use-case">
                    {/* <div className="use-case-img">
                                    <img src="Images/Appliance failure detection.avif" alt="" />
                                  </div> */}
                    <div className="use-case-heading">
                      <h4>Appliance failure detection</h4>
                      <p>
                        Detect appliance failure using vibration anomaly
                        detection using humidity, temperature, and pressure
                        sensors.
                      </p>
                      <div className="appliance-arrow">
                        <span>
                          <FaArrowRightLong />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="card1-use-case">
                    {/* <div className="use-case-img">
                                    <img src="Images/object-detection.avif" alt="" />
                                  </div> */}
                    <div className="use-case-heading">
                      <h4>Food object detection</h4>
                      <p>
                        Use computer vision to intelligently detect and classify
                        different types of foods, to allow appliances to perform
                        tasks like automating finding recipes, replinishing
                        groceries and more.
                      </p>
                      <div className="appliance-arrow">
                        <span>
                          <FaArrowRightLong />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div className="col-md-4">
                                <div className="card1-use-case">
                                  <div className="use-case-img">
                                    <img src="Images/coffee-machine.avif" alt="" />
                                  </div>
                                  <div className="use-case-heading">
                                    <h4>Smart coffee machine</h4>
                                    <p>
                                      Identify coffee pod input using computer vision to
                                      adjust machine settings.
                                    </p>
                                  </div>
                                </div>
                              </div> */}
              </div>
            </div>

            <div className="use-case-link">
              <p>
                Don’t see a use case that fits? Our team of experts can help you
                develop a custom solution.
                <a href="#">Contact us.</a>
              </p>
            </div>
          </div>
        </div>

        {/* accelerate section */}
        <div className="accelerate-section">
          <div className="container">
            <div className="value-heading">
              <h3>
                Add value to <span className="color-header">appliances</span>{" "}
                with <span className="color-header">ML</span>
              </h3>
            </div>
            <div className="accelerate-cards">
              <div className="row gy-5">
                <div className="col-md-4">
                  <div className="card1-accelerate">
                    <img
                      src="https://cdn.prod.website-files.com/618cdeef45d18e4ef2fd85f3/61c1ab95de0eeb3596d0a8ab_Expert%20support.svg"
                      alt=""
                    />
                    <div className="card-heading">
                      <h4>Expert support</h4>
                      <p>
                        We are the leaders in embedded ML, with track records of
                        working with top enterprises developing solutions across
                        the wearables, industrial and consumer spaces.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="card1-accelerate">
                    <img
                      src="https://cdn.prod.website-files.com/618cdeef45d18e4ef2fd85f3/61c1ab98fc4d045eac58d415_Less%20engineering%20time.svg"
                      alt=""
                    />
                    <div className="card-heading">
                      <h4>Less engineering time</h4>
                      <p>
                        Speed up development timelines with the best-in-class
                        embedded ML platform, designed to help you create
                        production-grade software in less than six months.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="card1-accelerate">
                    <img
                      src="https://cdn.prod.website-files.com/618cdeef45d18e4ef2fd85f3/61c1ab9b696a239b6777ce25_Open%20source%2C%20royalty-free.svg"
                      alt=""
                    />
                    <div className="card-heading">
                      <h4>Open source, royalty-free</h4>
                      <p>
                        All Edge Impulse developed algorithms are licensed under
                        Apache 2.0, without royalties. This means that you
                        completely own your algorithms, and no royalties exist
                        when it comes to deploying them.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="card1-accelerate">
                    <img
                      src="https://cdn.prod.website-files.com/618cdeef45d18e4ef2fd85f3/61c1ab9d8ee5226021298d4e_Flexible%20deployment.svg"
                      alt=""
                    />
                    <div className="card-heading">
                      <h4>Flexible deployment</h4>
                      <p>
                        Models developed in Edge Impulse can be deployed to any
                        edge device, whether that is a MCU, processor, GPU or
                        even a mobile device.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="card1-accelerate">
                    <img
                      src="https://cdn.prod.website-files.com/618cdeef45d18e4ef2fd85f3/61c1ab9f875e47a7bb8877a6_Data%20agnostic.svg"
                      alt=""
                    />
                    <div className="card-heading">
                      <h4>Data agnostic</h4>
                      <p>
                        Our platform allows enterprises to manage their sensor,
                        audio and vision data regardless of how it is formatted
                        and where it exists today. From data transformation to
                        DSP, we can help you visualize and wrangle your data to
                        unlock its potential.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="card1-accelerate">
                    <img
                      src="https://cdn.prod.website-files.com/618cdeef45d18e4ef2fd85f3/61c1aba2875e47872c887863_Develop%20new%20skillsets.svg"
                      alt=""
                    />
                    <div className="card-heading">
                      <h4>Develop new skillsets</h4>
                      <p>
                        Build in-house embedded ML skills over time with Edge
                        Impulse, which can be accessed as a low-to-no code tool
                        to a Jupyter notebook which can be used to make API
                        calls to the platform.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="case-study-section">
          <div className="container">
            <div className="header">
              <h3>Case studies</h3>
            </div>
            <div className="case-study-card1">
              <div className="row gy-5">
                <div className="col-md-6">
                  <div className="card-health">
                    <div className="card-health-img">
                      <img src="Images/edgecloud.avif" alt="edgecloud" />
                    </div>
                    <div className="card-health-content">
                      <h4>Early Blindness & Diabetic Retinopathy Detection</h4>
                      <p>
                        A portable medical device that can accurately detect
                        different stages of diabetic retinopathy, without the
                        need for an internet connection, ample energy or
                        computational power.
                      </p>
                      <span>
                        <a href="#">
                          Read case study <IoIosArrowForward />
                        </a>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="card-health">
                    <div className="card-health-img">
                      <img src="Images/edgecloud.avif" alt="edgecloud" />
                    </div>
                    <div className="card-health-content">
                      <h4>Early Blindness & Diabetic Retinopathy Detection</h4>
                      <p>
                        A portable medical device that can accurately detect
                        different stages of diabetic retinopathy, without the
                        need for an internet connection, ample energy or
                        computational power.
                      </p>
                      <span>
                        <a href="#">
                          Read case study <IoIosArrowForward />
                        </a>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="card-health">
                    <div className="card-health-img">
                      <img src="Images/edgecloud.avif" alt="edgecloud" />
                    </div>
                    <div className="card-health-content">
                      <h4>Early Blindness & Diabetic Retinopathy Detection</h4>
                      <p>
                        A portable medical device that can accurately detect
                        different stages of diabetic retinopathy, without the
                        need for an internet connection, ample energy or
                        computational power.
                      </p>
                      <span>
                        <a href="#">
                          Read case study <IoIosArrowForward />
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* expert-section */}
      {/* <div className="expert-section">
        <div className="container">
          <h1>Talk with an expert</h1>
          <div className="demo-btns signup-btn">
            <button className="schedule-btn">Schedule demo</button>
            <button className="schedule-btn start-btn">Sign up free</button>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default page;
