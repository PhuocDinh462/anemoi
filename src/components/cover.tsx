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
  const width_s = 699;

  return (
    // BG
    <div
      className={`flex justify-center ${
        windowWidth >= width_m &&
        "bg-cover bg-top h-225 2xl:min-h-1440px bg-[url('./src/assets/fv_main_bg.png')]"
      }`}
    >
      {windowWidth < width_m && (
        <div className="-z-50">
          <img
            src="./src/assets/fv_main_bg_sp.png"
            alt="fv_main_bg_sp.jpg"
            className={`w-screen object-cover object-top ${
              windowWidth >= width_s && "relative bottom-[28rem]"
            }`}
          />
        </div>
      )}

      {/* Slogan & Logo */}
      <div className="absolute mt-12 flex align-middle justify-center">
        <div
          className="mt-6 mr-14 [writing-mode:vertical-rl] font-light
         text-white text-lg/9 tracking-[0.25em] drop-shadow-slogan"
        >
          約束は
          <span>、</span>
          <br />
          風のなかに
          <span className="tracking-normal"> ――</span>
        </div>

        <div
          className={`mr-32 min-w-64 ${
            windowWidth >= width_m ? "w-100" : "w-1/2 sm:w-2/5 md:w-1/4"
          }`}
        >
          <img
            src="./src/assets/anemoi_logo.png"
            alt="anemoi アネモイ"
            className="object-cover drop-shadow-logo"
          />
        </div>
      </div>
    </div>
  );
}
