import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import EdgeSlider from '../Components/EdgeSlider';


function EdgeImpulse() {
  return (
    <>
      <div className="edge-impulse-container">
        <div className="container">
          <div className="edge-impulse-heading">
            <h1>
              The Latest from Edge Impulse
            </h1>
            <p>Accelerate Innovation with Seamless Collaboration for Production-Ready Models.Accelerate Innovation with Seamless Collaboration for Production-Ready Models</p>
          </div>
          <div className="edge-impulse-cards">
            <EdgeSlider/>
            {/* <div className="row">
            <div className="col-md-4">
                <div className="edge-impulse-card">
                  <div className="edge-impulse-img">
                    <img
                      src="https://cdn.prod.website-files.com/618cdeef45d18e4ef2fd85f3/675999bfe8781491128b863b_image%20343-p-800.avif"
                      alt=""
                    />
                  </div>
                  <div className="ultimate-guide-header">
                    <h4>Ultimate Guide to Edge Ai</h4>
                    <p>
                      Edge Impulse, the leading edge AI development platform,
                      brings intelligence to any edge device
                    </p>
                    <a href="#">Read More <IoIosArrowForward />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="edge-impulse-card">
                  <div className="edge-impulse-img">
                    <img
                      src="https://cdn.prod.website-files.com/618cdeef45d18e4ef2fd85f3/675999bfe8781491128b863b_image%20343-p-800.avif"
                      alt=""
                    />
                  </div>
                  <div className="ultimate-guide-header">
                    <h4>Ultimate Guide to Edge Ai</h4>
                    <p>
                      Edge Impulse, the leading edge AI development platform,
                      brings intelligence to any edge device
                    </p>
                    <a href="#">Read More <IoIosArrowForward />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="edge-impulse-card">
                  <div className="edge-impulse-img">
                    <img
                      src="https://cdn.prod.website-files.com/618cdeef45d18e4ef2fd85f3/675999bfe8781491128b863b_image%20343-p-800.avif"
                      alt=""
                    />
                  </div>
                  <div className="ultimate-guide-header">
                    <h4>Ultimate Guide to Edge Ai</h4>
                    <p>
                      Edge Impulse, the leading edge AI development platform,
                      brings intelligence to any edge device
                    </p>
                    <a href="#">Read More <IoIosArrowForward />
                    </a>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default EdgeImpulse;
