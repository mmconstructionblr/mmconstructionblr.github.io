import React, {
  useEffect,
  useState
}
  from 'react';
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/home2.jpg";
import PickMeals from "../Assets/looks-1.png";
import ChooseMeals from "../Assets/looks-3.png";
import DeliveryMeals from "../Assets/looks-2.png";
import { motion } from "framer-motion";
import AccordionExpandIcon from './AccordionExpandIcon';

const CountUpAnimation = ({
  iconComponent,
  initialValue,
  targetValue,
  text,
}) => {
  const [count, setCount] = useState(initialValue);
  const duration = 4000; // 4 seconds

  useEffect(() => {
    let startValue = initialValue;
    const interval = Math.floor(
      duration / (targetValue - initialValue));

    const counter = setInterval(() => {
      startValue += 1;
      setCount(startValue);
      if (startValue >= targetValue) {
        clearInterval(counter);
      }
    }, interval);

    return () => {
      clearInterval(counter);
    };
  }, [targetValue, initialValue]);

  return (
    <div className="container">

      <span className="num">{count}</span>

    </div>
  );
};

const About = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Building Constructions",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
    },
    {
      image: DeliveryMeals,
      title: "Planning & Designing",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },

    {
      image: ChooseMeals,
      title: "Interior & Renovations",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
    },
  ];
  const containerAnimate = {
    offscreen: { y: 0, opacity: 0 },
    onscreen: {
      y: -80,
      opacity: 1,

      transition: { duration: 0.8 },
    },
  }; const textAnimate = {
    offscreen: { y: +20, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };
  const containerAnimation = {
    offscreen: { y: 40, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { duration: 1 },
    },
  };
  return (
    <>

      <div className="about-section-container" id='about'>
        <div className="about-background-image-container">
          <img src={AboutBackground} alt="" />
        </div>
        <div className="about-section-image-container">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}

            transition={{
              duration: 0.5,
            }}
          >

            <img src={AboutBackgroundImage} className="about-section-image" alt="" />
          </motion.div>
        </div>
        <div className="home-section-text-container">
            <motion.h2
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
      
                  transition={{
                    duration: 0.5,
                  }}
                  className={"primary-subheading"}
                  data-outline="About"
                >
                  About
                </motion.h2>
          
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
                We are based in Bangalore and have delivered projects across the city. We specialize in new residential construction, but have also done renovations and commercial buildings.<br /> Our workforce of highly skilled masons, plumbers, electricians, carpenters, painters have over 10 years of experience in their craft and are highly sought after from our repeat clients. Almost all of our projects are through word of mouth and we are proud to say we have delivered more than half a century of dreams!!                </p>
              </motion.p>
              </div>
              </motion.div>


            </div>

        </div>
     
      </>
      );
};

      export default About;
