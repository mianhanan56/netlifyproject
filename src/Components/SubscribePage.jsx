import React from 'react'

function SubscribePage() {
  return (
    <div className='container'>
       <div className="whole-subscribe-div">
            {/* <div className="container"> */}
              <div className="subscribe">
                <div className="text">
                  <h2>Join our One More Epoch monthly newsletter</h2>
                  <p>
                    Keep up with the latest ML news from Edge Impulse and the
                    rest of the industry.
                  </p>
                </div>
                <div className="blue-btn">
                    <input type="text" placeholder='Your email address' />
                  <button>Subscribe</button>
                </div>
              </div>
            </div>
          </div>
    // </div>
  )
}

export default SubscribePage
