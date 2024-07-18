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
      className={
        windowWidth >= width_m
          ? "h-screen bg-[url('./src/assets/fv_main_bg.jpg')] bg-cover bg-center flex justify-center"
          : windowWidth < width_m && windowWidth >= width_s
          ? "h-screen bg-[url('./src/assets/fv_main_bg_sp.jpg')] bg-cover bg-bottom-top-52 flex justify-center"
          : "h-screen bg-[url('./src/assets/fv_main_bg_sp.jpg')] bg-cover flex justify-center"
      }
    >
      {/* Logo */}
      <div className="w-96 sm:w-1/2 md:w-1/3">
        <img src="./src/assets/anemoi_logo.png" alt="anemoi_logo.png" className="object-cover" />
      </div>
    </div>
  );
}
