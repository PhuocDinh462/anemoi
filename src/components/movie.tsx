import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";

export default function Movie() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [currentSlide, setCurrentSlide] = useState(0);

  const renderSlides = (numberOfSlides = 3) => {
    const slideElements = [];

    for (let i = 0; i < numberOfSlides; i++) {
      slideElements.push(
        <div
          key={i}
          className={`flex justify-center items-center ${
            currentSlide !== i ? "blur" : "animate-fadeAnime"
          }`}
        >
          <img src="src/assets/images/movie_thum1.jpg" className="w-full object-cover object-top" />
        </div>
      );
    }

    return slideElements;
  };

  const settings = {
    initialSlide: currentSlide,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: `${windowWidth / 5}px`,
    afterChange: (current: number) => setCurrentSlide(current),
  };

  return (
    <div className="w-screen" onClick={() => null}>
      <Slider {...settings}>{renderSlides()}</Slider>
    </div>
  );
}
