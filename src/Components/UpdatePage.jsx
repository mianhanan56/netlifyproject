import React from "react";
import { IoIosArrowForward } from "react-icons/io";


function UpdatePage() {
  return (
    <div className="update-page">
      <div className="container">
        <div className="update-heading">
          <h1>Stay <span className="color-header">updated</span> with the latest</h1>
          <a href="#"> View all <IoIosArrowForward />
          </a>
        </div>
        <div className="update-page-cards">
          <div className="row">
            <div className="col-md-6">
              <div className="update-page-card">
              <div className="update-page-img">
                  <img src="https://cdn.prod.website-files.com/61925c69a0bbf45243511187/667d851f6eab6e61b27061f3_Screenshot%202024-06-27%20at%2017.28.16.avif" alt="" />
                </div>
                <div className="update-page-heading">
                  <div className="header"><h1>EDGE AI</h1></div>
                  <h5>
                    Introducing the Professional Plan: Unlock Advanced Edge AI
                    Features for You
                  </h5>
                </div>

              </div>
            </div>

            <div className="col-md-6">
              <div className="update-page-card">
                <div className="update-page-img">
                  <img src="https://cdn.prod.website-files.com/61925c69a0bbf45243511187/667d851f6eab6e61b27061f3_Screenshot%202024-06-27%20at%2017.28.16.avif" alt="" />
                </div>
                <div className="update-page-heading">
                  <div className="header"><h1>EDGE AI</h1></div>
                  <h5>
                    Introducing the Professional Plan: Unlock Advanced Edge AI
                    Features for You
                  </h5>
                </div>
              </div>
            </div>
{/* 
            <div className="col-md-6">
              <div className="update-page-card">
                <div className="update-page-img">
                  <img src="https://cdn.prod.website-files.com/61925c69a0bbf45243511187/667d851f6eab6e61b27061f3_Screenshot%202024-06-27%20at%2017.28.16.avif" alt="" />
                </div>
                <div className="update-page-heading">
                <div className="header"><h1>EDGE AI</h1></div>
                  <h5>
                    Introducing the Professional Plan: Unlock Advanced Edge AI
                    Features for You
                  </h5>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdatePage;
