import { LEAF_HEIGHT } from "@constants/size";
import { useRef, useEffect, useState } from "react";

export default function Story() {
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
      const newPositionY = scrollPercentage * LEAF_HEIGHT; // increase from 0 to LEAF_HEIGHT
      setBgPositionY(newPositionY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="w-full h-screen min-h-[800px] bg-story-bg bg-cover bg-no-repeat bg-center
      flex justify-center items-center relative overflow-hidden"
      ref={componentRef}
    >
      {/* Text box */}
      <div
        className={`flex flex-col justify-center items-center z-50 mx-4 ${
          isInView && "animate-fadeDown"
        }`}
      >
        <div
          className="font-seasons text-5xl font-light tracking-[.2em] indent-[.2em] text-white
        max-sm:text-4xl max-xs:text-3xl"
        >
          story
        </div>
        <div className="font-thomasita text-[#cc719c] font-semibold text-lg">anemoi</div>

        <div
          className="py-[30px] text-center font-tsukumin leading-8 text-white
          max-xs:text-[.875rem]/7"
        >
          {"10年前に埋めた"}
          <br />
          {"タイムカプセルを開ける日が近づいていた。"}
          <br />
          <br />
          {"主人公の速川 麦は、妹の六花とともに"}
          <br />
          {"ふたりで北の地、真澄町へ訪れる。"}
          <br />
          <br />
          {"都会の喧噪を忘れさせてくれる町は、"}
          <br />
          {"強く吹く風の中でゆっくりとした時間が流れていた。"}
          <br />
          <br />
          {"大きな風車の恩恵を受けながら、"}
          <br />
          {"経験と知恵と人のつながりで築かれる生活。"}
          <br />
          <br />
          {"約束の時間まで、麦は人々と交流を重ねながら"}
          <br />
          {"町でスローライフを送ることにする。"}
          <br />
        </div>
      </div>

      {/* Leaf */}
      <div
        className="bg-story-leaf-1 z-10 size-full absolute
      bg-repeat-y bg-fixed bg-cover bg-center"
        style={{ backgroundPositionY: `${bgPositionY}px` }}
      />
      <div
        className="bg-story-leaf-2 z-10 size-full absolute
      bg-repeat-y bg-fixed bg-cover bg-center"
        style={{ backgroundPositionY: `${bgPositionY / 2}px` }}
      />
      <div
        className="bg-story-leaf-3 z-10 size-full absolute
      bg-repeat-y bg-fixed bg-cover bg-center"
        style={{ backgroundPositionY: `${bgPositionY / 3}px` }}
      />
    </div>
  );
}
