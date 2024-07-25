
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";



function Modal({ images }) {
  return (
    <div >
      <Carousel useKeyboardArrows={true} autoPlay >
        {images.map((image, index) => (
          <div className="slide" key={index} >
            <img alt="sample_file" src={image.src} style={{ maxHeight: '350px', objectFit: 'contain' }} // Adjust the maxHeight to your desired value
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
export default Modal;
