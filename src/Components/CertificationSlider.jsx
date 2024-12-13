import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import b1 from "../assets/certi1.jpeg";
import b2 from "../assets/certi2.jpeg";
import b3 from "../assets/certi3.jpeg";
import b4 from "../assets/certi4.jpeg";
import { SlideshowLightbox } from "lightbox.js-react";
const CertificationSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    swipeToSlide: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true, // Enables centering
    centerPadding: "50px", // Adjust padding as needed
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const Ourcertifications = [
    { id: 1, imageSrc: b1 },
    { id: 2, imageSrc: b2 },
    { id: 3, imageSrc: b3 },
    { id: 4, imageSrc: b4 },

    // Add more blog posts as needed
  ];
  return (
    <div className="w-full overflow-hidden">
      <Slider {...settings}>
        {Ourcertifications?.map((item, index) => (
          <div key={index} className="px-3  ">
            <SlideshowLightbox
              className="w-full h-full "
              modalClose={"clickOutside"}
            >
              <img src={item.imageSrc} alt=""   />
            </SlideshowLightbox>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CertificationSlider;
