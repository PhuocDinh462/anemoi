import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";

export default function Movie() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const width_sm = 699;

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
          className={`${currentSlide !== i ? "blur animate-blurInAnime" : "animate-fadeAnime"}`}
        >
          <img
            src={`src/assets/images/movie_thum1${windowWidth < width_sm ? "_sp" : ""}.jpg`}
            width="100%"
          />
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
    centerPadding: `${windowWidth < width_sm ? 0 : windowWidth / 5}px`,
    afterChange: (current: number) => setCurrentSlide(current),
    arrows: false,
  };

  return (
    <div className="relative cursor-pointer" onClick={() => null}>
      {/* Slider */}
      <Slider {...settings}>{renderSlides()}</Slider>

      {/* Movie title */}
      <div className="absolute sm:top-[17%] top-[15%] left-1/2 -translate-x-1/2 pointer-events-none z-10">
        <div
          className="font-seasons text-5xl font-thin text-center drop-shadow-movie-title text-custom-black-900
          lg:text-5xl md:text-4xl sm:text-3xl
          max-xs:text-4xl max-2xs:text-3xl"
        >
          movie
        </div>
        <div className="font-thomasita text-lg font-semibold text-center drop-shadow-movie-title text-[#4fc69a]">
          anemoi
        </div>
      </div>

      {/* Play button */}
      <img
        src="src/assets/images/play_bt.png"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        pointer-events-none w-[18%]
        sm:w-[4%]"
      />
    </div>
  );
}
