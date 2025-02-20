import React from 'react'
import { Badge } from 'react-bootstrap'
import { FaCheck } from "react-icons/fa6";

const Inteligence = () => {
  return (
    <>
      <div className="intelligence-wrapper">
        <div className="container">
          <div className="intelligence-container">
            <div className="row gx-5">
              <div className="col-lg-6">
                <div className=" intelligence-left ">
                  <Badge>Intelligence</Badge>
                  <h2 className="display-4">Bring Intelligence to Any Edge Device</h2>
                  <p className="lead">
                    Edge Impulse, the leading edge AI development platform, brings intelligence to any edge device.
                    Our platform and in-house experts will accelerate your delivery of next generation products and solutions.
                  </p>
                  <div className="mb-4 icons-left ">
                    <div className="row gy-3">
                      <div className="col-md-12">
                        <div className='flex-icons'>
                          <FaCheck />
                          <p className="h6"><strong>Remove hidden:</strong>  complexities and tedious repetitive steps</p>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className='flex-icons'>
                          <FaCheck />
                          <p className="h6"><strong>Remove hidden:</strong>  complexities and tedious repetitive steps</p>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className='flex-icons'>
                          <FaCheck />
                          <p className="h6"><strong>Remove hidden:</strong>  complexities and tedious repetitive steps</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='blue-btn'>
                    <button>Try it Now</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="intelligence-right">
                  <div className="text-center">
                    <img src="https://cdn.prod.website-files.com/618cdeef45d18e4ef2fd85f3/66a253ef787837829651228a_Screenshot%202021-12-23%20at%2010.45%202%20(1).webp" loading="lazy" className="img-fluid" style={{ maxHeight: '651.82px' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Inteligence
