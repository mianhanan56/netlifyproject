import React from 'react'


function BrickCard() {
  return (
    <>
    <div className='brick-cards'>
        <div className="heading">
            <h2>Main applications</h2>
        </div>
        <div className="row gy-5" style={{alignItems:'center'}}>
            <div className="col-3">
                <div className="card-body">
                    <img src="Images/brick-card-img-01.svg" alt="brick-card-img-01" />
                    <p>Embedded Machine Learning</p>
                </div>
            </div>
            <div className="col-3">
                <div className="card-body">
                    <img src="Images/brick-card-img-01.svg" alt="brick-card-img-01" />
                    <p>Inference at the Edge</p>
                </div>
            </div>
            <div className="col-3">
                <div className="card-body">
                    <img src="Images/brick-card-img-01.svg" alt="brick-card-img-01" />
                    <p>Anomaly
                    Detection</p>
                </div>
            </div>
            <div className="col-3">
                <div className="card-body">
                    <img src="Images/brick-card-img-01.svg" alt="brick-card-img-01" />
                    <p>Voice and Sound Classification</p>
                </div>
            </div>
            <div className="col-3">
                <div className="card-body">
                    <img src="Images/brick-card-img-01.svg" alt="brick-card-img-01" />
                    <p>Voice and Sound Classification</p>
                </div>
            </div>
            <div className="col-3">
                <div className="card-body">
                    <img src="Images/brick-card-img-01.svg" alt="brick-card-img-01" />
                    <p>Voice and Sound Classification</p>
                </div>
            </div>
            <div className="col-3">
                <div className="card-body">
                    <img src="Images/brick-card-img-01.svg" alt="brick-card-img-01" />
                    <p>Voice and Sound Classification</p>
                </div>
            </div>
        </div>

    </div>

    </>
  )
}

export default BrickCard
