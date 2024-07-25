import React from "react";
import { AiFillStar } from "react-icons/ai";
import Packages from "./packages";
import { motion, Variants } from "framer-motion";

const Testimonial = () => {
  const containerAnimate = {
    offscreen: { y: 0, opacity: 0 },
    onscreen: {
      y: -80,
      opacity: 1,

      transition: { duration: 0.8 },
    },
  };

  return (
    <div className="work-section-wrapper" id="packages">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}

        transition={{
          duration: 0.5,
        }}
      >
        <div className="work-section-top">
          <p className="primary-subheading">Packages</p>
          <h1 className="primary-heading">Standard Package</h1>
          <p className="primary-text">
            This is our most cost effective budget and sought after by clients who are looking for maximum value with quality finishing.Rate is 1800 Rs/sq ft
          </p>
        </div>
        <div className="testimonial-section-bottom">

          <Packages />
        </div>
        <div className="work-section-top">
          <h1 className="primary-heading">Premium  Package</h1>
          <p className="primary-text">
            This is ideal for clients
            looking for customized works and
            high end branded products.Rate is 2200  Rs/sq ft
          </p>
        </div>
        <div className="testimonial-section-bottom">

          <Packages />
        </div>
      </motion.div>
    </div>
  );
};

export default Testimonial;
