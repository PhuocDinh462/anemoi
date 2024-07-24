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

  const width_m = 899;

  return (
    <div
      className="h-screen min-h-[900px] bg-cover bg-no-repeat md:bg-top md:bg-cover-bg 
      sm:bg-bottom sm:bg-cover-bg-sp"
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

      <div className="absolute bottom-[22.5%] left-[50%] text-4xl">Coming</div>
      <div className="absolute bottom-[18%] left-[50%] tracking-[0.42em] font-light text-4xl">
        2025
      </div>

      {/* Key logo */}
      <a href="https://key.visualarts.gr.jp/" className="absolute bottom-[0px] right-[50px] w-[4%]">
        <img
          src={`./src/assets/images/key_logo_${windowWidth >= width_m ? "white" : "black"}.png`}
          alt="Key"
        />
      </a>
    </div>
  );
}
