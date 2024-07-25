import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Testimonial from "./Components/Testimonial";
import Footer from "./Components/Footer";
import Services from "./Components/Services";
import Swipers from "./Components/Swiper";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Contact from "./Components/ContactUs";


import { ToastContainer, toast } from 'react-toastify';





function App() {
  return (
    <div className="App">
      <Home />
    
      <About />

      <Services />
      <Swipers  />
      <Testimonial />
      {/* <Modal /> */}
      <Contact />
      <Footer />
      <ToastContainer
      autoClose={5000}
      />
    </div>
  );
}

export default App;
