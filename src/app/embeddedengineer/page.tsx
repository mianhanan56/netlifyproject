"use client";

import React from "react";
import Image from "next/image";
import MultipleItemsSlider from "../../Components/MultipleItemSlider";
import Form from "../../Components/Form";
import ProductLeaderSlider from '../../Components/ProductLeaderSlider';

const page = () => {
  return (
    <>
      <div className="ai-practitioners">
       <div className="sensor-section">
       <div className="container">
          <div className="row">
            <div className="col-6">
            <div className="sensor-left">
              <div className="heading">
                <span className="vision-header">Sensor data</span>
                <h1>Build optimized <span className="color-header">edge AI</span> models with <span className="color-header">sensor data</span></h1>
                <p>
                  Sensor data is challenging to work with, and Python models are
                  hard to deploy to the edge. Edge Impulse handles the tough
                  parts of edge AI, so every ML practitioner can feel confident
                  solving problems on the edge
                </p>
              </div>

              <div className="btns">
                <div className="blue-btn">
                  <button>Get started</button>
                </div>
                {/* <div className="lets-talk-btn">
                  <button>Schedule a demo</button>
                </div> */}
              </div>
              </div>
              
            </div>
            <div className="col-6">
              <div className="media-video media-video-2">
                <Image
                  src="/Images/video-screenshot.png"
                  alt="video-screenshot"
                  width={600}
                  height={350}
                />
              </div>
            </div>
          </div>
        </div>
       </div>
      </div>
      <div className="innovative-section">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <p>
                The world’s most innovative companies partnered with Edge
                Impulse.
              </p>
            </div>
            <div className="col-8">
              <ProductLeaderSlider/>
              {/* <div className="logos">
                <img src="Images/logo-01.svg" alt="logo-01" />
                <img src="Images/logo-02.svg" alt="logo-02" />
                <img src="Tmages/logo-03.svg" alt="logo-03" />
                <img src="Images/logo-04.svg" alt="logo-04" />
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="grid-3-column">
        <div className="container">
          <div className="row">
            <div className="col-4">
            <div className="python-section">
              <img src="Images/colorfull-arrows.svg" alt="colorfull-arrows" />
             <div>
             <h5>From Python to C++</h5>
              <p>
                Integrate Edge Impulse in your environment with the Python SDK
                and into deployable C++ libraries optimized for any edge device.
              </p>
             </div>
              </div>
            </div>
            <div className="col-4">
            <div className="python-section">
              <img src="Images/sensor.svg" alt="colorfull-arrows" />
              <div>
              <h5>Sensor-oriented feature extraction</h5>
              <p>
                Leverage our best-in-class digital signal processing that can
                improve your on-device inference performance.
              </p>
              </div>
              </div>
            </div>
            <div className="col-4">
            <div className="python-section">
              <img src="Images/recycle.svg" alt="colorfull-arrows" />
             <div>
             <h5>Active learning</h5>
              <p>
                Build a high-quality dataset with sophisticated tools that guide
                data collection and labeling for complex sensor data.
              </p>
             </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid-system aipractitioner-grid-system">
        <div className="container">
          <div className="row gx-5" style={{ alignItems: "center" }}>
            <div className="col-6">
              <div className="heading">
                <h2>ML <span className="color-header">without</span> a PhD</h2>
              </div>
              <div className="text">
                <p>
                  Use the EON Tuner to build the perfect ML pipeline, finding
                  the right balance between DSP configuration and model
                  architecture, all budgeted against memory and latency
                  constraints.
                </p>
              </div>
            </div>
            <div className="col-6">
              <div className="code-img">
                <Image
                  src="/Images/ML-PHD-img.webp"
                  alt="ml-phd"
                  width={500}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid-system aipractitioner-grid-system">
        <div className="container">
          <div className="row gx-5">
            <div className="col-6">
              <div className="edge-device">
                <Image
                  src="/Images/develop-img.webp"
                  alt="develop-img"
                  width={500}
                  height={300}
                />
              </div>
            </div>
            <div className="col-6">
              <div className="heading">
                <h2>Develop with <span className="color-header">ease</span> and <span className="color-header">flexibility</span></h2>
              </div>
              <div className="text">
                <p>
                  Bring your own DSP algorithms or use the pre-built algorithms
                  to extract features from raw data and optimize the on-device
                  inference performance while analyzing the impact of your
                  decisions through real-time on-device performance estimates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid-system aipractitioner-grid-system">
        <div className="container">
          <div className="row gx-5">
            <div className="cards-heading">
              <h1><span className="color-header">Optimized AI</span> for all edge hardware</h1>
            </div>
            <div className="col-6">
              <div className="card-body">
                <div className="code-img">
                  <Image
                    src="/Images/optimized-ai-img-01.png"
                    alt="optimized-ai-01"
                    width={500}
                    height={300}
                  />
                  <div className="text">
                    <h2>Edge Impulse Hardware Ecosystem</h2>
                    <p>
                      Benefit from access and integrations to the leading
                      hardware partner ecosystem from MCUs to MPUs to GPUs and
                      accelerators to generate portable embedded libraries
                      optimized for your edge hardware target.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="card-body">
                <div className="code-img">
                  <Image
                    src="/Images/optimized-ai-img-02.png"
                    alt="optimized-ai-02"
                    width={500}
                    height={300}
                  />
                  <div className="text">
                    <h2>Edge Impulse Hardware Ecosystem</h2>
                    <p>
                      Benefit from access and integrations to the leading
                      hardware partner ecosystem from MCUs to MPUs to GPUs and
                      accelerators to generate portable embedded libraries
                      optimized for your edge hardware target.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="slider-div">
        <MultipleItemsSlider />
      </div>
      {/* <div className="form-div">
        <Form />
      </div> */}
    </>
  );
};

export default page;
