import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import { Backdrop } from "@mui/material";

export default function Movie() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const width_sm = 699;

  const [backdropOpen, setBackdropOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const aspectRatio = 16 / 9;

  useEffect(() => {
    if (backdropOpen) setVideoOpen(true);
  }, [backdropOpen]);

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
    <>
      <div className="relative cursor-pointer" onClick={() => setBackdropOpen(true)}>
        {/* Slider */}
        <Slider {...settings}>{renderSlides()}</Slider>

        {/* Movie title */}
        <div
          className="absolute left-1/2 -translate-x-1/2 pointer-events-none z-10
        sm:top-[10%] bm:top-[12%] md:top-[14%] lg:top-[17%] top-[15%]"
        >
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

      <Backdrop
        sx={{ backgroundColor: "rgba(255,255,255,.5)", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={backdropOpen}
        transitionDuration={500}
        onClick={() => setBackdropOpen(false)}
        onExited={() => setVideoOpen(false)}
      >
        {videoOpen && (
          <div className="relative sm:w-fit w-full max-sm:mx-3">
            <iframe
              width={windowWidth < width_sm ? "100%" : windowWidth / 1.5}
              height={
                windowWidth < width_sm ? windowWidth / aspectRatio : windowWidth / 1.5 / aspectRatio
              }
              src="https://www.youtube.com/embed/ibnem8LFE6o"
              title="『anemoi』ティザームービー"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="z-10"
            />
            <button className="bg-close_icon absolute -bottom-[50px] right-0 size-[44px] -z-10 animate-dropDiagonal" />
          </div>
        )}
      </Backdrop>
    </>
  );
}
