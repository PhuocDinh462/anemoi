import { useRef, useEffect, useState } from "react";

export default function Character() {
  const componentRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [bgPositionY, setBgPositionY] = useState(0);

  useEffect(() => {
    const currentIntroRef = componentRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (currentIntroRef) {
      observer.observe(currentIntroRef);
    }

    return () => {
      if (currentIntroRef) {
        observer.unobserve(currentIntroRef);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = scrollTop / docHeight;
      const newPositionY = scrollPercentage * 600; // increase from 0 to 600
      setBgPositionY(newPositionY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="w-full min-h-[800px] bg-character-bg-sp sm:bg-character-bg bg-cover bg-no-repeat bg-center
      flex justify-center items-center relative"
      ref={componentRef}
    >
      {/* Text box */}
      <div className="flex flex-col justify-center items-center z-50">
        <div
          className="font-seasons text-5xl font-light tracking-[.2em] indent-[.2em] 
        max-sm:text-4xl max-xs:text-3xl"
        >
          character
        </div>
        <div className="font-thomasita text-[#4ddaf2] font-semibold text-lg">anemoi</div>
      </div>

      {/* Leaf */}
      <div
        className="bg-character-leaf-1 z-10 h-full w-full absolute
      bg-repeat-y bg-fixed bg-cover bg-center"
        style={{ backgroundPositionY: `${bgPositionY}px` }}
      />
      <div
        className="bg-character-leaf-2 z-10 h-full w-full absolute
      bg-repeat-y bg-fixed bg-cover bg-center"
        style={{ backgroundPositionY: `${bgPositionY / 2}px` }}
      />
      <div
        className="bg-character-leaf-3 z-10 h-full w-full absolute
      bg-repeat-y bg-fixed bg-cover bg-center"
        style={{ backgroundPositionY: `${bgPositionY / 3}px` }}
      />
    </div>
  );
}
