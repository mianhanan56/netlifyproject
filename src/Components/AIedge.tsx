import React from 'react'
import Typewriter from 'typewriter-effect';
import { FaCheckCircle } from "react-icons/fa";

const AIedge = () => {
  return (
    <>
      <div className="hero-homepage-new">
        <div className="container">
          <div className="row gx-5">
            <div className="col-lg-6">
              <div className="hero-wrap-text">
                <div className="text-ticker_wrap">
                  <h1 className="h1-title cc-white">
                    AI for Any
                    <span>
                      <Typewriter
                        options={{
                          strings: [
                            'MCUs, NPUs, CPUs',
                            'Sensors & Cameras',
                            'Docker Containers',
                          ],
                          autoStart: true,
                          loop: true,
                        }}
                      />
                    </span> Edge Device</h1>
                </div>
                <div className="width-90 ">
                  <p className="body-18 cc-white">
                    Build <strong>datasets</strong>, train models, and <strong>optimize libraries</strong> to run directly on device;
                    from the smallest <strong>microcontrollers</strong> to gateways with the latest neural <strong>accelerators</strong> (and anything in between).
                  </p>
                </div>
                <div className="hero-cta text-start">
                  {/* <div className="project-btn">
    <a 
      href="#" 
      className="btn btn-outline-primary btn-lg text-white border-white">
      Discuss a Project
    </a>
  </div> */}
                  <a
                    href="https://studio.edgeimpulse.com/signup"
                    className="btn btn-primary btn-lg text-primary bg-white border-0">
                    Get Started
                  </a>
                  {/* <div className='arrow-img'>
                    <img src="https://hyperdynamicdn.fra1.chatflowassets.com/content/f/20250117190857/arrow-ai.svg" alt="" />
                  </div> */}
                  {/* <div className="project-btn">
    <a 
      href="#" 
      className="btn btn-outline-primary btn-lg text-white border-white">
      Discuss a Project
    </a>
  </div> */}
                </div>
                <div className='hero-features'>
                  <div>
                    <FaCheckCircle/> <span>Instant set up</span>
                  </div>
                  <div>
                    <FaCheckCircle/> <span>No Credit Card</span>
                  </div>
                  <div>
                    <FaCheckCircle/> <span>More customers forever</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <img src="https://cdn.prod.website-files.com/618cdeef45d18e4ef2fd85f3/665706b33d7a2ba51f98a10e_Graphic.webp" loading="lazy" id="w-node-_0a844481-7a82-34e6-16c5-cf3b19c3385b-866bd228" height="651.82" srcSet="https://cdn.prod.website-files.com/618cdeef45d18e4ef2fd85f3/665706b33d7a2ba51f98a10e_Graphic-p-500.png 500w, 
          https://cdn.prod.website-files.com/618cdeef45d18e4ef2fd85f3/665706b33d7a2ba51f98a10e_Graphic-p-800.webp 800w, 
          https://cdn.prod.website-files.com/618cdeef45d18e4ef2fd85f3/665706b33d7a2ba51f98a10e_Graphic-p-1080.webp 1080w, 
          https://cdn.prod.website-files.com/618cdeef45d18e4ef2fd85f3/665706b33d7a2ba51f98a10e_Graphic.webp 1569w" sizes="(max-width: 479px) 94vw, (max-width: 767px) 96vw, (max-width: 991px) 97vw, 
         (max-width: 1439px) 47vw, 632px" className="hero-img" />
            </div>
          </div>
        </div>
        {/* <img src="https://cdn.prod.website-files.com/618cdeef45d18e4ef2fd85f3/6657011d9df9b1cbb09dfcd0_Grid.svg" loading="lazy"  className="bg-hm" /> */}
      </div>


    </>
  )
}

export default AIedge
