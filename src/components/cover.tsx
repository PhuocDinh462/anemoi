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
        windowWidth >= width_m && "bg-cover bg-top h-screen bg-[url('./src/assets/fv_main_bg.jpg')]"
      }`}
    >
      {windowWidth < width_m && (
        <img
          src="./src/assets/fv_main_bg_sp.jpg"
          alt="fv_main_bg_sp.jpg"
          className={`w-full object-cover object-top ${
            windowWidth >= width_s && "relative bottom-[28rem]"
          }`}
        />
      )}

      {/* Logo */}
      <div
        className={`absolute top-0 mt-12 min-w-64 ${
          windowWidth >= width_m ? "w-96" : "w-1/2 sm:w-2/5 md:w-1/4"
        }`}
      >
        <img
          src="./src/assets/anemoi_logo.png"
          alt="anemoi_logo.png"
          className="object-cover drop-shadow-3xl"
        />
      </div>
    </div>
  );
}
