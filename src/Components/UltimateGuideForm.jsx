import React from 'react'

function UltimateGuideForm() {
  return (
    <>
    <div className='ultimate-guide-form'>
    <form action="">
                    <div className="name-info">
                        <div className="first-name-div">
                        <label htmlFor="first-name">First name*</label>
                    <br />
                    <input type="text" className='fname' name='first-name' />
                        </div>
                 <div className="last-name-div">
                 <label htmlFor="last-name">Last name*</label>
                    <br />
                    <input type="text" className='lname' name='last-name' />
                 </div>           
                    </div>
                  <div className="work-email-div">
                  <label htmlFor="work-email">Work email*</label>
                    <br />
                    <input type="text" className='fname' name='first-name' />
                  </div>
                  <div className="company-div">
                    <label htmlFor="company">
                    Company*
                    </label>
                    <br />
                    <input type="text" name='text'/>
                  </div>
                  <div className="title-div">
                    <label htmlFor="job-title">
                    Job title
                    </label>
                    <br />
                    <input type="text" name='text'/>
                  </div>
                  <div className="country">
                  <label htmlFor="phone-number">
                      Country*
                    </label>
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
                   Edge Impulse needs the contact information you provide to us to contact you about our products and services. You may unsubscribe from these communications at any time. For information on how to unsubscribe, as well as our privacy practices and commitment to protecting your privacy, please review our <a href="#">Privacy Policy.</a> 
                    </p>
                    
                  </div>
                  <div className="blue-btn">
                  <button>Download now</button>
                  </div>
                </form>
    </div>
    </>
  )
}

export default UltimateGuideForm
