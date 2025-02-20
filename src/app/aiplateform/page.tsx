"use client";

import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

import { IoLogoLinkedin } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { SiHackster } from "react-icons/si";

function Page() {
  return (
    <div className="aiplateform-container">
      {/* product main page */}
      <div className="for-space">
        <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div
              className="container"
            >
              <div className="top-heading">
                <h1>
                  The <span className="color-header">Edge AI</span> Platform
                </h1>
                <p>
                  Edge Impulse empowers ML teams to run AI at peak performance
                  on any edge hardware, with unmatched ease and speed.
                </p>
                <div className="btns">
                {/* <div className="lets-talk-btn">
                    <button>Let&#39;s talk!</button>
                  </div> */}
                  <div className="blue-btn">
                    <button>Get started</button>
                  </div>
                  {/* <div className="lets-talk-btn">
                    <button>Let&#39;s talk!</button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="product-overview-video">
              <img src="Images/video-screenshot.png" alt="video-screenshot" />
            </div>
          </div>
        </div>
        </div>
        
      </div>
      {/* <div className="whole-soc2-compliance-cta">
        <div
          className="container mt-5"
          style={{ maxWidth: "870px", marginLeft: "auto", marginRight: "auto" }}
        >
          <div className="soc2-compliance">
            <div className="row">
              <div className="col-7">
                <div className="compliance-img">
                  <img src="Images/soc2-compliance.png" alt="soc2-compliance" />
                </div>
              </div>
              <div className="col-5">
                <div className="info">
                  <h5>
                    <a href="#">AICPA SOC 2 Compliant</a>
                  </h5>
                  <p>
                    {" "}
                    Edge Impulse adheres to the strictest security and privacy
                    standards.
                    <a href="#">
                      Learn more about our security standards here.
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="whole-product-overview-video">
        <div className="images">
          <img src="Images/side-img-01.webp" alt="side-img-01" />
          <div className="product-overview-video">
            <img src="Images/video-screenshot.png" alt="video-screenshot" />
          </div>
          <img src="Images/side-img-01.webp" alt="side-img-01" />
        </div>
        <div className="grid-system">
          <div className="container">
            <div className="row">
              <div className="col-4">
                <p>
                  The world’s most innovative companies partnered with Edge
                  Impulse.
                </p>
              </div>
              <div className="col-8">
                <div className="logos">
                  <img src="Images/logo-01.svg" alt="logo-01" />
                  <img src="Images/logo-02.svg" alt="logo-02" />
                  <img src="Images/logo-03.svg" alt="logo-03" />
                  <img src="Images/logo-04.svg" alt="logo-04" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="grid-system">
        <div className="container">
          <div className="row gx-5">
          <div className="col-6"> 
            <div className="flex-center">
              <div className="heading">
                <h2>
                  <span className="color-header">Integrate</span> with your
                  existing <span className="color-header">workflows</span> and{" "}
                  <span className="color-header">development</span> tools
                </h2>
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
              <div className="col-6">
                <div className="code-img">
                  <img src="Images/code-img.png" alt="code-img" />
                </div>
              </div>
          </div>
        </div>
      </div>
      {/* <div className="whole-soc2-compliance-cta">
        <div
          className="container mt-5"
          style={{ maxWidth: "870px", marginLeft: "auto", marginRight: "auto" }}
        >
          <div className="soc2-compliance">
            <div className="row">
              <div className="col-7">
                <div className="compliance-img">
                  <img src="Images/soc2-compliance.png" alt="soc2-compliance" />
                </div>
              </div>
              <div className="col-5">
                <div className="info">
                  <h5>
                    <a href="#">AICPA SOC 2 Compliant</a>
                  </h5>
                  <p>
                    {" "}
                    Edge Impulse adheres to the strictest security and privacy
                    standards.
                    <a href="#">
                      Learn more about our security standards here.
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="whole-accordian">
        <div className="container">
          <div className="accordions-div">
            <div className="row">
              <div className="col-6">
          <div className="accordian-heading">
            <h2 id="dataset-section">
              Build <span className="color-header">high-quality</span> sensor
              datasets
            </h2>
            <p>
              Collect and visualize your sensor data to uncover critical
              insights that will enable you to build a high-quality datasets to
              achieve your target outcomes faster and in a cost-effective way.
            </p>
          </div>
                <div className="monitor-div">
                  <div className="monitor-span">
                    <span>1</span>
                  </div>
                  <div className="monitor-head">
                    <h1>Monitor your progress</h1>
                    <p>
                    Track the performance of your projects over time, by
                      monitoring the changes to your datasets and how those
                      changes impact model performance and accuracy, all in a
                      single configurable dashboard.
                    </p>
                  </div>
                </div>
                <div className="monitor-div">
                  <div className="monitor-span">
                    <span>1</span>
                  </div>
                  <div className="monitor-head">
                    <h1>Monitor your progress</h1>
                    <p>
                    Track the performance of your projects over time, by
                      monitoring the changes to your datasets and how those
                      changes impact model performance and accuracy, all in a
                      single configurable dashboard.
                    </p>
                  </div>
                </div>
                <div className="monitor-div">
                  <div className="monitor-span">
                    <span>1</span>
                  </div>
                  <div className="monitor-head">
                    <h1>Monitor your progress</h1>
                    <p>
                    Track the performance of your projects over time, by
                      monitoring the changes to your datasets and how those
                      changes impact model performance and accuracy, all in a
                      single configurable dashboard.
                    </p>
                  </div>
                </div>
                <div className="monitor-btn">
                  <button>Read more </button>
                </div>
                {/* <Accordion defaultActiveKey="0" flush>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Monitor your progress</Accordion.Header>
                    <Accordion.Body>
                      Track the performance of your projects over time, by
                      monitoring the changes to your datasets and how those
                      changes impact model performance and accuracy, all in a
                      single configurable dashboard.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Flexible data ingestion</Accordion.Header>
                    <Accordion.Body>
                      Collect sensor, audio or image data directly from devices,
                      files or cloud integrations to build high-quality
                      datasets.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      Automate your data preparation
                    </Accordion.Header>
                    <Accordion.Body>
                      Set up and run reusable data pipelines that prepare your
                      input data on large sets of data in parallel by using our
                      cloud infrastructure.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>
                      Identify data quality issues
                    </Accordion.Header>
                    <Accordion.Body>
                      Analyze your dataset with advanced data science tools to
                      analyze your data quality and identify areas for
                      improvement.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion> */}
              </div>
              <div className="col-6">
                <img src="Images/data-compaing.webp" alt="data-compaing" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="feature-engineering" id="feature">
        <div className="container">
          <div>
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12 p-0">
                <div className="image">
                  <img src="Images/img.webp" alt="" />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 p-0">
                <h3 className="heading">
                  <span className="color-header">Feature engineering </span> for
                  sensor data
                </h3>
                <div className="product-tab">
                <div className="monitor-div">
                  <div className="monitor-span">
                    <span>1</span>
                  </div>
                  <div className="monitor-head">
                    <h1>State-of-the-art DSP algorithms</h1>
                    <p>
                    Use best in class algorithms to extract features from
                        raw data and optimize the on-device inference
                        performance.
                    </p>
                  </div>
                </div>
                <div className="monitor-div">
                  <div className="monitor-span">
                    <span>1</span>
                  </div>
                  <div className="monitor-head">
                    <h1>State-of-the-art DSP algorithms</h1>
                    <p>
                    Use best in class algorithms to extract features from
                        raw data and optimize the on-device inference
                        performance.
                    </p>
                  </div>
                </div>
                <div className="monitor-div">
                  <div className="monitor-span">
                    <span>1</span>
                  </div>
                  <div className="monitor-head">
                    <h1>State-of-the-art DSP algorithms</h1>
                    <p>
                    Use best in class algorithms to extract features from
                        raw data and optimize the on-device inference
                        performance.
                    </p>
                  </div>
                </div>
                <div className="monitor-btn">
                  <button>Read more </button>
                </div>

                  {/* <Accordion defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        State-of-the-art DSP algorithms
                      </Accordion.Header>
                      <Accordion.Body>
                        Use best in class algorithms to extract features from
                        raw data and optimize the on-device inference
                        performance.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        Profile on-device performance
                      </Accordion.Header>
                      <Accordion.Body>
                        Analyze the impact of your architectural decisions
                        through real-time on-device performance estimates.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>Feature importance</Accordion.Header>
                      <Accordion.Body>
                        Explore what features are more relevant across your
                        dataset in order to drive more informed decisions
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-optimization">
        <div className="container">
          <h3 className="heading" id="optimize">
            <a>
              <span className="color-header">Optimize</span>
            </a>{" "}
            for on-device <br /> performance
          </h3>
          <div>
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12 p-0">
                <div className="product-tab">
                <div className="monitor-div">
                  <div className="monitor-span">
                    <span>1</span>
                  </div>
                  <div className="monitor-head">
                    <h1>EON™ Tuners</h1>
                    <p>
                    Improve your on-device performance by finding the
                    perfect balance and tradeoffs between feature extraction
                    algorithms and model architectures, all budgeted against
                    memory and latency constraints.
                    </p>
                  </div>
                </div>
                <div className="monitor-div">
                  <div className="monitor-span">
                    <span>1</span>
                  </div>
                  <div className="monitor-head">
                    <h1>EON™ Tuners</h1>
                    <p>
                    Improve your on-device performance by finding the
                    perfect balance and tradeoffs between feature extraction
                    algorithms and model architectures, all budgeted against
                    memory and latency constraints.
                    </p>
                  </div>
                </div>
                <div className="monitor-div">
                  <div className="monitor-span">
                    <span>1</span>
                  </div>
                  <div className="monitor-head">
                    <h1>EON™ Tuners</h1>
                    <p>
                    Improve your on-device performance by finding the
                    perfect balance and tradeoffs between feature extraction
                    algorithms and model architectures, all budgeted against
                    memory and latency constraints.
                    </p>
                  </div>
                </div>
                <div className="monitor-btn">
                  <button>Read more </button>
                </div>

                  {/* <Accordion defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>EON™ Tuner</Accordion.Header>
                      <Accordion.Body>
                        Improve your on-device performance by finding the
                        perfect balance and tradeoffs between feature extraction
                        algorithms and model architectures, all budgeted against
                        memory and latency constraints.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>EON™ Compiler</Accordion.Header>
                      <Accordion.Body>
                        Convert your model to an optimized C++ library. The EON
                        Compiler improves overall model performance by
                        supporting the widest rage of neural network kernels
                        while reducing the model’s memory footprint by over 50%
                        compared to other frameworks.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>
                        Performance calibration
                      </Accordion.Header>
                      <Accordion.Body>
                        Test and fine-tune your on-device model performance by
                        analyzing your model’s False Activation Rate (FAR) and
                        False Rejection Rate (FRR) on a continuous real-world or
                        synthetic stream of data. It is designed to provide an
                        immediate understanding of how your model is expected to
                        perform in the field.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>Build for any device</Accordion.Header>
                      <Accordion.Body>
                        The EON™ Compiler gives engineers the freedom to build
                        models without changing their workflows. Build a model
                        once and deploy it to any edge device leveraging the
                        latest optimizations with ease.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion> */}
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 p-0">
                <div className="image">
                  <img src="Images/imgs.webp" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="algorithms">
        <div className="container">
          <h3 className="heading" id="detection">
            <span className="color-header"> Anomaly</span> detection
          </h3>
          <div className="paragraph">
            Leverage state-of-the-art anomaly detection algorithms and choose
            the <br /> method that best suits your data and application.
          </div>
          <div>
            <CardGroup>
              <Card>
                <Card.Img variant="top" src="Images/card.webp" />
                <Card.Body>
                  <Card.Title>Uncover unexpected signals</Card.Title>
                  <Card.Text>
                    Detect anomalies in all sensor 
                    modalities with models trained solely 
                    on normal data, capable of identifying 
                    suspicious signals and indicating when 
                    an anomaly is detected, directly on 
                    device.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src="Images/cards.webp" />
                <Card.Body>
                  <Card.Title>
                    Detect and filter anomalous inputs
                  </Card.Title>
                  <Card.Text>
                    Combine anomaly detection and classification models to
                    increase the robustness of your algorithms and 
                    ensure that you are always able to 
                    detect and filter out unexpected data 
                    inputs.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src="Images/carde.webp" />
                <Card.Body>
                  <Card.Title>Detect visual anomalies</Card.Title>
                  <Card.Text>
                    Build optimized models to detect 
                    anomalies in highly dimensional data 
                    such as video and image data. 
                    Leverage state-of-the-art models built 
                    to run efficiently on device.
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardGroup>
          </div>
        </div>
      </div>
      <div className="grid-system object-detection ">
        <div className="container">
          <div>
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12 p-0">
                <h2 className="heading heading-2">
                  Object detection on microcontrollers
                </h2>
                <div className="text text-2 product-tab">
                  <div className="info">
                    <p>
                      <a href="#">FOMO</a> (Faster Objects More Objects) is a
                      ground-breaking <br/>algorithm that brings real-time object
                      detection, tracking <br/> and counting to microcontrollers for
                      the first time. Count <br/> objects, find the location of
                      objects in an image, and track multiple objects in
                      real-time.
                    </p>
                  </div>
                  {/* <div className="fomo-card">
                    <div className="text">
                      <h2>30x</h2>
                      <p>faster than MobileNet SSD</p>
                    </div>
                    <div className="text text-2">
                      <h2> 200k</h2>
                      <p>runs in 200K of RAM</p>
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 p-0">
                {/* <div className="image">
                  <img
                    src="Images/object-detection-img.webp"
                    alt="img"
                    style={{
                      margin: "0",
                      maxWidth: "550px",
                      maxHeight: "550px",
                    }}
                  />
                </div> */}
               <div className="text">
               <div className="fomo-card">
                    <div className="text">
                      <h2>30x</h2>
                      <p>faster than MobileNet SSD</p>
                    </div>
                    <div className="text text-2">
                      <h2> 200k</h2>
                      <p>runs in 200K of RAM</p>
                    </div>
                  </div>
               </div>
              </div>
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
                Keep up with the latest ML news from Edge Impulse and the rest
                of the industry.
              </p>
            </div>
            <div className="blue-btn">
              <input type="text" placeholder="Your email address" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </div>

      <div className="edge-ai">
        <div className="container">
          <div className="edge">
            <div className="row">
              <div className="col-7">
                <div className="image">
                  <img
                    src="/images/6475ef76171f8371848411e4_White label (1).webp"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-5">
                <h3 className="heading" id="oem">
                  Edge <span className="color-header">Impulse</span> for <br />
                  <span className="color-header">OEMs</span>
                </h3>
                <div className="integrate-edge-section">
                <span>1</span>
                <div className="integrate-header">
                <h5 className="heading-2">
                  Integrate edge AI in your platform
                </h5>
                <p className="paragraph">
                  Edge Impulse can be fully integrated within your platform,{" "}
                  <br />
                  providing a fully branded and customized experience for your{" "}
                  <br />
                  users and customers.
                </p>
                </div>
                
                </div>
               <div className="integrate-edge-section">
               <span>2</span>
               <div className="integrate-header">
                
               <h5 className="heading-2">Private analytics dashboard</h5>
               <p className="paragraph">
                  Tap into a rich private analytics dashboard to monitor user{" "}
                  <br />
                  engagement, entitlements for enterprise users, project metrics{" "}
                  <br />
                  and organizations.
                </p>
               </div>
                
               </div>
               <div className="integrate-edge-section">
               <span>3</span>
               <div className="integrate-header">
                
               <h5 className="heading-2">Maximum uptime and safety</h5>
               <p className="paragraph">
                  Count on maximum uptime and safety with autoscaling, <br />
                  redundancy, CDN, encryption, and including regular software{" "}
                  <br />
                  updates.
                </p>
               </div>
                
               </div>
              </div>
            </div>
          </div>
         
          {/* <div className='footer-content'>
                    <div className='footer-content-image'>
                        <img src="/images/618e33d89badebdfe7c5897a_Logo (2).svg" alt="" />
                    </div>
                    <div>
                        <div className="row">
                            <div className="col-3">
                                <ul>
                                    <li className='link-bold'>Edge Impulse</li>
                                    <li><a href="">Home</a></li>
                                    <li><a href="">Product</a></li>
                                    <li><a href="">Case studies</a></li>
                                    <li><a href="">Blog</a></li>
                                    <li><a href="">Careers</a></li>
                                    <li><a href="">About</a></li>
                                    <li><a href="">Security</a></li>
                                </ul>
                            </div>
                            <div className="col-3">
                            <ul>
                                    <li className='link-bold'>Studio</li>
                                    <li><a href="">Login</a></li>
                                    <li><a href="">Documentation</a></li>
                                </ul>
                            </div>
                            <div className="col-3">
                            <ul>
                                    <li className='link-bold'>Community</li>
                                    <li><a href="">Events</a></li>
                                    <li><a href="">Branding</a></li>
                                    <li><a href="">Forum</a></li>
                                    <li><a href=""><FaXTwitter /></a><a href=""><IoLogoLinkedin /></a><a href=""><FaGithub /></a><a href=""><SiHackster /></a></li>
                                </ul>
                            </div>
                            <div className="col-3">
                            <ul>
                                    <li className='link-bold'>Contact</li>
                                    <li><a href="">Contact us</a></li>
                                    <li>Edge Impulse <br />
                                        3031 Tisch Way<br />
                                        110 Plaza West<br />  
                                        San Jose, CA 95128 <br />                     
                                        USA</li>
                                    <li></li>
                                </ul>
                            </div>
                        </div>
                    </div>
        </div>
        <div className='sub-footer'>
          <div className="footer-subtext">
                © 2024 Edgeimpulse, Inc. All rights reserved&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<a href="">Privacy Policy</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<a href="">Global Supplier Policy</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<a href="">Community Terms of Service</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<a href="">Enterprise Terms of Service</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<a href="">Responsible AI License</a>
         </div>
        </div> */}
        </div>
        <div className="section-grid">
            <div className="container">
            <div className="row">
              <div className="col-md-4">
             <div className="optimize-header-center">
             <h1 className="heading">
                Optimize and deploy anywhere
            </h1>
             </div>
            

              </div>
              <div className="col-md-4">
                <div className="section-optimize-card">
                  <div className="optimize-card">
                  <img
                    src="/images/646b5cb0a94bf985bedbae4b_Optimize.svg"
                    alt=""
                  />
                  <h5>
                    Optimize
                  </h5>
                  <p>
                  Fine-tune your models by 
                    analyzing on-device performance 
                    and leveraging state-of-the-art
                    optimization techniques.
                  </p>

                  </div>

                  <div className="optimize-card test-card">
                  <img src="/images/646b5cb2a7a8f93d6632f167_Test.svg" alt="" />
                  <h5>
                    Test
                  </h5>
                  <p>
                  Test your models with real-world
                    data to catch bottlenecks and
                    make the right tradeoffs before
                    deploying to your device
                  </p>

                  </div>
                </div>
              </div>
              <div className="col-md-4">
              <div className="section-optimize-card export-card">
                  <div className="optimize-card">
                  <img
                    src="/images/646b5cb0f6907682fcfabbc4_Export.svg"
                    alt=""
                  />
                  <h5>
                    Export
                  </h5>
                  <p>
                  Export trained models to an 
                    optimized C++ library built for
                    interoperability with any edge 
                    device
                  </p>

                  </div>

                  
                </div>

              </div>
            </div>
            </div>
            
            {/* <CardGroup>
              <Card>
                <Card.Body>
                  <img
                    src="/images/646b5cb0a94bf985bedbae4b_Optimize.svg"
                    alt=""
                  />
                  <Card.Title>                    
                    Optimize
                    </Card.Title>
                  <Card.Text>
                    Fine-tune your models by <br />
                    analyzing on-device performance <br />
                    and leveraging state-of-the-art <br />
                    optimization techniques.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  <img src="/images/646b5cb2a7a8f93d6632f167_Test.svg" alt="" />
                  <Card.Title>Test</Card.Title>
                  <Card.Text>
                    Test your models with real-world <br />
                    data to catch bottlenecks and <br />
                    make the right tradeoffs before <br />
                    deploying to your device
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  <img
                    src="/images/646b5cb0f6907682fcfabbc4_Export.svg"
                    alt=""
                  />
                  <Card.Title>Export</Card.Title>
                  <Card.Text>
                    Export trained models to an <br />
                    optimized C++ library built for <br />
                    interoperability with any edge <br />
                    device
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  <img
                    src="/images/646b5cb139e47fa561650a1f_Deploy.svg"
                    alt=""
                  />
                  <Card.Title>Deploy</Card.Title>
                  <Card.Text>
                    Deploy your models with ease <br />
                    while leveraging the ability to <br />
                    continuously monitor and improve <br />
                    their performance.
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardGroup> */}
          </div>
          <div className="container">
          <div className="nividia-overview">
            <div className="nividia-overview-wrapper">
              <div className="row">
                <div className="col-6">
                  <div>
                    <h3 className="heading">
                      Get started with <br />
                      Edge Impulse <br />
                      today
                    </h3>
                    <div className="btn-blue">
                    <button className="demo-btn">Schedule a demo</button>
                      <button>Get started</button>
                      {/* <button>Schedule a demo</button> */}
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div>
                    <img
                      src="/images/6464d7969e8adf4726c172d4_Group 1732.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
      </div>
    </div>
  );
}

export default Page;
