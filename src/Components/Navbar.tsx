"use client"

import React, { useState } from "react"
import Link from "next/link"
import {
  MdOutlineArrowDropDown,
  MdLightMode,
  MdDataset,
  MdOutlinePersonAddAlt,
  MdPlaylistAddCircle
} from "react-icons/md"
import { FaGripLines } from "react-icons/fa"
import { HiMiniArrowsRightLeft } from "react-icons/hi2"
import { SiThealgorithms } from "react-icons/si"
import { GrIntegration } from "react-icons/gr"
import { RiComputerFill } from "react-icons/ri"
import { AiFillProduct } from "react-icons/ai"
import { BiBrain } from "react-icons/bi"

export const Navbar = () => {
  return (
    <nav>
    <div className="container">
      <div className="navbar-container">
        <div className="logo">
          <Link href="/">
            <img src="Images/Logo.svg" alt="Logo" className="logo-impulse" />
          </Link>
        </div>

        <ul className="links">
          <li className="products-link">
            Products
            <span>
              <MdOutlineArrowDropDown />
            </span>
            {/* Dropdown products*/}
            <div className="drop-down-products row">
              <div className="col-6">
                <h3 className="column-heading">Capabilities</h3>
                <ul className="link-list list-unstyled">
                  <li>
                    <Link href="/aiplateform" className="d-flex align-items-center">
                      <MdLightMode className="me-2" /> The Edge Ai Platform
                    </Link>
                  </li>
                  <li>
                    <Link href="/aiplateform#dataset-section" className="d-flex align-items-center">
                      <MdDataset className="me-2" />
                      Sensor datasets
                    </Link>
                  </li>
                  <li>
                    <Link href="/aiplateform#feature" className="d-flex align-items-center">
                      <FaGripLines className="me-2" /> Feature Engineering
                    </Link>
                  </li>
                  <li>
                    <Link href="/aiplateform#optimize" className="d-flex align-items-center">
                      <HiMiniArrowsRightLeft className="me-2" /> Modal Optimization
                    </Link>
                  </li>
                  <li>
                    <Link href="/aiplateform#detection" className="d-flex align-items-center">
                      <SiThealgorithms className="me-2" />
                      Algorithms
                    </Link>
                  </li>
                  <li>
                    <Link href="/computervision" className="d-flex align-items-center">
                      <RiComputerFill className="me-2" /> Computer Vision
                    </Link>
                  </li>
                  <li>
                    <Link href="/nvidia" className="d-flex align-items-center">
                      <GrIntegration className="me-2" /> NVIDIA Integration
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-6">
                <h3 className="column-heading">Built for</h3>
                <ul className="link-list list-unstyled">
                  <li>
                    <Link href="/productleader" className="d-flex align-items-center">
                      <AiFillProduct className="me-2" /> Product leaders
                    </Link>
                  </li>
                  <li>
                    <Link href="/aipractitioner" className="d-flex align-items-center">
                      <BiBrain className="me-2" /> AI practitioners
                    </Link>
                  </li>
                  <li>
                    <Link href="/embeddedengineer" className="d-flex align-items-center">
                      <MdOutlinePersonAddAlt className="me-2" /> Embedded engineers
                    </Link>
                  </li>
                  <li>
                    <Link href="/aiplateform#oem" className="d-flex align-items-center">
                      <MdPlaylistAddCircle className="me-2" /> OEMs
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* Dropdown products */}
          </li>

          <li className="solutions-link">
            Solutions
            <span>
              <MdOutlineArrowDropDown />
            </span>
            {/* Dropdown  solutions */}
            <div className="drop-down-solutions row">
              {/* First Column */}
              <div className="col-4">
                <div className="row gx-3 ">
                  {/* First Subcolumn */}
                  <h3 className="column-heading ps-4">Industries</h3>
                  <div className="col-6 px-0 ">
                    <ul className="link-list px-0  ">
                      <li>
                        <Link href="/appliances" className="d-flex align-items-center">
                          <MdLightMode className="me-2" /> Appliances
                        </Link>
                      </li>
                      <li>
                        <Link href="/health" className="d-flex align-items-center">
                          <MdDataset className="me-2" />
                          Health
                        </Link>
                      </li>
                      <li>
                        <Link href="/infrastruture" className="d-flex align-items-center">
                          <FaGripLines className="me-2" /> Infrastructure
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Second Subcolumn */}
                  <div className="col-6 px-0">
                    <ul className="link-list px-0">
                      <li>
                        <Link href="/building" className="d-flex align-items-center">
                          <HiMiniArrowsRightLeft className="me-2" /> Buildings
                        </Link>
                      </li>
                      <li>
                        <Link href="/industry" className="d-flex align-items-center">
                          <SiThealgorithms className="me-2" />
                          Industries
                        </Link>
                      </li>
                      <li>
                        <Link href="/wearable" className="d-flex align-items-center">
                          <GrIntegration className="me-2" /> Wearables
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Second Column */}
              <div className="col-4">
                <h3 className="column-heading ps-4">Applications</h3>
                <ul className="link-list ">
                  <li>
                    <Link href="/casestudy" className="d-flex align-items-center">
                      <RiComputerFill className="me-2" /> Case studies
                    </Link>
                  </li>
                  <li>
                    <Link href="/computervision" className="d-flex align-items-center">
                      <MdPlaylistAddCircle className="me-2" /> Computer Vision
                    </Link>
                  </li>
                  <li>
                    <Link href="/assettracking" className="d-flex align-items-center">
                      <AiFillProduct className="me-2" /> Assettracking & monitoring
                    </Link>
                  </li>
                  <li>
                    <Link href="/humaninterface" className="d-flex align-items-center">
                      <BiBrain className="me-2" /> Human Interfaces
                    </Link>
                  </li>
                  <li>
                    <Link href="/predictivemaintance" className="d-flex align-items-center">
                      <MdOutlinePersonAddAlt className="me-2" /> Predictive Maintenance
                    </Link>
                  </li>
                  
                </ul>
              </div>

              {/* Third Column */}
              <div className="col-4">
                <h3 className="column-heading ps-3">Technical Resources</h3>
                <ul className="link-list ">
                  <li>
                    <Link href="/ultimateguide"  className="d-flex align-items-center">
                      <MdLightMode className="me-2" /> The ultimate guide to edge AI eBook
                    </Link>
                  </li>
                  <li>
                    <Link href="/brickml" className="d-flex align-items-center">
                      <MdDataset className="me-2" />
                      Brick ML
                    </Link>
                  </li>
                  <li>
                    <Link href="/link14" className="d-flex align-items-center">
                      <FaGripLines className="me-2" /> Digital Health Solution Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/link15" className="d-flex align-items-center">
                      <HiMiniArrowsRightLeft className="me-2" /> Industrial Productivity Solutions Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/aiedge" className="d-flex align-items-center">
                      <SiThealgorithms className="me-2" />
                      AI at the Edge eBook
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* Dropdown  solutions*/}
          </li>

          <li className="developers-link ">
  <span className="d-flex align-items-center">
    Developers
    <MdOutlineArrowDropDown className="ms-1" />
  </span>
  {/* Dropdown developers */}
  <div className="dropdown-developers ">
    <div className="row">
      <div className="col-12">
        <ul className=" ">
          <li className="">
            <Link href="/link1" className="text-decoration-none">
              Docs
            </Link>
          </li>
          <li className="">
            <Link href="/link2" className="text-decoration-none">
              Projects
            </Link>
          </li>
          <li className="">
            <Link href="/link3" className="text-decoration-none">
              Forum
            </Link>
          </li>
          <li>
            <Link href="/link4" className="text-decoration-none">
              University
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</li>


          <li className="pricing-link">
            Pricing
            <span>
              <MdOutlineArrowDropDown />
            </span>
          </li>

          <li className="company-link">
            Company
            <span>
              <MdOutlineArrowDropDown />
            </span>
          </li>

          <li className="blogs-link">
            Blogs
            <span>
              <MdOutlineArrowDropDown />
            </span>
          </li>
        </ul>

        <div className="nav-btns">
          <button className="login-btn">Login</button>
          <button className="get-started-btn">Get Started</button>
        </div>
      </div>
    </div>
    </nav>
  )
}
