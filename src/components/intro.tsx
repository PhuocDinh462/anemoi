import { LEAF_HEIGHT } from "@constants/size";
import { useRef, useEffect, useState } from "react";

export default function Intro() {
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
      className="w-full min-h-[800px] bg-intro-bg bg-cover bg-no-repeat bg-center
      flex justify-center items-center relative"
      ref={componentRef}
    >
      {/* Text box */}
      <div
        className={`flex flex-col justify-center items-center z-50 ${
          isInView && "animate-fadeDown"
        }`}
      >
        <div
          className="font-seasons text-5xl font-light tracking-[.2em] indent-[.2em] 
        max-sm:text-4xl max-xs:text-3xl"
        >
          introduction
        </div>
        <div className="font-thomasita text-[#d7a732] font-semibold text-lg">anemoi</div>

        <div
          className="py-[30px] text-center font-tsukumin leading-10 
        max-sm:text-[.875rem] max-xs:text-[.75rem] max-xs:leading-8"
        >
          {"黄金色の海がそよいだ"}
          <br />
          {"ゆるりと過ぎゆく時間に包まれながら"}
          <br />
          {"懐かしいささめきに包まれながら"}
          <br />
          {"約束は、風のなかに ――"}
        </div>

        <div className="font-thomasita font-semibold text-sm">staff</div>
        <div
          className="text-center font-tsukumin leading-10 
        max-sm:text-[.875rem] max-xs:text-[.75rem] max-xs:leading-8"
        >
          {"［ 原画 ］Na-Ga ／ ふむゆん ／ 永山ゆうのん ／ きみしま青"}
          <br />
          {"［ シナリオ ］魁 ／ 新島 夕 ／ ハサマ ／ 佐雪 隼"}
          <br />
          {"［ 音楽プロデューサー ］折戸伸治　［ ディレクター ］魁"}
          <br />
          {"［ プロデューサー ］丘野塔也 ――"}
          <br />
          {"［ ジャンル ］恋愛アドベンチャーゲーム"}
        </div>
      </div>

      {/* Leaf */}
      <div
        className="bg-intro-leaf-1 z-10 size-full absolute
      bg-repeat-y bg-fixed bg-cover bg-center"
        style={{ backgroundPositionY: `${bgPositionY}px` }}
      />
      <div
        className="bg-intro-leaf-2 z-10 size-full absolute
      bg-repeat-y bg-fixed bg-cover bg-center"
        style={{ backgroundPositionY: `${bgPositionY / 2}px` }}
      />
      <div
        className="bg-intro-leaf-3 z-10 size-full absolute
      bg-repeat-y bg-fixed bg-cover bg-center"
        style={{ backgroundPositionY: `${bgPositionY / 3}px` }}
      />
    </div>
  );
}
