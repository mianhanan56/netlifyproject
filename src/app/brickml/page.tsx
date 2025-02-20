"use client";

import React from 'react'
import BrickCard from '../../Components/BrickCard'
import checkicon from '../images/check-icon.svg'

function page() {
  return (
    <>
    <div className='brick-ml-page'>
        <div className="brick-first-content">
         <div className="container">
            <div className="text">
                <div className="heading">
                    <h2>Reference Design:</h2>
                </div>
                <div className="heading heading-2">
                    <h2>BrickML</h2>
                </div>
                <div className="pera">
                    <p>A standalone tool for measuring and monitoring machine health using machine learning at the edge.</p>
                </div>
            </div>
                <div className="wolder-brick-img">
                  <img src="Images/wolder-brick-img.webp" alt="wolder-brick-img" />
                </div>
            </div>         
        </div>
        <div className="logo-div">
            <div className="container">
                <div className="text">
                    <p>Designed and built in conjunction with</p>
                    <img src="Images/brick-reloc-logo.svg" alt="brick-reloc-logo" />
                </div>
            </div>
        </div>
        <div className="section-of-info">
            <div className="container">
                <div className="whole-info">
                <div className="heading">
                    <h2>A readily deployable plug-and-play edge ML design</h2>
                </div>
                <div className="pera">
                    <p>BrickML is a low-power high-performance self-contained embedded device designed to run machine learning operations at the edge in industry settings.</p>
                    <p>Specifically built to be plug-and-play, BrickML is quickly implemented. Connect it to motors, pumps, or other machinery to measure machine performance and create immediate actionable insights.</p>
                    <p>Designed and built in conjunction with <a href="#">Reloc</a>, BrickML module features on-board compute, sensing and communication capabilities, all packed in one compact industrial-grade dust and moisture resistant form factor. It is fully integrated into Edge Impulse&#39;s industry-leading edge ML platform, allowing for the easy addition of advanced AI algorithms.</p>
                    <p>BrickML module minimizes development time and accelerates speed to market by providing customers with both a highly integrated flexible kit for custom development as well as ready-to-use trained edge ML models.</p>
                </div>
                </div>
              
            </div>
        </div>
        <div className="main-applications-cards">
            <div className="container">
                <BrickCard/>
            </div>
        </div>
        <div className="brick-grid-system">
            <div className="container">
                <div className="whole-info">
                <div className="heading-div">
                    <h2>Specifications</h2>
                </div>
                <div className="text">
                    <p>                     
                        <span> Power Supply: </span>
                         <br />
                         2.5V to 5.0V
                    </p>
                    <p>
                       <span>Standby Current:</span> 
                        <br />
                         1uA
                    </p>
                    <p> 
                        <span>Connectivity:</span>
                        Wired: USB Full-Speed, Ethernet, CAN
                        Wireless: BLE 5.1 (output 2.2dBm),
                        LTE (expansion)
                        </p>
                        <p>
                       <span>Expansion:</span> 
                        <br />
                        CAN, UART, I2C, SPI
                    </p>
                </div>
                <div className="text">
                    <p>                     
                        <span> Size</span>
                         <br />
                         40.0mm x 23.0mm x 5.0mm
                    </p>
                    <p>
                       <span>Operating Temperature:</span> 
                        <br />
                        -40°C to +85°C
                    </p>
                    <p> 
                        <span>Certifications:</span>
                        IP67 Enclosure (waterproof/dust proof)
                        FCC & CE wireless certified
                        RoHS-compliant
                        </p>
                </div>
                </div>
            </div>
        </div>
        <div className="brick-grid-system for-padding">
            <div className="container">
                <div className="whole-info for-space">
                <div className="heading-div">
                    <h2>Processing and Storage</h2>
                </div>
                <div className="text">
                  <div className="info">
                    <img src="Images/check-icon.svg" alt="check-icon"/>
                    <span>32-bit ARM® Cortex®-M33 core with FPU</span>
                  </div>
                  <div className="info">
                    <img src="Images/check-icon.svg" alt="check-icon"/>
                    <span>200 MHz clock speed</span>
                  </div>
                  <div className="info">
                    <img src="Images/check-icon.svg" alt="check-icon"/>
                    <span>Up-to 2MB code flash memory, 8KB data flash and 512KB RAM</span>
                  </div>
                  <div className="info">
                    <img src="Images/check-icon.svg" alt="check-icon"/>
                    <span>128Mbit on-board serial flash</span>
                  </div>
                  <div className="info">
                    <img src="Images/check-icon.svg" alt="check-icon"/>
                    <span>SD card storage</span>
                  </div>
                  <div className="info">
                    <img src="Images/check-icon.svg" alt="check-icon"/>
                    <span>Bluetooth 5.1 core specification compliant BLE transceiver and link layer</span>
                  </div>
                  <div className="info">
                    <img src="Images/check-icon.svg" alt="check-icon"/>
                    <span>USB 2.0 Full-Speed device connector</span>
                  </div>
                  <div className="info">
                    <img src="Images/check-icon.svg" alt="check-icon"/>
                    <span>Expansion pinout: Ethernet 10/100, USB 2.0 High-Speed, CAN, LTE, UART, I2C, SPI</span>
                  </div>
                </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default page
