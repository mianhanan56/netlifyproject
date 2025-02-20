"use client";

import React from "react";
import UltimateGuideForm from '../../Components/UltimateGuideForm';

function page() {
  return (
    <>
    <div className="the-ultimate-guide-page">
        <div className="container-fluid">
            <div className="logo-div">
                <a href="#">
                <img src="Images/Edge-Impulse-primary-logo.webp" alt="Edge-Impulse-primary-logo" />
                </a>
            </div>
            <div className="ultimate-guide-img">
                <a href="#">
                    <img src="Images/ultimate-guide-img.webp" alt="" />
                </a>
            </div>
            <div className="info">
                <div className="heading">
                    <h2>What to Expect</h2>
                    <hr />
                </div>
                <div className="pera">
                    <p>Navigating the $163 B global edge AI market opportunity requires more than just technology — it demands strategic insight and practical knowledge. The Ultimate Guide to Edge AI is your roadmap to success, packed with actionable insights, real-world case studies, and essential tools including a user-friendly ROI calculator and edge AI readiness assessment checklist.</p>
                    <p>Whether you’re exploring edge AI possibilities or ready to scale your implementation, this comprehensive guide will help you make smarter decisions, accelerate deployment, and maximize the value of intelligence at the edge.</p>
                </div>
            </div>
            <div className="whole-ultimate-form">
            <div className="info">
                <div className="heading">
                    <h2>Get Your Free Copy</h2>
                    <hr />
                </div>
                <UltimateGuideForm/>
            </div>
            </div>
        </div>
    </div>
    </>
  );
}

export default page;
