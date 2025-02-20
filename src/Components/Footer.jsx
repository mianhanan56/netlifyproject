import React from "react";
import { IoLogoLinkedin } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { SiHackster } from "react-icons/si";

function Footer() {
  return (
    <>
    <div className="footer-main-wrapper">
      <div className="container-fluid p-0">
      <div className="footer-content">
        <div className="footer-content-image">
          <img src="Images/618e33d89badebdfe7c5897a_Logo (2).svg" alt="" />
        </div>
        <div>
          <div className="row">
            <div className="col-3">
              <ul className="footer-card">
                <li className="link-bold">Edge Impulse</li>
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">Product</a>
                </li>
                <li>
                  <a href="">Case studies</a>
                </li>
                <li>
                  <a href="">Blog</a>
                </li>
                <li>
                  <a href="">Careers</a>
                </li>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Security</a>
                </li>
              </ul>
            </div>
            <div className="col-3">
              <ul className="footer-card">
                <li className="link-bold">Studio</li>
                <li>
                  <a href="">Login</a>
                </li>
                <li>
                  <a href="">Documentation</a>
                </li>
              </ul>
            </div>
            <div className="col-3">
              <ul className="footer-card">
                <li className="link-bold">Community</li>
                <li>
                  <a href="">Events</a>
                </li>
                <li>
                  <a href="">Branding</a>
                </li>
                <li>
                  <a href="">Forum</a>
                </li>
                <li>
                  <a href="">
                    <FaXTwitter />
                  </a>
                  <a href="">
                    <IoLogoLinkedin />
                  </a>
                  <a href="">
                    <FaGithub />
                  </a>
                  <a href="">
                    <SiHackster />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-3">
              <ul className="footer-card">
                <li className="link-bold">Contact</li>
                <li>
                  <a href="">Contact us</a>
                </li>
                <li>
                  Edge Impulse <br />
                  3031 Tisch Way
                  <br />
                  110 Plaza West
                  <br />
                  San Jose, CA 95128 <br />
                  USA
                </li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="sub-footer">
        <div className="footer-subtext">
          © 2024 Edgeimpulse, Inc. All rights
          reserved&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <a href="">Privacy Policy</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <a href="">Global Supplier Policy</a>
          &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <a href="">Community Terms of Service</a>
          &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <a href="">Enterprise Terms of Service</a>
          &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <a href="">Responsible AI License</a>
        </div>
      </div>
      </div>
    </div>
    </>
  );
}

export default Footer;
