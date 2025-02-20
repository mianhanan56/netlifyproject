"use client";

import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

import { FaAngleRight } from "react-icons/fa6";

function page() {
  return (
    <>
    <div className='assets-tracking'>
        <div className="container">
        <div className="section">
            <div className="row">
                <div className="col-6">
                    <h1 className='heading'>
                    Predictive <br />maintenance
                    </h1>
                    <p className='body'>
                    With Edge Impulse, intelligent asset tracking is unlocking <br />new insights in supply chain, logistics, agriculture and <br />other industries where sensor, audio and vision data can <br />be used to provide more contextual awareness to assets.
                    </p>
                    <div className="btn">
                        <button>Schedule demo</button>
                        <button>Get started</button>
                    </div>
                </div>
                <div className="col-6">
                    <div className="image">
                    <img src="Images/6311ff39ea4fb97b08a453c7_Asset tracking.avif" alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div className="card-section">
        <CardGroup>
      <Card>
        <Card.Img variant="top" src="Images/61c1a4988ce9a86cf16f953f_Asset or parcel tracking-p-500.avif" />

        <Card.Body>
          <Card.Title>Asset or parcel tracking</Card.Title>
          <Card.Text>
          Give an asset context to where it is in the overall supplychain through analysis of real-time sensor data, to ensure more on-time deliveries.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="Images/61c1a3c957358661c87a83fa_Smart animal tracking-p-800.avif" />
        <Card.Body>
          <Card.Title>Smart animal tracking</Card.Title>
          <Card.Text>
          Analyze animal behavior with low-power wearables in real-time using motion, audio and computer vision
          </Card.Text>
        </Card.Body>
      </Card>
       </CardGroup>
       <CardGroup>
      <Card>
        <Card.Img variant="top" src="Images/61c19f3061fbd07fa74eeb57_Animal health monitoring-p-800.avif" />
        <Card.Body>
          <Card.Title>Animal health monitoring</Card.Title>
          <Card.Text>
          Ensure healthy livestock using biometric sensors for body temperature and heart rate to detect early diseases or health issues.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="Images/61c1a3c6573586a8227a835d_Remote environment monitoring.avif" />
        <Card.Body>
          <Card.Title>Remote environment monitoring</Card.Title>
          <Card.Text>
          Support environmental policy enforcement using low-powered and long-life battery devices to monitor remote nature areas.
          </Card.Text>
        </Card.Body>
      </Card>
       </CardGroup>
       <CardGroup>
      <Card>
        <Card.Img variant="top" src="Images/61c1a4d44d9b02f9fa17d5a4_Audio-based crime monitoring-p-500.avif" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="Images/61c1a48ef133672d81adfbf2_Worker protection and monitoring-p-800.avif" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.
          </Card.Text>
        </Card.Body>
      </Card>
       </CardGroup>
        <div className='contact'>
        Don’t see a use case that fits? Our team of experts can help you develop a custom solution. <a href=""> Contact us.</a>
        </div>
        </div>
        <div className='section-new-grid'>
          <h1 className='heading'>Accelerate solution development</h1>
        <CardGroup>
      <Card>
        <Card.Body>
          <img src="Images/61c1ab95de0eeb3596d0a8ab_Expert support.svg" alt="" />
          <Card.Title>Expert support</Card.Title>
          <Card.Text>
          We are the leaders in embedded ML, with track records of working with top enterprises developing solutions across the wearables, industrial and consumer spaces.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
        <img src="Images/61c1ab98fc4d045eac58d415_Less engineering time.svg" alt="" />
          <Card.Title>Less engineering time</Card.Title>
          <Card.Text>
          Speed up development timelines with the best-in-class embedded ML platform, designed to help you create production-grade software in less than six months.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
        <img src="Images/61c1ab9b696a239b6777ce25_Open source, royalty-free.svg" alt="" />
          <Card.Title>Open source, royalty-free</Card.Title>
          <Card.Text>
          All Edge Impulse developed algorithms are licensed under Apache 2.0, without royalties. This means that you completely own your algorithms, and no royalties exist when it comes to deploying them.
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
    <CardGroup>
      <Card>
        <Card.Body>
          <img src="Images/61c1ab9d8ee5226021298d4e_Flexible deployment.svg" alt="" />
          <Card.Title>Flexible deployment</Card.Title>
          <Card.Text>
          Models developed in Edge Impulse can be deployed to any edge device, whether that is a MCU, processor, GPU or even a mobile device.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
        <img src="Images/61c1ab9f875e47a7bb8877a6_Data agnostic.svg" alt="" />
          <Card.Title>Data agnostic</Card.Title>
          <Card.Text>
          Our platform allows enterprises to manage their sensor, audio and vision data regardless of how it is formatted and where it exists today. From data transformation to DSP, we can help you visualize and wrangle your data to unlock its potential..
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
        <img src="Images/61c1aba2875e47872c887863_Develop new skillsets.svg" alt="" />
          <Card.Title>Develop new skillsets</Card.Title>
          <Card.Text>
          Build in-house embedded ML skills over time with Edge Impulse, which can be accessed as a low-to-no code tool to a Jupyter notebook which can be used to make API calls to the platform.
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
        </div>
        <div className="section-big-card">
        <h1 className='heading'>Case studies</h1>
        <CardGroup>
      <Card>
        <Card.Img variant="top"  src="Images/61c1ad3afc4d042afc5a4c70_IoT Gets an ML Boost, From Edge to Cloud.avif"/>
        <Card.Body>
          <Card.Title>IoT Gets an ML Boost, From Edge to Cloud</Card.Title>
          <Card.Text>
          Today, it’s easy to run Edge Impulse machine learning on any OS like the Linux-powered Raspberry Pi and on every cloud, including Microsoft’s Azure IoT.
          </Card.Text>
          <div className="link"><a href="">Learn more<FaAngleRight /></a></div>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="Images/62cfc0a6bf4cb113ef59630b_Screenshot 2022-07-14 at 09.02.08.avif" />
        <Card.Body>
          <Card.Title>Cold Chain Monitoring</Card.Title>
          <Card.Text>
          Gain real-time insights in the product lifecycle to ensure the product has not been damaged or compromised during shipment.
          </Card.Text>
          <div className="link"><a href="">Learn more<FaAngleRight /></a></div>
        </Card.Body>
      </Card>
    </CardGroup>
        </div>
        </div>
    </div>

    <div className="expert-section">
        <div className="container">
          <h1>Talk with an expert</h1>
          <div className="demo-btns signup-btn">
            <button className="schedule-btn">Schedule demo</button>
            <button className="schedule-btn start-btn">Sign up free</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default page
