"use client";

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Navbar } from "@/Components/Navbar";
import AIedge from "@/Components/AIedge";
import ClientLogoSlider from "@/Components/ClientLogosSlider";
import Inteligence from "@/Components/Inteligence";
import EdgeImpulse from '../Components/EdgeImpulse';
import DataModelPage from '../Components/DataModelPage';
import CustomerSlider from '../Components/CustomerSlider';
import UpdatePage from '../Components/UpdatePage';
import SubscribePage from '../Components/SubscribePage';
// import EdgeSlider from '../Components/EdgeSlider'

// import { Accordion } from "react-bootstrap";
// import Accordion from '../Components/Accordion'

// import CardCarousel from '@/Components/CardCarousel';
// import { Carousel } from "react-bootstrap";
// import {Carouselbox} from '../Components/Carousel/Carousel';

export default function Home() {
  return (
  //  <div className="container-fluid">
     <main className="main-page">
      {/* <Navbar /> */}
      <AIedge />
      <ClientLogoSlider />
      <Inteligence />    
      {/* <Carouselbox/> */}
      {/* <CardCarousel/> */}
      {/* <div className="large-ecosystem">
        <h1>
          <span className="color-header">Get to market</span> faster with the <br />
          largest <span className="color-header">edge AI</span> ecosystem.
        </h1>
        <div className="eco-btns">
          <button>
            <a href="#">View all our Partners</a>
          </button>
          <button className="btn-discuss">
            <a href="#">Discuss a Project</a>
          </button>
        </div>
      </div> */}
      <DataModelPage/>
      <EdgeImpulse/>
      {/* <CustomerSlider/> */}
      {/* <EdgeSlider/> */}
      {/* <UpdatePage/> */}
      <CustomerSlider/>
      {/* <SubscribePage/> */}
    </main>
  //  </div>
  );
}
