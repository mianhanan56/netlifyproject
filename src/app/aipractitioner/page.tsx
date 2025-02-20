"use client";

import React from "react";
// import MultipleItemSlider from "../../Components/MultipleItemsSlider";
import MultipleItemsSlider from '../../Components/MultipleItemSlider';
import Form from "../../Components/Form";
// import MultipleItemsSlider from '../Components/MultipleItemSlider'
// import Form from '../Components/Form'
import ProductLeaderSlider from '../../Components/ProductLeaderSlider';

function page() {
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

              {/* <div className="media-video">
                <img src="Images/video-screenshot.png" alt="video-screenshot" />
              </div> */}
            </div>
            <div className="col-6">
              <div className="media-video">
                <img src="Images/video-screenshot.png" alt="video-screenshot" />
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
      <div className="aipractitioner-grid-system">
        <div className="container">
          <div className="row gx-5">
            <div className="col-6">
              <div className="code-img">
                <img src="Images/code-img.png" alt="code-img" />
              </div>
            </div>
            <div className="col-6">
              <div className="heading">
                <h2>
                  <span className="color-header">Integrate</span> with your existing <span className="color-header">workflows</span> and <span className="color-header">development </span>tools
                </h2>
              </div>
              <div className="text">
                <p>
                  Complement your workflow with tools built for dealing with
                  complex sensor data and with edge devices.
                </p>
              </div>
              <div className="whole-integrate-text">
                <div className="integrate-text">
                  <div className="python-img">
                  <img src="Images/plus-blue.svg" alt="plus-blue" />
                  </div>
                  
                 <div>
                  <h1>Python integration</h1>
                 <p>
                    Native Python integrations with the Python SDK
                    Native Python integrations with the Python SDK
                  </p>
                 </div>
                </div>
               
                <div className="integrate-text">
                  <div className="python-img">
                  <img src="Images/arrows.svg" alt="arrows" />
                  </div>
                  <div>
                  <h1>Python integration</h1>
                 <p>
                    Native Python integrations with the Python SDK
                    Native Python integrations with the Python SDK
                  </p>
                 </div>
                </div>
                <div className="integrate-text">
                  <div className="python-img">
                  <img src="Images/eye.svg" alt="eye" />
                  </div>
                  <div>
                  <h1>Python integration</h1>
                 <p>
                    Native Python integrations with the Python SDK
                    Native Python integrations with the Python SDK
                  </p>
                 </div>
                </div>
                {/* <div className="integrate-text">
                 <div className="python-img">
                 <img src="Images/building.svg" alt="building" />
                 </div>
                 <div>
                  <h1>Python integration</h1>
                 <p>
                    Native Python integrations with the Python SDK
                    Native Python integrations with the Python SDK
                  </p>
                 </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="aipractitioner-grid-system">
        <div className="container">
          <div className="row gx-5">
            <div className="col-6">
              <div className="heading">
                <h2><span className="color-header">Profile</span> and <span className="color-header">optimize</span> your models for any <span className="color-headers">edge device</span></h2>
              </div>
              <div className="text">
                <p>
                  Estimate the on-device performance of your model continually
                  during model development, and generate a portable and
                  optimized C++ library ready to be deployed to any edge device.
                </p>
              </div>
              <div className="whole-integrate-text">
                <div className="integrate-text">
                  <div className="python-img">
                  <img src="Images/plus-blue.svg" alt="plus-blue" />
                  </div>
                  
                 <div>
                  <h1>Python integration</h1>
                 <p>
                    Native Python integrations with the Python SDK
                    Native Python integrations with the Python SDK
                  </p>
                 </div>
                </div>
               
                <div className="integrate-text">
                  <div className="python-img">
                  <img src="Images/arrows.svg" alt="arrows" />
                  </div>
                  <div>
                  <h1>Python integration</h1>
                 <p>
                    Native Python integrations with the Python SDK
                    Native Python integrations with the Python SDK
                  </p>
                 </div>
                </div>
                <div className="integrate-text">
                  <div className="python-img">
                  <img src="Images/eye.svg" alt="eye" />
                  </div>
                  <div>
                  <h1>Python integration</h1>
                 <p>
                    Native Python integrations with the Python SDK
                    Native Python integrations with the Python SDK
                  </p>
                 </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="edge-device">
                <img src="Images/edge-device-img.png" alt="edge-device-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="aipractitioner-grid-system">
        <div className="container">
          <div className="row gx-5">
            <div className="col-6">
              <div className="code-img">
                <img src="Images/data-prediction-img.webp" alt="code-img" />
              </div>
            </div>
            <div className="col-6">
              <div className="heading heading-2">
                <h2><span className="color-header">Visualize</span> your data and uncover insights</h2>
              </div>
              <div className="text text-2">
                <div className="info">
                  <h6>Data transformation at scale</h6>
                  <p>
                    Set up and run reusable data pipelines to transform and
                    prepare your sensor data at scale.
                  </p>
                </div>
                <div className="info info-2">
                  <h6>Sensor data guidance</h6>
                  <p>
                    Use data exploration tools to visualize and uncover critical
                    insights that can help you improve your dataset.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="aipractitioner-grid-system feature-engineering ">
        <div className="container">
          <div>
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12 p-0">
                <h2 className="heading heading-2">
                  <span className="color-header">Feature engineering</span> for sensor data
                </h2>
                <div className="text text-2 product-tab">
                  <div className="info">
                    <h6>Best-in-class DSP algorithms</h6>
                    <p>
                      Pick from a wide choice of digital signal processing (DSP)
                      algorithms, available during training and optimized for
                      on-device performance.
                    </p>
                  </div>
                  <div className="info info-2">
                    <h6>DSP autotuning</h6>
                    <p>
                      Perform automatic DSP parameter tuning to discover the
                      best configuration to use based on your dataset..
                    </p>
                  </div>
                  <div className="info info-3">
                    <h6>EON Tuner</h6>
                    <p>
                      Leverage an AutoML tool able to find the right balance
                      between DSP and ML models for your dataset and device.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 p-0">
                <div className="image">
                  <img
                    src="Images/img.webp"
                    alt="img"
                    style={{
                      margin: "0",
                      maxWidth: "550px",
                      maxHeight: "550px",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="aipractitioner-grid-system">
        <div className="container">
          <div className="row gx-5" style={{ alignItems: "center" }}>
            <div className="col-6">
              <div className="code-img">
                <img src="Images/art-ml-algorithms.webp" alt="code-img" />
              </div>
            </div>
            <div className="col-6">
              <div className="heading">
                <h2><span className="color-header">State-of-the-art</span> ML algorithms</h2>
              </div>
              <div className="text">
                <p>
                  Build your own model or leverage ground-breaking models like
                  FOMO (Faster Objects More Objects) built to bring real-time
                  object detection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="slider-div">
        <MultipleItemsSlider />
      </div> */}
      {/* <div className="form-div">
        <Form />
      </div> */}
    </>
  );
}

export default page;
