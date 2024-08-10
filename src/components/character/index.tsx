import { useRef, useEffect, useState } from "react";
import CharacterBox from "./character_box";
import LeafBox from "../leaf_box";

export default function Character() {
  const componentRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

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

  return (
    <div
      className="w-full h-screen sm:min-h-[1050px] bg-character-bg-sp sm:bg-character-bg
      bg-cover bg-no-repeat bg-bottom relative overflow-hidden min-h-[1250px]
      md:min-h-[950px]"
      ref={componentRef}
    >
      {/* Text box */}
      <div
        className="flex flex-col justify-center items-center z-50 absolute 
        top-[100px] left-1/2 -translate-x-1/2"
      >
        <div
          className="font-seasons text-5xl font-light tracking-[.2em] indent-[.2em] 
        max-sm:text-4xl max-xs:text-3xl"
        >
          character
        </div>
        <div className="font-thomasita text-[#4ddaf2] font-semibold text-lg">anemoi</div>
      </div>

      <div className={`absolute size-full z-20 ${isInView && "animate-fadeUp"}`}>
        <CharacterBox />
      </div>

      {/* Leaf box */}
      <LeafBox />
    </div>
  );
}
