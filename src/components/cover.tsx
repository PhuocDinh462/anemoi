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

  const switchWidth = 768;

  return (
    <div
      className={
        windowWidth >= switchWidth
          ? "h-screen bg-[url('./src/assets/fv_main_bg.jpg')] bg-cover bg-center"
          : ""
      }
    >
      {windowWidth < switchWidth && (
        <img
          src="./src/assets/fv_main_bg_sp.jpg"
          className="object-cover items-center absolute -z-50"
        />
      )}
      <div className="flex flex-col items-center h-full">
        <img
          src="./src/assets/anemoi_logo.png"
          alt="anemoi_logo.png"
          className="object-cover mt-5 h-28 md:h-44"
        />
      </div>
    </div>
  );
}
