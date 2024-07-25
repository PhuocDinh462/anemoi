import { useEffect, useState } from "react";

export default function Cover() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const width_s = 699;

  return (
    <div
      className="relative h-[auto] md:h-screen min-h-[auto] bg-cover bg-no-repeat md:bg-top md:bg-cover-bg
      sm:bg-bottom sm:bg-cover-bg-sp sm:min-h-[900px]"
    >
      {/* BG */}
      <div className="-z-50 sm:hidden">
        <img
          src="./src/assets/images/fv_main_bg_sp.png"
          alt="fv_main_bg_sp"
          className="w-screen object-cover object-top"
        />
      </div>

      {/* Slogan & Logo */}
      <div className="absolute top-11 w-full flex items-center justify-center max-bm:flex-col-reverse">
        <div
          className="bm:mr-14 ss:text-lg/9 text-base/7 mt-6 [writing-mode:vertical-rl] font-light
        text-white tracking-[0.25em] drop-shadow-slogan font-tsukumin"
        >
          約束は
          <span>、</span>
          <br />
          風のなかに
          <span className="tracking-normal"> ――</span>
        </div>

        <div className="bm:mr-32 min-w-64 w-1/2 md:w-100 sm:w-2/5">
          <img
            src="./src/assets/images/anemoi_logo.png"
            alt="anemoi アネモイ"
            className="object-cover drop-shadow-logo"
          />
        </div>
      </div>

      <div
        className="absolute bottom-[14%] sm:bottom-[22.5%] left-[50%] 
      -translate-x-1/2 text-4xl text-[#7ca0d1] font-thomasita"
      >
        Coming
      </div>
      <div
        className="absolute bottom-[8%] sm:bottom-[18%] left-[50%] 
        -translate-x-1/2 tracking-[0.42em] indent-[0.42em]
        font-seasons font-thin text-5xl text-[#231815]"
      >
        2025
      </div>

      {/* Key logo */}
      <div className="flex justify-end pr-[4%] pb-[4%]">
        <a
          href="https://key.visualarts.gr.jp/"
          className="relative w-[12%]
          md:w-[4%] md:bottom-[30px]
          sm:absolute sm:w-[8%] sm:bottom-[10%] sm:right-[50px]"
        >
          <img
            src={`./src/assets/images/key_logo_${windowWidth >= width_s ? "white" : "black"}.png`}
            alt="Key"
            className="align-bottom"
          />
        </a>
      </div>
    </div>
  );
}
