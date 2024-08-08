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
        <div key={i} className={`${currentSlide !== i ? "blur" : "animate-fadeAnime"}`}>
          <img src="src/assets/images/movie_thum1.jpg" />
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
    arrows: false,
  };

  return (
    <div className="relative cursor-pointer" onClick={() => null}>
      {/* Slider */}
      <Slider {...settings}>{renderSlides()}</Slider>

      {/* Movie title */}
      <div
        className="absolute top-[100px] left-1/2 -translate-x-1/2 pointer-events-none z-10
        font-seasons text-5xl font-thin text-center drop-shadow-movie-title"
      >
        movie
      </div>
      <div
        className="absolute top-[150px] left-1/2 -translate-x-1/2 pointer-events-none z-10
        font-thomasita text-lg font-semibold text-center drop-shadow-movie-title text-[#4fc69a]"
      >
        anemoi
      </div>

      {/* Play button */}
      <img
        src="src/assets/images/play_bt.png"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        pointer-events-none w-[4%]"
      />
    </div>
  );
}
