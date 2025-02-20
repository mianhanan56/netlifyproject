import React, { useState } from 'react';
import Image from 'next/image'; 
import dots from '../images/dots.svg';

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    workEmail: '',
    phoneNumber: '',
    country: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // For demonstration, you can replace it with actual submission logic
  };

  return (
    <>
      <div className="whole-form">
        <div className="container">
          <div className="for-background background-2">
            <div className="row">
              <div className="col-6">
                <h2>Talk to an edge AI expert</h2>
                <p>
                  Reach out and ask to connect with one of our AI experts. Our
                  team is ready to help you get started, so you can up your game,
                  and build your best products yet, from cloud to edge.
                </p>
                <p>Let&#39;s talk.</p>
                <Image src={dots} alt="dots" width={100} height={100} />
              </div>
              <div className="col-6">
                <form onSubmit={handleSubmit}>
                  <div className="name-info">
                    <div className="first-name-div">
                      <label htmlFor="first-name">First name*</label>
                      <br />
                      <input
                        type="text"
                        className="fname"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="last-name-div">
                      <label htmlFor="last-name">Last name*</label>
                      <br />
                      <input
                        type="text"
                        className="lname"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="work-email-div">
                    <label htmlFor="work-email">Work email*</label>
                    <br />
                    <input
                      type="email"
                      className="fname"
                      name="workEmail"
                      value={formData.workEmail}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="phone-num-div">
                    <label htmlFor="phone-number">Phone number</label>
                    <br />
                    <select
                      name="country"
                      id="country-number"
                      value={formData.country}
                      onChange={handleChange}
                    >
                      <option value="pakistan">Pakistan (&#x202B;پاکستان&#x202C;‎ )</option>
                      <option value="napal">Nepal</option>
                      <option value="india">India</option>
                      <option value="thailand">Thailand</option>
                    </select>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      placeholder="+92"
                    />
                  </div>
                  <div className="country">
                    <label htmlFor="country">Country*</label>
                    <br />
                    <select
                      name="country"
                      id="country-number"
                      value={formData.country}
                      onChange={handleChange}
                    >
                      <option value="">Please Select</option>
                      <option value="pakistan">Pakistan</option>
                      <option value="napal">Nepal</option>
                      <option value="india">India</option>
                      <option value="thailand">Thailand</option>
                    </select>
                  </div>
                  <div className="info">
                    <p>
                      Edge Impulse needs the contact information you provide to
                      us to contact you about our products and services. You may
                      unsubscribe from these communications at any time. For
                      information on how to unsubscribe, as well as our privacy
                      practices and commitment to protecting your privacy, please
                      review our <a href="#">Privacy Policy.</a>
                    </p>
                  </div>
                  <div className="blue-btn">
                    <button type="submit">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
