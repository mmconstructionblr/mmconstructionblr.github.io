
import React from "react";
import Slider from "react-slick";
import Button from '@mui/material/Button';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import LeftArrow from "../Assets/left-arrow.svg";
import RightArrow from "../Assets/right-arrow.svg";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import home1 from "../Assets/projects/Abhigere_Ramesh1.jpg";
import home12 from "../Assets/projects/Abhigere_Ramesh2.jpg";
import home13 from "../Assets/projects/Abhigere_Ramesh3.jpg";
import home14 from "../Assets/projects/Abhigere_Ramesh4.jpg";
import home15 from "../Assets/projects/Abhigere_Ramesh5.jpg";

import home2 from "../Assets/projects/BagalurRoad_Prabhakar1.jpeg";
import home22 from "../Assets/projects/BagalurRoad_Prabhakar2.jpeg";
import home23 from "../Assets/projects/BagalurRoad_Prabhakar3.jpeg";
import home24 from "../Assets/projects/BagalurRoad_Prabhakar4.jpeg";
import home25 from "../Assets/projects/BagalurRoad_Prabhakar5.jpeg";
import home26 from "../Assets/projects/BagalurRoad_Prabhakar6.jpeg";

import home3 from "../Assets/projects/Bharat1.jpeg";
import home32 from "../Assets/projects/Bharat2.jpeg";
import home33 from "../Assets/projects/Bharat3.jpeg";
import home34 from "../Assets/projects/Bharat4.jpeg";
import home35 from "../Assets/projects/Bharat5.jpeg";
import home36 from "../Assets/projects/Bharat6.jpeg";

import home4 from "../Assets/projects/Chandra_Neethi1.jpeg";
import home42 from "../Assets/projects/Chandra_Neethi2.jpeg";

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import home5 from "../Assets/projects/Jindal_Mahendra1.jpeg";
import home52 from "../Assets/projects/Jindal_Mahendra2.jpeg";
import home53 from "../Assets/projects/Jindal_Mahendra3.jpeg";
import home54 from "../Assets/projects/Jindal_Mahendra4.jpeg";

import home6 from "../Assets/projects/Sambram_NagendraPrasad1.jpeg";
import home62 from "../Assets/projects/Sambram_NagendraPrasad2.jpeg";
import home63 from "../Assets/projects/Sambram_NagendraPrasad3.jpeg";
import home64 from "../Assets/projects/Sambram_NagendraPrasad4.jpeg";
import home65 from "../Assets/projects/Sambram_NagendraPrasad5.jpeg";
import { Card } from "@mui/material";
import Modal from "./Modal";


const images1 = [
  {
    src: home1,
  },
  {
    src: home12,
  },
  {
    src: home13,
  },
  {
    src: home14,
  },
  {
    src: home15,
  },
]
const images2 = [
  {
    src: home2,
  },
  {
    src: home22,
  },
  {
    src: home23,
  },
  {
    src: home24,
  },
  {
    src: home25,
  },
  {
    src: home26,
  },
]
const images3 = [
  {
    src: home3,
  },
  {
    src: home32,
  },
  {
    src: home33,
  },
  {
    src: home34,
  },
  {
    src: home35,
  },
  {
    src: home36,
  },
]
const images4 = [
  {
    src: home4,
  },
  {
    src: home42,
  },

]
const images5 = [
  {
    src: home5,
  },
  {
    src: home52,
  },
  {
    src: home53,
  },
  {
    src: home54,
  },

]

const images6 = [
  {
    src: home6,
  },
  {
    src: home62,
  },
  {
    src: home63,
  },
  {
    src: home64,
  },
  {
    src: home65,
  },

]


function Proj({ image, projectName, ownerName, modalTitle, images }) {
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState('sm');



  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <>
      <img src={image} alt="hero_img" style={{ width: '100%', height: '200px', objectFit: 'contain' }} />
      <p style={{ display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.3em" }}>
        Project Name : {projectName}
      </p>
      <p style={{ display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2em" }}>
        Owner Name : {ownerName}
      </p>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <motion.button className="secondary-button" onClick={handleClickOpen} >
          View {projectName} <FiArrowRight />
        </motion.button>
      </div>


       
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}

      >
      <DialogTitle sx={{ color: "#0a2540" }}>
        {modalTitle}
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent
       
      >
        <Modal images={images} />
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'center' }}>
        <Button onClick={handleClose} sx={{ color: "#0a2540" }}>Close</Button>
      </DialogActions>
    </Dialog>
    </>

  );
}

export default function Swipers() {
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <img src={LeftArrow} alt="prevArrow" {...props} style={{
      boxShadow: "rgba(35, 35, 35, 0.5) 0px 0px 20px 5px",
      borderRadius: "76.8px",
      height: "40px",
      width: "40px",
      padding: "0.50%",
      zIndex: "2",
      marginLeft: "-1%"
    }} />
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <img src={RightArrow} alt="nextArrow" {...props} style={{
      boxShadow: "rgba(35, 35, 35, 0.5) 0px 0px 20px 5px",
      borderRadius: "76.8px",
      height: "40px",
      width: "40px",
      padding: "0.50%",
      zIndex: "2",
      marginRight: "-1%"
    }} />
  );

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
  };


  return (
    <div id="projects">
      <motion.h2
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={"primary-subheading"}
        data-outline="Projects"
        style={{ textAlign: "center", marginBottom: "2rem", marginTop: "2rem" }}
      >
        Projects
      </motion.h2>


      <Slider {...settings} className="card__container--inner">
        <Card className="card__container--inner--card" style={{ marginRight: '50rem' }}>
          <Proj
            image={home1}
            projectName="Abhigere"
            ownerName="Ramesh"
            modalTitle="Project Abhigere"
            images={images1}
          />
        </Card>
        <Card className="card__container--inner--card" style={{ marginRight: '50rem' }}>

          <Proj
            image={home2}
            projectName="Bagalur Road"
            ownerName="Prabhakar"
            modalTitle="Project Bagalur Road"
            images={images2}
          />
        </Card>
        <Card className="card__container--inner--card" style={{ marginRight: '50rem' }}>

          <Proj
            image={home3}
            projectName="Bharat Nagar"
            ownerName="Manjula"
            modalTitle="Project BharatNagar"
            images={images3}
          />
        </Card>
        <Card className="card__container--inner--card" style={{ marginRight: '50rem' }}>

          <Proj
            image={home4}
            projectName="Chandra"
            ownerName="Neethi"
            modalTitle="Project Chandra"
            images={images4}
          />
        </Card>
        <Card className="card__container--inner--card" style={{ marginRight: '50rem' }}>

          <Proj
            image={home5}
            projectName="Jindal"
            ownerName="Mahendra"
            modalTitle="Project Jindal"
            images={images5}
          />
        </Card>
        <Card className="card__container--inner--card" style={{ marginRight: '50rem' }}>

          <Proj
            image={home6}
            projectName="Sambram"
            ownerName=" Nagendra Prasad"
            modalTitle="Project Sambram"
            images={images6}
          />
        </Card>
      </Slider>
    </div>
  );
}