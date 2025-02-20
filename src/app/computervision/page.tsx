"use client";

import React from "react";
import { LuFileAxis3D } from "react-icons/lu";
import { HiOutlineLightningBolt } from "react-icons/hi";
import { AiFillSignal } from "react-icons/ai";
import { FiBatteryCharging } from "react-icons/fi";
import { FaCircleCheck } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaRegCalendarDays } from "react-icons/fa6";



function page() {
  return (
    <div className="computer-vision">
      <div className="section-new">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="section-new-text">
                <span className="vision-header">Vision development</span>
                <h1 className="heading">
                  Computer Vision <br />
                  at the Edge
                </h1>
                <p className="body">
                  Speed up your computer vision development and reduce resource{" "}
                  <br />
                  requirements with ultra low-power computer vision on edge
                  devices.
                </p>
                <div className="btn-blue">
                  <button>Discuss a Project</button>
                </div>
              </div>
              {/* <div className="image">
                <img
                  src="Images/677c1b3a3f72041b55afe4d7_Edge Impulse Project Progress.png"
                  alt=""
                />
              </div> */}
            </div>
            <div className="col-6">
              <div className="image">
                <img
                  src="Images/677c1b3a3f72041b55afe4d7_Edge Impulse Project Progress.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-new-card">
        <div className="container">
          <h1 className="heading">
            Develop <span className="color-header">Real-world Computer</span>{" "}
            <br /> Vision Applications for the Edge
          </h1>
          <p className="body">
            Speed up your computer vision development and reduce resource
            <br />
            requirements with ultra low-power computer vision on edge devices.
          </p>
          <div className="card-padding">
            <div className="row">
              <div className="col-md-4">
                <div className="automate-card">
                  <div className="automate-header">
                    <h1>Automate Data Tasks</h1>
                    <span>2 minute</span>
                  </div>
                  <div className="automate-para">
                    <p>
                      Accelerate and automate data collection,
                      <br /> labeling, and validation without manual <br />{" "}
                      intervention.
                    </p>
                    <span>
                      <FaArrowRightLong />
                    </span>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="automate-card">
                  <div className="automate-header">
                    <h1>Adapt Fast</h1>
                    <span>2 minute</span>
                  </div>
                  <div className="automate-para">
                    <p>
                      Accelerate and automate data collection,
                      <br /> labeling, and validation without manual <br />{" "}
                      intervention.
                    </p>
                    <span>
                      <FaArrowRightLong />
                    </span>
                  </div>{" "}
                </div>
              </div>
              <div className="col-md-4">
                <div className="automate-card">
                  <div className="automate-header">
                    <h1>Boost profit margins</h1>
                    <span>2 minute</span>
                  </div>
                  <p>
                    Accelerate and automate data collection,
                    <br /> labeling, and validation without manual
                    <br /> intervention.
                  </p>
                </div>
              </div>
            </div>
            {/* <CardGroup>
              <Card>
                <Card.Body>
                  <Card.Title>
                    {" "}
                    <div className="icon">
                      <LuFileAxis3D />
                    </div>
                    Automate Data Tasks
                  </Card.Title>
                  <Card.Text>
                    Accelerate and automate data collection, labeling, and
                    validation without manual intervention.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Title>
                    {" "}
                    <div className="icon">
                      <HiOutlineLightningBolt />
                    </div>
                    Adapt Fast
                  </Card.Title>
                  <Card.Text>
                    Iterate quickly and adapt to changing needs and
                    environments.
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardGroup> */}
          </div>
          {/* <div className="card-padding"> */}
          {/* <CardGroup>
              <Card>
                <Card.Body>
                  <Card.Title>
                    {" "}
                    <div className="icon">
                      <AiFillSignal />
                    </div>
                    Boost profit margins
                  </Card.Title>
                  <Card.Text>
                    Benefit from the lowest possible BOM cost by deploying AI to
                    cost-efficient and ultra low-power cameras.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Title>
                    {" "}
                    <div className="icon">
                      <FiBatteryCharging />
                    </div>
                    Long Battery Life
                  </Card.Title>
                  <Card.Text>
                    Achieve long battery life (up to 10 years depending on use
                    case).
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardGroup> */}
          {/* </div> */}
        </div>
      </div>
      <div className="section-new-blue">
        <div className="container">
          <div className="section-new-header">
            <h2 className="heading">Save Time with Automated Data Tasks</h2>
            <p>
              Accelerate and automate data collection, labeling, and validation
              without manual intervention.
            </p>
          </div>
          <div className="list-item-div">
            <div className="list-item">
              <div className="row">
                <div className="col-6">
                  <div className="image-data-section">
                    <span>
                      <svg
                        width="96"
                        viewBox="0 0 152 140"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_1_2840)">
                          <path
                            d="M38.1999 57.6C35.5999 58.9 35.7999 62.7 38.5999 63.6L72.7999 75.3L73.7999 104.8C73.8999 106.4 75.8999 107 76.7999 105.7L92.0999 84.4C92.1999 84.5 92.2999 84.5 92.2999 84.6L124.3 103.8C126.2 105 128.7 103.9 129.2 101.7L149.6 2.5L38.1999 57.6Z"
                            fill="white"
                          ></path>
                          <path
                            d="M149.6 2.6001L149.5 2.9001L149.2 4.4001L129.2 101.8C128.7 104 126.2 105.1 124.3 103.9L92.3 84.7001C92.3 84.7001 92.2 84.7001 92.2 84.6001C92.1 84.6001 92.1 84.5001 92.1 84.5001L80.2 101.2C79.3 102.5 77.2 101.9 77.2 100.3L76.2 72.2001L76.1 70.7001L53.2 62.4001C50.4 61.5001 50.2 57.7001 52.8 56.4001L149.6 2.6001Z"
                            fill="#E0E7FF"
                          ></path>
                          <path
                            d="M149.6 2.8999L149.3 4.3999L90.3 80.3999L92.3 84.5999C92.2 84.5999 92.2 84.4999 92.2 84.4999L80.3 101.2C79.4 102.5 77.3 101.9 77.3 100.3L76.3 72.1999L149.6 2.8999Z"
                            fill="#A5B4FC"
                          ></path>
                          <path
                            d="M76.8999 38.5001L149.6 2.6001L129.2 101.8C128.7 104 126.3 105.1 124.3 103.9L92.2999 84.7001C90.3999 83.6001 89.9999 81.1001 91.2999 79.4001L149.6 2.6001"
                            stroke="#6366F1"
                            stroke-width="3"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            d="M62.5999 45.5H62.6999"
                            stroke="#6366F1"
                            stroke-width="3"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            d="M87.5 91L76.8 105.8C75.9 107.1 73.8 106.5 73.8 104.9L72.8 75.4L38.6 63.7C35.9 62.8 35.6 59 38.2 57.7L56.8 48.5"
                            stroke="#6366F1"
                            stroke-width="3"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            d="M94.8999 54.4001L149.7 2.6001"
                            stroke="#6366F1"
                            stroke-width="3"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            d="M76.8999 71.3999L88.4999 60.3999"
                            stroke="#6366F1"
                            stroke-width="3"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            d="M3.79995 108.6L1.69995 110.3"
                            stroke="#A5B4FC"
                            stroke-width="3"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            d="M28.3999 88.7002L12.5999 101.5"
                            stroke="#A5B4FC"
                            stroke-width="3"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            d="M43.5 76.3999L35.8 82.6999"
                            stroke="#A5B4FC"
                            stroke-width="3"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            d="M37.5999 103.3L32.2 108"
                            stroke="#A5B4FC"
                            stroke-width="3"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            d="M56.9999 86.6001L41.8999 99.6001"
                            stroke="#A5B4FC"
                            stroke-width="3"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            d="M94.4 132.4L89.8 137.9"
                            stroke="#A5B4FC"
                            stroke-width="3"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            d="M110.1 113.6L97.7 128.4"
                            stroke="#A5B4FC"
                            stroke-width="3"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            d="M102.2 109.1L95.8999 116.7"
                            stroke="#A5B4FC"
                            stroke-width="3"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_1_2840">
                            <rect
                              width="152"
                              height="139"
                              fill="white"
                              transform="translate(0 0.5)"
                            ></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </span>

                    <h3 className="heading">Synthetic image data</h3>
                    <p className="paragraph">
                      Augment your datasets by leveraging the latest
                      foundational <br />
                      models from OpenAI and Hugging Face to generate
                      photorealistic <br />
                      images all from within the Edge Impulse platform.
                    </p>
                    <div className="blue-btn">
                      <button>Read More</button>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div>
                    <img
                      src="Images/677d360021afa0231e0b10ec_Project Progress Monitor (1).png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="list-item">
              <div className="row">
                <div className="col-6">
                  <div>
                    <img
                      src="Images/678e4b0b97cb289f36bb16a8_Edge Impulse Website Redesign 2024 Graphic.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="image-data-section">
                    <span>
                      <svg
                        width="80"
                        viewBox="0 0 149 110"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M147.4 10.1999V104.4C147.4 106.1 146 107.5 144.3 107.5H5.6C3.9 107.5 2.5 106.1 2.5 104.4V10.1999C2.5 8.49985 3.9 7.09985 5.6 7.09985H144.3C146 7.09985 147.4 8.49985 147.4 10.1999Z"
                          fill="#A5B4FC"
                        ></path>
                        <path
                          d="M74.5999 25.7999V107.6H69.7999C66.5999 104.5 61.9999 102.5 56.8999 102.5H10.3999C7.8999 102.5 5.8999 100.7 5.8999 98.3999V13.6999C5.8999 12.2999 6.5999 11.0999 7.7999 10.3999C8.4999 9.89985 9.3999 9.59985 10.3999 9.59985H56.8999C66.6999 9.59985 74.5999 16.7999 74.5999 25.7999Z"
                          fill="#818CF8"
                        ></path>
                        <path
                          d="M144.2 13.6999V98.3999C144.2 100.7 142.2 102.5 139.7 102.5H93.2C88.1 102.5 83.5 104.4 80.3 107.6H75.5V25.7999C75.5 16.8999 83.4 9.59985 93.2 9.59985H139.7C140.7 9.59985 141.5 9.89985 142.3 10.2999C143.4 11.0999 144.2 12.2999 144.2 13.6999Z"
                          fill="#818CF8"
                        ></path>
                        <path
                          d="M48.0999 107.5H15.2"
                          stroke="#6366F1"
                          stroke-width="3.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M7.9 107.5H5.6C3.9 107.5 2.5 106.1 2.5 104.4V10.1999C2.5 8.49985 3.9 7.09985 5.6 7.09985H144.3C146 7.09985 147.4 8.49985 147.4 10.1999V104.4C147.4 106.1 146 107.5 144.3 107.5H60"
                          stroke="#6366F1"
                          stroke-width="3.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M74.6 18.7V107.5H74.1C72.2 100.5 65.5 95.4 57.4 95.4H12.1C9.69995 95.4 7.69995 93.6 7.69995 91.3V6.6C7.69995 4.3 9.69995 2.5 12.1 2.5H57.4C62 2.5 66.3 4.2 69.4 7C72.6 10 74.6 14.1 74.6 18.7Z"
                          fill="white"
                        ></path>
                        <path
                          d="M142.3 6.59997V91.3C142.3 93.6 140.3 95.4 137.9 95.4H92.7C84.7 95.4 77.9 100.6 76 107.5H75.5V18.7C75.5 14.1 77.5 9.99997 80.8 7.09997C83.9 4.29997 88.1 2.59997 92.8 2.59997H138C140.3 2.49997 142.3 4.39997 142.3 6.59997Z"
                          fill="white"
                        ></path>
                        <path
                          d="M32.2001 2.4999H57.4001C62.0001 2.4999 66.3001 4.1999 69.4001 6.9999C72.7001 9.8999 74.7 14.0999 74.7 18.5999V107.4H74.2C72.3 100.4 65.6 95.2999 57.5 95.2999H12.2C9.80005 95.2999 7.80005 93.4999 7.80005 91.1999V6.4999C7.80005 4.1999 9.80005 2.3999 12.2 2.3999H14.8"
                          stroke="#6366F1"
                          stroke-width="3.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M22.8 2.5H24.4"
                          stroke="#6366F1"
                          stroke-width="3.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M101.2 2.5H137.9C140.3 2.5 142.3 4.3 142.3 6.6V91.3C142.3 93.6 140.3 95.4 137.9 95.4H92.7C84.7 95.4 77.9 100.6 76 107.5H75.5V18.7C75.5 14.1 77.5 10 80.8 7.1C83.9 4.3 88.1 2.6 92.8 2.6H94.7"
                          stroke="#6366F1"
                          stroke-width="3.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M29.7002 79H44.1002"
                          stroke="#A5B4FC"
                          stroke-width="3.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M20.1001 79H22.7001"
                          stroke="#A5B4FC"
                          stroke-width="3.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M47.3 67.5999H61.6"
                          stroke="#A5B4FC"
                          stroke-width="3.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M20.4001 67.5999H41.3001"
                          stroke="#A5B4FC"
                          stroke-width="3.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M20.7002 56.0999H51.2002"
                          stroke="#A5B4FC"
                          stroke-width="3.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M20.7002 33.3999H51.2002"
                          stroke="#A5B4FC"
                          stroke-width="3.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M42.5 44.7H62.2"
                          stroke="#A5B4FC"
                          stroke-width="3.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M21 44.7H36.2"
                          stroke="#A5B4FC"
                          stroke-width="3.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M52.8 21.2H62.2001"
                          stroke="#A5B4FC"
                          stroke-width="3.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M21 21.2H45.3"
                          stroke="#A5B4FC"
                          stroke-width="3.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M98.6001 64.7H112.4"
                          stroke="#A5B4FC"
                          stroke-width="3.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M89.5 64.7H91.9"
                          stroke="#A5B4FC"
                          stroke-width="3.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M115.4 53.3999H129.1"
                          stroke="#A5B4FC"
                          stroke-width="3.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M89.7 53.3999H109.7"
                          stroke="#A5B4FC"
                          stroke-width="3.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M90 42.0999H119.2"
                          stroke="#A5B4FC"
                          stroke-width="3.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M110.8 30.8999H129.6"
                          stroke="#A5B4FC"
                          stroke-width="3.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M90.3 30.8999H104.8"
                          stroke="#A5B4FC"
                          stroke-width="3.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M120.6 20.0999H129.6"
                          stroke="#A5B4FC"
                          stroke-width="3.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M90.3 20.0999H113.5"
                          stroke="#A5B4FC"
                          stroke-width="3.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M94.1999 101.9L91.7999 99.1999L88.8999 102C88.4999 102.3 87.8999 102.1 87.8999 101.7V3.6999C87.8999 2.9999 88.4999 2.3999 89.1999 2.3999H95.2999V101.5C95.1999 102.1 94.4999 102.3 94.1999 101.9Z"
                          fill="#E0E7FF"
                          stroke="#6366F1"
                          stroke-width="3.2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </span>
                    <h3 className="heading">Simulate the real world</h3>
                    <p className="paragraph">
                      Generate images from a photorealistic simulation <br />
                      leveraging the power of Omniverse Replicator, <br />
                      that is seamlessly integrated with Edge Impulse.
                    </p>
                    <div className="blue-btn">
                      <button>Read More</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="list-item">
              <div className="row">
                <div className="col-6">
                  <div className="image-data-section">
                    <span>
                      <svg
                        width="80"
                        viewBox="0 0 151 125"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M148.9 10.7999V114.8C148.9 119 145.5 122.4 141.3 122.4H9.90005C5.70005 122.4 2.30005 119 2.30005 114.8V9.89989C2.30005 5.99989 5.50005 2.79989 9.40005 2.79989H140.8C145.3 2.69989 148.9 6.29989 148.9 10.7999Z"
                          fill="white"
                        ></path>
                        <path
                          d="M99.6 22.0002H2.19995V10.3002C2.19995 6.1002 5.59995 2.7002 9.79995 2.7002H141.2C145.4 2.7002 148.8 6.1002 148.8 10.3002V22.0002H123.2"
                          fill="white"
                        ></path>
                        <path
                          d="M148.9 10.8001V21.6001H2.30005V11.5001C2.30005 6.6001 6.30005 2.6001 11.2 2.6001H140.9C145.3 2.7001 148.9 6.3001 148.9 10.8001Z"
                          fill="#E0E7FF"
                        ></path>
                        <path
                          d="M139.5 21.7002H147.8"
                          stroke="#6366F1"
                          stroke-width="3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M128.8 21.7002H129.7"
                          stroke="#6366F1"
                          stroke-width="3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M2.80005 21.7002H91.1"
                          stroke="#6366F1"
                          stroke-width="3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M15.3 15.8002C17.1225 15.8002 18.6 14.3227 18.6 12.5002C18.6 10.6777 17.1225 9.2002 15.3 9.2002C13.4775 9.2002 12 10.6777 12 12.5002C12 14.3227 13.4775 15.8002 15.3 15.8002Z"
                          fill="#E45745"
                        ></path>
                        <path
                          d="M26.1 15.8002C27.9226 15.8002 29.4 14.3227 29.4 12.5002C29.4 10.6777 27.9226 9.2002 26.1 9.2002C24.2775 9.2002 22.8 10.6777 22.8 12.5002C22.8 14.3227 24.2775 15.8002 26.1 15.8002Z"
                          fill="#F5A623"
                        ></path>
                        <path
                          d="M37 15.8002C38.8225 15.8002 40.2999 14.3227 40.2999 12.5002C40.2999 10.6777 38.8225 9.2002 37 9.2002C35.1774 9.2002 33.7 10.6777 33.7 12.5002C33.7 14.3227 35.1774 15.8002 37 15.8002Z"
                          fill="#FFD792"
                        ></path>
                        <path
                          d="M2.30005 66.0999V64.8999"
                          stroke="#6366F1"
                          stroke-width="3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M2.30005 58.6003V10.4003C2.30005 6.20029 5.70005 2.80029 9.90005 2.80029H141.3C145.5 2.80029 148.9 6.20029 148.9 10.4003V114.8C148.9 119 145.5 122.4 141.3 122.4H9.90005C5.70005 122.4 2.30005 119 2.30005 114.8V81.0003"
                          stroke="#6366F1"
                          stroke-width="3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M48 30.8003H14.5V68.6003H48V30.8003Z"
                          stroke="#A5B4FC"
                          stroke-width="3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M31.2 51.0002C35.287 51.0002 38.6 47.6871 38.6 43.6002C38.6 39.5133 35.287 36.2002 31.2 36.2002C27.1131 36.2002 23.8 39.5133 23.8 43.6002C23.8 47.6871 27.1131 51.0002 31.2 51.0002Z"
                          fill="#A5B4FC"
                        ></path>
                        <path
                          d="M21 55.5005H40.8"
                          stroke="#A5B4FC"
                          stroke-width="3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M25.3999 60.8003H36.3999"
                          stroke="#A5B4FC"
                          stroke-width="3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M89.0999 30.8003H55.5999V68.6003H89.0999V30.8003Z"
                          stroke="#A5B4FC"
                          stroke-width="3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M72.2999 51.0002C76.3868 51.0002 79.6999 47.6871 79.6999 43.6002C79.6999 39.5133 76.3868 36.2002 72.2999 36.2002C68.213 36.2002 64.8999 39.5133 64.8999 43.6002C64.8999 47.6871 68.213 51.0002 72.2999 51.0002Z"
                          fill="#A5B4FC"
                        ></path>
                        <path
                          d="M62.2 55.5005H82"
                          stroke="#A5B4FC"
                          stroke-width="3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M66.5999 60.8003H77.5999"
                          stroke="#A5B4FC"
                          stroke-width="3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M140 30.8003H101.3V87.9003H140V30.8003Z"
                          stroke="#A5B4FC"
                          stroke-width="3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M137.8 111.6H103.6C102.4 111.6 101.4 110.6 101.4 109.4V97.2C101.4 96 102.4 95 103.6 95H137.8C139 95 140 96 140 97.2V109.4C140 110.6 139 111.6 137.8 111.6Z"
                          fill="#818CF8"
                          stroke="#6366F1"
                          stroke-width="3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M48 74.8003H14.5V112.6H48V74.8003Z"
                          stroke="#A5B4FC"
                          stroke-width="3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M31.2 95.0002C35.287 95.0002 38.6 91.6871 38.6 87.6002C38.6 83.5133 35.287 80.2002 31.2 80.2002C27.1131 80.2002 23.8 83.5133 23.8 87.6002C23.8 91.6871 27.1131 95.0002 31.2 95.0002Z"
                          fill="#A5B4FC"
                        ></path>
                        <path
                          d="M21 99.5005H40.8"
                          stroke="#A5B4FC"
                          stroke-width="3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M25.3999 104.7H36.3999"
                          stroke="#A5B4FC"
                          stroke-width="3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M89.0999 74.8003H55.5999V112.6H89.0999V74.8003Z"
                          stroke="#A5B4FC"
                          stroke-width="3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M72.2999 95.0002C76.3868 95.0002 79.6999 91.6871 79.6999 87.6002C79.6999 83.5133 76.3868 80.2002 72.2999 80.2002C68.213 80.2002 64.8999 83.5133 64.8999 87.6002C64.8999 91.6871 68.213 95.0002 72.2999 95.0002Z"
                          fill="#A5B4FC"
                        ></path>
                        <path
                          d="M62.2 99.5005H82"
                          stroke="#A5B4FC"
                          stroke-width="3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M66.5999 104.7H77.5999"
                          stroke="#A5B4FC"
                          stroke-width="3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M115.2 49.0999H108.2C107.3 49.0999 106.6 48.3999 106.6 47.4999V40.4999C106.6 39.5999 107.3 38.8999 108.2 38.8999H115.2C116.1 38.8999 116.8 39.5999 116.8 40.4999V47.4999C116.9 48.3999 116.1 49.0999 115.2 49.0999Z"
                          fill="#A5B4FC"
                        ></path>
                        <path
                          d="M121.3 41.1997H132.9"
                          stroke="#A5B4FC"
                          stroke-width="3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M121.3 46.6997H126.9"
                          stroke="#A5B4FC"
                          stroke-width="3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M115.2 65.0003H108.2C107.3 65.0003 106.6 64.3003 106.6 63.4003V56.4003C106.6 55.5003 107.3 54.8003 108.2 54.8003H115.2C116.1 54.8003 116.8 55.5003 116.8 56.4003V63.4003C116.9 64.3003 116.1 65.0003 115.2 65.0003Z"
                          fill="#A5B4FC"
                        ></path>
                        <path
                          d="M121.3 57.1001H132.9"
                          stroke="#A5B4FC"
                          stroke-width="3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M121.3 62.6001H126.9"
                          stroke="#A5B4FC"
                          stroke-width="3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M115.2 80.9002H108.2C107.3 80.9002 106.6 80.2002 106.6 79.3002V72.3002C106.6 71.4002 107.3 70.7002 108.2 70.7002H115.2C116.1 70.7002 116.8 71.4002 116.8 72.3002V79.3002C116.9 80.2002 116.1 80.9002 115.2 80.9002Z"
                          fill="#A5B4FC"
                        ></path>
                        <path
                          d="M121.3 73H132.9"
                          stroke="#A5B4FC"
                          stroke-width="3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M121.3 78.5H126.9"
                          stroke="#A5B4FC"
                          stroke-width="3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M131.1 104.2L127.5 107.8C127.1 108.2 126.3 108.2 125.9 107.8C125.5 107.4 125.5 106.6 125.9 106.2L127.6 104.5H112.6C112 104.5 111.5 104 111.5 103.4C111.5 102.8 112 102.3 112.6 102.3H127.6L125.9 100.6C125.5 100.2 125.5 99.4002 125.9 99.0002C126.1 98.8002 126.4 98.7002 126.7 98.7002C127 98.7002 127.3 98.8002 127.5 99.0002L131.1 102.6C131.3 102.8 131.4 103.1 131.4 103.4C131.4 103.7 131.3 104 131.1 104.2Z"
                          fill="white"
                        ></path>
                      </svg>
                    </span>
                    <h3 className="heading">
                      Automate your image
                      data labeling with GenAI
                    </h3>
                    <p className="paragraph">
                      Optimize your labeling workflow with the help of the
                      latest AI <br />
                      models from Hugging Face, Open AI as well as your
                      previously <br />
                      trained models. Avoid tedious and time consuming manual
                      labeling <br />
                      with AI Labeling to automatically inspect, label and
                      validate your <br />
                      dataset in record time, through a powerful and flexible
                      workflow <br />
                      builder.
                    </p>
                    <div className="blue-btn">
                      <button>Read More</button>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div>
                    <img
                      src="Images/678e4bd56fc92d59d9422c5e_Image Data Labeling Projects.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="section-card-new">
         <div className="fomo-header">
         <h2 className="heading">
            Latest <span className="color-header">Edge AI </span>Vision Madels
          </h2> 
          <p>
          Augment your datasets by leveraging the latest foundational
models from OpenAI and Hugging Face<br/> to generate photorealistic
images all from within the Edge Impulse platform.
          </p>
         </div>
         <div className="fomo-cards-section">
          <div className="row g-0">
            <div className="col-md-4">
              <div className="fomo-card fomo-border">
              <div className="icon">
              <FaRegCircleCheck />

                  </div>
                <div className="header">
                  <h2>
                  FOMO
                  </h2>
                  <p>The only object detection model that can run on constrained
                  devices, designed from the ground up for the edge, and is able
                  to achieve 30x better </p>
                </div>
              </div>

            </div>
            <div className="col-md-4">
              <div className="fomo-card ad-border ">
              <div className="icon">
              <FaRegCircleCheck />

                  </div>
                <div className="header">
                  <h2>
                  FOMO AD
                  </h2>
                  <p>The only object detection model that can run on constrained
                  devices, designed from the ground up for the edge, and is able
                  to achieve 30x better </p>
                </div>
              </div>

            </div>
            <div className="col-md-4">
              <div className="fomo-card">
              <div className="icon">
              <FaRegCircleCheck />

                  </div>
                <div className="header">
                  <h2>
                  YOLO-Pro
                  </h2>
                  <p>The only object detection model that can run on constrained
                  devices, designed from the ground up for the edge, and is able
                  to achieve 30x better </p>
                </div>
              </div>

            </div>
          </div>
         </div>
          {/* <CardGroup>
            <Card>
              <Card.Body>
                <Card.Title>
                  {" "}
                  <div className="icon">
                    <FaCircleCheck />
                  </div>
                  FOMO (Faster Objects, More Objects)
                </Card.Title>
                <Card.Text>
                  The only object detection model that can run on constrained
                  devices, designed from the ground up for the edge, and is able
                  to achieve 30x better performance than MobileNet SSD and to
                  run in 200K of RAM. Read more
                </Card.Text>
                <Card.Link href="#">
                  Read more
                  <FaAngleRight />
                </Card.Link>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>
                  {" "}
                  <div className="icon">
                    <FaCircleCheck />
                  </div>
                  FOMO-AD
                </Card.Title>
                <Card.Text>
                  A set of visual anomaly detection models designed to scale and
                  be optimized to run efficiently on any edge device from
                  constrained microcontrollers to powerful accelerators. Build
                  models without the need to collect anomaly data, especially
                  for unanticipated defects. Read more
                </Card.Text>
                <Card.Link href="#">
                  Read more
                  <FaAngleRight />
                </Card.Link>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>
                  {" "}
                  <div className="icon">
                    <FaCircleCheck />
                  </div>
                  YOLO-Pro
                </Card.Title>
                <Card.Text>
                  The first object detection model trained with extensive
                  industrial datasets for optimal performance in real-world
                  industrial scenarios. Optimized and available in various sizes
                  to run efficiently on edge devices from CPUs to accelerators
                  and GPUs. Read more
                </Card.Text>
                <Card.Link href="#">
                  Read more
                  <FaAngleRight />
                </Card.Link>
              </Card.Body>
            </Card>
          </CardGroup> */}
        </div>
        <div className="section-new-grid">
          <div className="row gy-5">
            <div className="col-6">
              <div className="section-new-text">
                <h1 className="heading">
                  Unlock <span className="color-header">Edge AI</span>{" "}
                  Experimentation
                </h1>
                <p className="body">
                  Edge Impulse enables teams to develop and deploy edge <br />
                  AI models that deliver meaningful business insights.
                </p>
              </div>
            </div>
            <div className="col-6">
              <Card>
                <Card.Body>
                  <h3 className="heading">Experiments</h3>
                  <p className="body">
                    Accelerate your project development by experimenting with
                    different ML models simultaneously.
                  </p>
                  <div className="image">
                    <img
                      src="Images/677d3b26be0011d53404e316_Mask Group (2).png"
                      alt=""
                    />
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="col-6">
              <Card>
                <Card.Body>
                  <h3 className="heading">EON Tuner</h3>
                  <p className="body">
                    Find and select the best computer vision model for your{" "}
                    <br />
                    application within the constraints of your target device.
                    The EON brTuner analyzes your data and all the possible
                    neural network <br />
                    architectures - and gives you an overview of the optimal set
                    of <br />
                    models that will fit your chosen device’s latency and memory{" "}
                    <br />
                    requirements.
                  </p>
                  <div className="image">
                    <img
                      src="Images/677d3bb1c39f81ede0caaad4_Image 461 (1).png"
                      alt=""
                    />
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="col-6">
              <Card>
                <Card.Body>
                  <h3 className="heading">Optimization and Deployment</h3>
                  <p className="bodys">
                    Everything you develop will be able to be optimized and run
                    on the <br />
                    largest variety of devices, thanks to our EON Compiler and
                    our <br />
                    flexible deployment options.
                  </p>
                  <div className="image">
                    <img
                      src="Images/677d3bc2d2b5d0bccdf5b811_Image 471 from Figma.png"
                      alt=""
                    />
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
        <div className="section-new-second">
          <h1 className="heading">
            <span className="color-header">Case Studies</span>{" "}
          </h1>
          <CardGroup>
            <Card>
              <Card.Img
                variant="top"
                src="Images/674461d1ee7f11e4fecf749a_AdobeStock_815036679-min.jpeg"
              />
              <Card.Body>
                {/* <card-link> */}
                <a href="#" className="link">
                  Health
                </a>
                <div className="calendar-section">
                  <span><FaRegCalendarDays />
                  </span>
                  <span>Feb 12, 2025</span>

                </div>
                {/* </card-link> */}
                <Card.Title>
                  Revolutionizing Fall Detection with Edge AI
                </Card.Title>
                <Card.Text>
                  The prevalence of falls among the elderly 
                  and those with limited mobility is a 
                  significant factor for personal safety
                  and independence, one which affects the broader
                  context of healthcare and support systems.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img
                variant="top"
                src="Images/65f1b1c131337298952e8bab_1 HERO image-p-500.avif"
              />
              <Card.Body>
              <a href="#" className="link">
                  Health
                </a>
                <div className="calendar-section">
                  <span><FaRegCalendarDays />
                  </span>
                  <span>Feb 12, 2025</span>

                </div>
                <Card.Title>
                  Industrial Asset Tracking with <br />
                  NVIDIA Omniverse and TAO
                </Card.Title>
                <Card.Text>
                  In this case study, we will look at pallet counting, a key
                  part of global shipping and logistics systems.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img
                variant="top"
                src="Images/61c1ad2f3b22ed164f29d49e_AI-Automated Hard-Hat Detection.avif"
              />
              <Card.Body>
              <a href="#" className="link">
                  Health
                </a>
                <div className="calendar-section">
                  <span><FaRegCalendarDays />
                  </span>
                  <span>Feb 12, 2025</span>

                </div>
                <Card.Title>AI-Automated Hard-Hat Detection</Card.Title>
                <Card.Text>
                  Enhancing health and safety in industrial environments with
                  embedded machine learning.
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
        </div>
        {/* <div className="section-new-last">
          <div className="section-big-card">
            <div className="row">
              <div className="col-6">
                <h2 className="heading">
                  Start using Edge Impulse for Computer Vision applications
                </h2>
                <p className="paragraph">
                  Reach out to our experts to learn how Edge Impulse can give
                  you the competitive edge.
                </p>
                <div className="btn-white">
                  <button>Get Started</button>
                </div>
              </div>
              <div className="col-6 p-0">
                <div className="image">
                  <img
                    src="Images/677edc7898a1a835273c87ee_Edge Impulse Website Redesign 2024 (1)-p-800.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default page;
