import React from "react";
import style from "./Services.module.css";

import { motion } from "framer-motion";
import crane from "../Assets/crane1.png"
import contract from "../Assets/contract.png"
import arch from "../Assets/arch.png"
import sofa from "../Assets/sofa.png"
import AccordionExpandIcon from "./AccordionExpandIcon";

// import "./Services.css";
const Services = () => {
 

  return (
    <div id="services" className={`${style.contact}`}>
       <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}

            transition={{
              duration: 0.5,
            }}
          >
       <div className="work-section-top services-section-wrapper">
          <motion.h2
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}

            transition={{
              duration: 0.5,
            }}
            className={"primary-subheading"}
            data-outline="About"
          >
            Services
          </motion.h2>
          </div>
      <div className={`${style.container}`}>
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.1,
          }}
        >
          
            <div id="contact-github" className={`${style.card}`}>
              <div className={`${style.icon}`}>
              <img src={crane} alt="" />
              </div>
              <div className={`${style.desc}`}>
                <h5>New constructions</h5>
                <p>We do custom home construction & commercial property buildings too. Our team of experienced architects, engineers, and builders work together to ensure every project is completed to the highest quality standards.</p>
              </div>
            </div>
          
          </motion.div>
      
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.1,
          }}
        >
        
            <div id="contact-linkedin" className={`${style.card}`}>
              <div className={`${style.icon}`}>
              <img src={arch} alt="" />
              </div>
              <div className={`${style.desc}`}>
                <h5>Planning & Designing</h5>
                <p>Our team of professional Architects deliver detailed floor plans, the 3D elevation of multiple views and detailed structural drawings that meet the client needs and is 100% Vasthu compliant.</p>
              </div>
            </div>
       
          </motion.div>
    
    
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.1,
          }}
        >
      
          <div id="contact-phone" className={`${style.card}`}>
            <div className={`${style.icon}`}>
            <img src={sofa} alt="" />
            </div>
            <div className={`${style.desc}`}>
              <h5>Interior & Renovations</h5>
              <p>We collaborate with top interior designers in Bangalore who create stylish and functional designs for villas and flats. From bedroom to kitchen interiors, we ensure maximum value within the client's budget.</p>
            </div>
          </div>
          
          </motion.div>
      </div>
      <br />
      
      <AccordionExpandIcon />
      </motion.div>
    </div>
  );
};

export default Services;
