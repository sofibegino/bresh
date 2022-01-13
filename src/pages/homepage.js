import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useViewportScroll, useTransform } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css";
//Components
import Countdown from "../components/countdown";
import Footer from "../components/footer";
import GoogleMap from "../components/maps";
import TicketContainer from "../components/ticket-container";
//Ease

const Homepage = () => {

  function demoAsyncCall() {
    return new Promise((resolve) => setTimeout(() => resolve(), 2500));
  }

  const [loading, setLoading] = useState(true);

  const [canScroll, setCanScroll] = useState(false);

  useEffect(() => {
    demoAsyncCall().then(() => setLoading(false))
  }, [])


  useEffect(() => {
    if (canScroll === false) {
      document.querySelector("body").classList.add("no-scroll");
    } else {
      document.querySelector("body").classList.remove("no-scroll");
    }
  }, [canScroll]);



  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      {loading ? <div className="loaderr"></div> : <>

        <img
          src={require('../images/bresh-title.png')}
          alt="Open"
          className="bresh-title-img"

        />

        <Countdown />

        <div class="images-container">
          <img
            data-aos="flip-left"
            src={require("../images/pic8.jpg")}
            alt="an image"
          />
          <img
            data-aos="fade-in"
            src={require("../images/tini.png")}
            alt="an image"
          />
          <img
            data-aos="fade-right"
            src={require("../images/pic6.jpg")}
            alt="an image"
          />
          <img
            data-aos="fade-left"
            src={require("../images/pic2.jpg")}
            alt="an image"
          />
          <img
            data-aos="fade-left"
            src={require("../images/pic5.jpg")}
            alt="an image"
          />

          <img
            data-aos="fade-up"
            src={require("../images/pic4.jpg")}
            alt="an image"
          />
        </div>

        <h2 className="title"> 02 de enero - entradas </h2>

        <div class='tickets'>
          <TicketContainer title={'Campo 3ra tanda'} price={'54'}></TicketContainer>
          <TicketContainer title={'VIP Standing 4ta tanda'} price={'90'}></TicketContainer>
        </div>

        <div className="map-container">
          <img className='open-park' src={require("../images/openpark.png")} alt="an image" />
          <h4 className="title ubic"> La Barra - MALDONADO </h4>
          <div> <GoogleMap className="map-img"></GoogleMap> </div>
        </div>

        <div className="produce-container" style={{ display: "flex", flexDirection: "row" }}>
          <h2>Produce:</h2>
          <img src={require("../images/logo-jackson.svg")} alt="an image" />
        </div>
        <Footer />
      </>}
    </>
  );
};

export default Homepage;
