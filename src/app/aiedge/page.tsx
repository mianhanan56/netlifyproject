"use client";

import React from "react";
// import Card from "react-bootstrap/Card";
import { Card } from 'react-bootstrap';
import CardGroup from "react-bootstrap/CardGroup";


function page() {
  return (
    <div className="ai-at-the-edge">
      <div className="container">
        <div className="section-ebook">
          <div className="row">
            <div className="col-6 p-0">
              <div className="ebook-content">
                <div className="ebook-btn">
                  <button>EBOOK</button>
                </div>
                <div className="body">Technical Guide</div>
                <h1 className="heading">
                  AI at the Edge <br /> eBook
                </h1>
              </div>
            </div>
            <div className="col-6 p-0">
              <div className="image">
                <img
                  src="Images/663a3c6ebd90693975eb3179_AI-at-the-Edge-cover-p-500.webp"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-ebook">
          <div className="row">
            <div className="col-6">
              <h1 className="heading">About the eBook</h1>
            </div>
            <div className="col-6">
              <p className="body">
                This practical guide gives engineering professionals, including
                product managers and technology leaders, an end-to-end framework
                for solving real-world industrial, commercial, and scientific
                problems with edge Al. You&#39;ll explore every stage of the
                process, from data collection to model optimization to tuning
                and testing, as you learn how to design and support edge Al and
                embedded ML products. Edge Al is destined to become a standard
                tool for systems engineers. This high-level road map helps you
                get started.
              </p>
            </div>
          </div>
        </div>
        <div className="ebook-card">
          <Card>
            <Card.Body>
              <Card.Title>Readers will learn</Card.Title>
              <Card.Text>
                <CardGroup>
                  <Card>
                    <Card.Body>
                      <img src="Images/Benefit.svg" alt="" />
                      <Card.Text>
                        Learn the benefits of edge AI and how to achieve value
                        in less time while lowering operational costs
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Body>
                      <img src="Images/Benefit-2.svg" alt="" />
                      <Card.Text>
                        Build a team that leverages edge AI expertise to solve
                        real-world problems
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Body>
                      <img
                        src="Images/663a9123dea8be0564defadc_Benefit-3.svg"
                        alt=""
                      />
                      <Card.Text>
                        Understand which use cases are best solved with edge AI
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </CardGroup>
                <CardGroup>
                  <Card>
                    <Card.Body>
                      <img src="Images/Benefit-4.svg" alt="" />
                      <Card.Text>
                        Learn how to optimize ML at the edge and how it
                        complements cloud ML
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Body>
                      <img src="Images/Benefit-5.svg" alt="" />
                      <Card.Text>
                        Design and operationalize data for edge AI applications
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Body>
                      <img src="Images/Benefit-6.svg" alt="" />
                      <Card.Text>
                        Learn an iterative workflow for developing AI systems
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </CardGroup>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="flex-author-ebook">
          <div className="row">
            <div className="col-6">
              <h1 className="heading">About the authors</h1>
            </div>
            <div className="col-6">
              <div className="authors">
                <div className="speaker">
                  <img src="Images/Danial.svg" alt="" />
                  <div className="speaker-txt">
                    <h5>Daniel Situnayake</h5>
                    <p>Director of Machine Learning, Edge Impulse</p>
                  </div>
                </div>
                <p className="body">
                  Daniel Situnayake is Director of Machine Learning at Edge
                  Impulse, where he leads embedded machine learning R&D. He&#39;s
                  coauthor of the book AI at the Edge: Solving Real-World
                  Problems with Embedded Machine Learning, along with TinyML:
                  Machine Learning with TensorFlow Lite on Arduino and
                  Ultra-Low-Power Microcontrollers, the standard textbook on
                  embedded machine learning, and has delivered guest lectures at
                  Harvard, UC Berkeley, and UNIFEI. <br />
                  Dan previously worked on TensorFlow Lite at Google, and
                  co-founded Tiny Farms, the first US company using automation
                  to produce insect protein at industrial scale. He began his
                  career lecturing in automatic identification and data capture
                  at Birmingham City University.
                </p>
              </div>
              <div className="authors">
                <div className="speaker">
                  <img src="Images/Jenny.svg" alt="" />
                  <div className="speaker-txt">
                    <h5>Jenny Plunkett</h5>
                    <p>Senior Developer Relations Engineer, Edge Impulse</p>
                  </div>
                </div>
                <p className="body">
                  Jenny Plunkett is a Senior Developer Relations Engineer at
                  Edge Impulse, where she is a technical speaker, developer
                  evangelist, and technical content creator. In addition to
                  maintaining the Edge Impulse documentation, she has also
                  created developer-facing resources for Arm Mbed OS and Pelion
                  IoT. She has presented workshops and tech talks for major tech
                  conferences such as the Grace Hopper Celebration, Edge AI
                  Summit, Embedded Vision Summit, and more. Jenny previously
                  worked as a software engineer and IoT consultant for Arm Mbed
                  and Pelion. She graduated with a B.S. in Electrical
                  Engineering from The University of Texas at Austin.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-spes">
        <div className="nividia-cta-overview">
          <div className="nividia-overview-wrapper">
            <div className="row">
              <div className="col-5 p-0">
                <div className="nividia-overview-text">
                  <h1 className="heading">Get started with Edge Impulse</h1>
                  <div className="btn-blue">
                    <button>Get started</button>
                    <button>Schedule a demo</button>
                  </div>
                </div>
              </div>
              <div className="col-7 p-0">
                <div className="nividia-overview-image">
                  <img src="Images/last.jpeg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
