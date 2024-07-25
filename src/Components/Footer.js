import React from "react";
import Logo from "../Assets/logo.png";

import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="footer-wrapper">

      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
          <p className="primary-text">A Name you can trust!
          </p>
        </div>

      </div>
      <div className="footer-section-two ">
        <div className="footer-section-columns">
          <motion.h2

            className={"primary-subheading"}

          >
            Services
          </motion.h2>
          <span>Renovation</span>
          <span>Interior</span>
          <span>Architecture</span>
          <span>Exterior</span>
          <span>Decoration</span>
          <span>Consultation</span>
        </div>
        <div className="footer-section-columns">
          <motion.h2

            className={"primary-subheading"}
          >
            Contact Info
          </motion.h2>
          <span>MM Construction, </span>
          <span>2nd Cross,</span>
          <span>HMT Layout, </span>
          <span>Mathikere, </span>
          <span>Bangalore 54. </span>

        </div>
        <div className="footer-section-columns">
          <motion.h2

            className={"primary-subheading"}

          >
            Call Us/Whatsapp us:
          </motion.h2>
          <span>+91 9845399002</span>

          <motion.h2

            className={"primary-subheading"}

          >
            Mail Us:
          </motion.h2>
          <a href="mailto:MMCONSTRUCTIONBLR@GMAIL.COM">MMCONSTRUCTIONBLR@GMAIL.COM</a>



        </div>

      </div>
    </div>
  );
};

export default Footer;
