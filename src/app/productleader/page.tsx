"use client";

import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import ProductLeaderSlider from '../../Components/ProductLeaderSlider'
import { FaRegCheckCircle } from "react-icons/fa";



function page() {
  return (
    <div className="product-leader">
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-6">
             <div className="product-leader-new-section">
             <span className="vision-header">
                Edge AI
              </span>
              <h1 className="heading">
                <span className="color-header">Transform</span> your
                product  <br/>strategy
                with <span className="color-header">edge AI</span>
              </h1>
              <p className="paragraph">
                Edge Impulse enables innovative companies to 
                quickly develop and deploy AI models that 
                deliver meaningful business insights at the 
                edge.
              </p>
              <div className="btn-blue">
                <button>Schedule a Demo</button>
              </div>
             </div>
              {/* <div className="image">
                <img src="Images/Screenshot 2025-01-28 003231.png" alt="" />
              </div> */}
            </div>
            <div className="col-6">
                <div className='image'>
                    <img src="Images/Screenshot 2025-01-28 003231.png" alt="" />
                </div>
            </div>
          </div>
        </div>
        </div>
        <div className="section-product">
          <div className="container">
          <div className="row">
            <div className="col-4">
              <p className="paragraph">
                The world’s most innovative companies <br />
                chose Edge Impulse.
              </p>
            </div>

            <div className="col-8">
              <ProductLeaderSlider/>
            </div>
            
            {/* <div className="col-2">
              <img src="Images/646b6f376cfd1c323de67178_Sony.svg" alt="" />
            </div>
            <div className="col-2">
              <img src="Images/646b6f3fa81086f652be180a_Oura (2).svg" alt="" />
            </div>
            <div className="col-2">
              <img
                src="Images/654e5f9e0a27470ca4643067_Nordic_Semiconductor.svg"
                alt=""
              />
            </div>
            <div className="col-2">
              <img src="Images/654ce97c5e8ce1f1fd0bd61f_Nvidia.svg" alt="" />
            </div> */}
          </div>
          </div>
        </div>
        <div className="section-new">
        <div className="container">
        <div className="row">
            <div className="col-6">
             <div className="edge-product-section">
              <span className="edge-header">Edge Impulse</span>
             <h1 className="heading">
                Revolutionize
                your edge  
                products with
                 Edge Impulse
              </h1>
              <p className="paragraph">
                Edge Impulse enables product managers 
                to harness the power of AI to design 
                better health wearables, always-on visual 
                inspection systems, and smarter industrial 
                machines, with faster speed and 
                effectiveness.
              </p>
             </div>
            </div>
            <div className="col-6">
              <div className="edge-product-right-section">
              <div className="row gy-4">
                <div className="col-6">
                  <div className="edge-impulse-1">
                    <span className="edge-rate">50 +</span>
                    <p className="edge-head">Edge Impulse </p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="edge-impulse-1">
                    <span className="edge-rate">50 +</span>
                    <p className="edge-head">Edge Impulse </p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="edge-impulse-1">
                    <span className="edge-rate">50 +</span>
                    <p className="edge-head">Edge Impulse </p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="edge-impulse-1">
                    <span className="edge-rate">50 +</span>
                    <p className="edge-head">Edge Impulse </p>
                  </div>
                </div>
              </div>
              </div>
              {/* <div className="image">
                <img
                  src="Images/6478aca3f3c241cb0adafa24_Revolutionize your edge products with Edge Impulse.webp"
                  alt=""
                />
              </div> */}
            </div>
          </div>
        </div>
        </div>
        <div className="section-new-grid">
          <div className="container">
            <div className="market-accelerate">
              <h1>
              Accelerate AI Development with Confidence
              </h1>

            </div>
          <CardGroup>
            <Card>
              <Card.Body>
                {/* <img
                  src="Images/646b742842c6751e7fb41eea_Faster time to market.svg"
                  alt=""
                /> */}
                <Card.Title>
                <img
                  src="Images/646b742842c6751e7fb41eea_Faster time to market.svg"
                  alt=""
                />
                  Faster time to market
                  </Card.Title>
                <Card.Text>
                  Solve key business challenges with a trusted <br />
                  edge AI platform and recognize a measurable <br />
                  return on investment in months.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>
                <img
                  src="Images/646b7429fc3ceffd6c9fb8e5_Maximized product performance.svg"
                  alt=""
                />
                  More reliable products
                  </Card.Title>
                <Card.Text>
                  Build a product that seamlessly operates for <br />
                  longer periods in any environment without ever <br />
                  compromising responsiveness.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>
                <img
                  src="Images/646b7428323aa40616405558_AICPA SOC 2 certified.svg"
                  alt=""
                />
                  AICPA SOC 2 certified
                  </Card.Title>
                <Card.Text>
                  Edge Impulse adheres to strict security and <br />
                  privacy standards. We are SOC2 certified.
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
          <CardGroup>
            <Card>
              <Card.Body>
                {/* <img
                  src="Images/646b742842c6751e7fb41eea_Faster time to market.svg"
                  alt=""
                /> */}
                <Card.Title>
                <img
                  src="Images/646b742842c6751e7fb41eea_Faster time to market.svg"
                  alt=""
                />
                  Faster time to market
                  </Card.Title>
                <Card.Text>
                  Solve key business challenges with a trusted <br />
                  edge AI platform and recognize a measurable <br />
                  return on investment in months.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>
                <img
                  src="Images/646b7429fc3ceffd6c9fb8e5_Maximized product performance.svg"
                  alt=""
                />
                  More reliable products
                  </Card.Title>
                <Card.Text>
                  Build a product that seamlessly operates for <br />
                  longer periods in any environment without ever <br />
                  compromising responsiveness.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>
                <img
                  src="Images/646b7428323aa40616405558_AICPA SOC 2 certified.svg"
                  alt=""
                />
                  AICPA SOC 2 certified
                  </Card.Title>
                <Card.Text>
                  Edge Impulse adheres to strict security and <br />
                  privacy standards. We are SOC2 certified.
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
          </div>
        </div>
        <div className="accelerate">
         <div className="container">
         <div className="row">
            <div className="col-6">
              <div className="image">
                <img
                  src="Images/646b7b76f6907682fc1e6048_Accelerate your product development.webp"
                  alt=""
                />
              </div>
            </div>
            <div className="col-6">
             <div className="product-left">
             <div className="product-left-head">
             <h3 className="heading">
                <span className="color-header">Accelerate</span> your <br />
                product <span className="color-header">development</span>
              </h3>
              <p>Build a product that seamlessly operates for longer periods in any environment without ever compromising responsiveness.</p>
             </div>
            <div>
            <div className="product-left-content">
             <FaRegCheckCircle />
             <p>
             Faster time to market
             </p>

             </div>
             <div className="product-left-content">
             <FaRegCheckCircle />
             <p>
            High-quality sensor datasets
             </p>

             </div>
             <div className="product-left-content">
             <FaRegCheckCircle />
             <p>
             Continuous improvement
             </p>

             </div>
             <div className="product-left-content">
             <FaRegCheckCircle />
             <p>
             Continuous improvement
             </p>

             </div>
            </div>
             <div className="btn-blue">
              <button>Read more</button>
             </div>
              {/* <h5 className="heading-2">Faster time to market</h5>
              <p className="paragraph">
                Shorten your product development lifecycle by leveraging pre-{" "}
                <br />
                built workflows and pre-trained models for health and industrial{" "}
                <br />
                use cases.
              </p>
              <h5 className="heading-2">High-quality sensor datasets</h5>
              <p className="paragraph">
                Leverage domain specific expertise to securely build
                high-quality <br />
                datasets to achieve your business outcomes faster and in a more{" "}
                <br />
                cost-effective way.
              </p>
              <h5 className="heading-2">Continuous improvement</h5>
              <p className="paragraph">
                Make your product better with support for continuous learning,{" "}
                <br />
                enabling models to improve over time as more data becomes <br />
                available.
              </p> */}
             </div>
            </div>
          </div>
         </div>
        </div>
        <div className="accelerate monitor">
         <div className="container">
         <div className="row">
         <div className="col-6">
             <div className="product-left">
             <div className="product-left-head">
             <h3 className="heading">
             Monitor the progress of all projects

              </h3>
              <p>Build a product that seamlessly operates for longer periods in any environment without ever compromising responsiveness.</p>
             </div>
            <div>
            <div className="product-left-content">
             <FaRegCheckCircle />
             <p>
             Track progress on all projects

             </p>

             </div>
             <div className="product-left-content">
             <FaRegCheckCircle />
             <p>
             Highly configurable dashboards
             </p>

             </div>
             <div className="product-left-content">
             <FaRegCheckCircle />
             <p>
             Stay informed
             </p>

             </div>
             <div className="product-left-content">
             <FaRegCheckCircle />
             <p>
             Continuous improvement
             </p>

             </div>
            </div>
             <div className="btn-blue">
              <button>Read more</button>
             </div>
              {/* <h5 className="heading-2">Faster time to market</h5>
              <p className="paragraph">
                Shorten your product development lifecycle by leveraging pre-{" "}
                <br />
                built workflows and pre-trained models for health and industrial{" "}
                <br />
                use cases.
              </p>
              <h5 className="heading-2">High-quality sensor datasets</h5>
              <p className="paragraph">
                Leverage domain specific expertise to securely build
                high-quality <br />
                datasets to achieve your business outcomes faster and in a more{" "}
                <br />
                cost-effective way.
              </p>
              <h5 className="heading-2">Continuous improvement</h5>
              <p className="paragraph">
                Make your product better with support for continuous learning,{" "}
                <br />
                enabling models to improve over time as more data becomes <br />
                available.
              </p> */}
             </div>
            </div>
            <div className="col-6">
              <div className="image">
                <img src="Images/64796ccd72565e3503dd1c56_jan.webp" alt="" />
              </div>
            </div>
          </div>
         </div>
        </div>
        <div className="accelerate streamline">
          <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="image">
                <img
                  src="Images/646b7f7460d6928307b4e46d_Group 1805 (1).webp"
                  alt=""
                />
              </div>
            </div>
            <div className="col-6">
             <div className="product-left">
             <div className="product-left-head">
             <h3 className="heading">
             Streamline your machine learning process
              </h3>
              <p>Build a product that seamlessly operates for longer periods in any environment without ever compromising responsiveness.</p>
             </div>
            <div>
            <div className="product-left-content">
             <FaRegCheckCircle />
             <p>
             Reduce the cost of building a dataset
             </p>

             </div>
             <div className="product-left-content">
             <FaRegCheckCircle />
             <p>
            High-quality sensor datasets
             </p>

             </div>
             <div className="product-left-content">
             <FaRegCheckCircle />
             <p>
             Continuous improvement
             </p>

             </div>
             <div className="product-left-content">
             <FaRegCheckCircle />
             <p>
             Integrate with ease
             </p>

             </div>
            </div>
             <div className="btn-blue">
              <button>Read more</button>
             </div>
              {/* <h5 className="heading-2">Faster time to market</h5>
              <p className="paragraph">
                Shorten your product development lifecycle by leveraging pre-{" "}
                <br />
                built workflows and pre-trained models for health and industrial{" "}
                <br />
                use cases.
              </p>
              <h5 className="heading-2">High-quality sensor datasets</h5>
              <p className="paragraph">
                Leverage domain specific expertise to securely build
                high-quality <br />
                datasets to achieve your business outcomes faster and in a more{" "}
                <br />
                cost-effective way.
              </p>
              <h5 className="heading-2">Continuous improvement</h5>
              <p className="paragraph">
                Make your product better with support for continuous learning,{" "}
                <br />
                enabling models to improve over time as more data becomes <br />
                available.
              </p> */}
             </div>
            </div>
          </div>
          </div>
        </div>
        {/* <div className="whole-form">
          <div className="container">
            <div className="for-background">
              <div className="row">
                <div className="col-6">
                  <h2>Talk to a solutions specialist.</h2>
                  <p>
                    Future-proof your products. Our customers win by adding edge
                    intelligence to their products, from low-power wearables to
                    industrial gateways.
                  </p>
                  <p>Let&#39;s connect. </p>
                  <img
                    src="Images/646c85364ca3e5d965d7f0e6_Frame 39361.svg"
                    alt="dots"
                  />
                </div>
                <div className="col-6">
                  <form action="">
                    <div className="name-info">
                      <div className="first-name-div">
                        <label htmlFor="first-name">First name*</label>
                        <br />
                        <input
                          type="text"
                          className="fname"
                          name="first-name"
                        />
                      </div>
                      <div className="last-name-div">
                        <label htmlFor="last-name">Last name*</label>
                        <br />
                        <input type="text" className="lname" name="last-name" />
                      </div>
                    </div>
                    <div className="work-email-div">
                      <label htmlFor="work-email">Work email*</label>
                      <br />
                      <input type="text" className="fname" name="first-name" />
                    </div>
                    <div className="phone-num-div">
                      <label htmlFor="phone-number">Phone number</label>
                      <br />
                      <select name="country-number" id="country-number">
                        <option value="pakistan">
                          Pakistan (&#x202B;پاکستان&#x202C;&lrm;)
                        </option>
                        <option value="napal">Napal</option>
                        <option value="india">India</option>
                        <option value="thailand">Thailand</option>
                      </select>
                      <input type="number" name="number" placeholder="+92" />
                    </div>
                    <div className="country">
                      <label htmlFor="phone-number">Country*</label>
                      <br />
                      <select name="country-number" id="country-number">
                        <option value="pakistan">Please Select</option>
                        <option value="pakistan">Pakistan</option>
                        <option value="napal">Napal</option>
                        <option value="india">India</option>
                        <option value="thailand">Thailand</option>
                      </select>
                    </div>
                    <div className="info">
                      <p>
                        Edge Impulse needs the contact information you provide
                        to us to contact you about our products and services.
                        You may unsubscribe from these communications at any
                        time. For information on how to unsubscribe, as well as
                        our privacy practices and commitment to protecting your
                        privacy, please review our{" "}
                        <a href="#">Privacy Policy.</a>
                      </p>
                    </div>
                    <div className="blue-btn">
                      <button>Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className='footer-content'>
                <div className='footer-content-image'>
                    <img src={logo} alt="" />
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
                                <li><a href=""> Edge Impulse <br />
                                    3031 Tisch Way<br />
                                    110 Plaza West<br />  
                                    San Jose, CA 95128 <br />                     
                                    USA</a></li>
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
  );
}

export default page;
