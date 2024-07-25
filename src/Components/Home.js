import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home3.jpg";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";

const Home = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerAnimate = {
    offscreen: { y: 0, opacity: 0 },
    onscreen: {
      y: -80,
      opacity: 1,

      transition: { duration: 0.8 },
    },
  }; 
  return (
    <div className="home-container" >
      <Navbar />
      <div className="home-banner-container" id="home">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <motion.div
          className="home-text-section"
          initial="offscreen"
          animate="onscreen"
          variants={containerAnimate}
        >
        <div className="home-text-section">
          <motion.h1
           initial={{ y: 100, opacity: 0 }}
           whileInView={{ y: 0, opacity: 1 }}
           
           transition={{
             duration: 0.5,
           }}
            className="primary-heading"
          >
            MM Construction
          </motion.h1>
          <motion.p initial={{ y: 100, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               
               transition={{
                 duration: 0.5,
               }} className="primary-text">

          <p className="primary-text">
          We are a 15-year-old civil engineering company specialized in home building and renovations. Our clients have trusted us with their hard-earned money to build their dream home and we take great care deliver their dreams. <br />          We are known for on-time delivery, reliable service, innovative designs and for quality in our finishing. We believe in being 100% transparent with the clients and keep them informed in every step of the construction journey.
          </p>
          </motion.p>
          <a
           
            href={`#contact`}
            onClick={() => scrollToSection(`#contact`)}
          >
    
          <motion.button className="secondary-button" >
            Get a Free Quote <FiArrowRight />{" "}
          </motion.button>
          </a>
        </div>
          </motion.div>
        <motion.div className="home-image-section"initial={{ y: 100, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               
               transition={{
                 duration: 0.5,
               }}>
          <img src={BannerImage} className="home-image" alt=""  />
          
        </motion.div>
        
      </div>
    </div>
  );
};

export default Home;
