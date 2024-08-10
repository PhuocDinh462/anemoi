import React, { useEffect, useState } from "react";
import { Fade as Hamburger } from "hamburger-react";
import { Drawer } from "@mui/material";
import { anemoi_logo_bk } from "@/constants/images";

export default function Navbar(props: {
  sections: string[];
  refs: React.RefObject<HTMLDivElement>[];
  showHeaderLogo: boolean;
}) {
  const { sections, refs, showHeaderLogo } = props;

  const scrollToSelectedSection = (index: number) => {
    if (refs[index].current) refs[index].current.scrollIntoView({ behavior: "smooth" });
  };

  // For mobile only
  const [open, setOpen] = useState(false);
  const numberOfRows = 2;
  const itemsPerRow = Math.ceil(sections.length / numberOfRows);

  const renderSections = () => {
    const sectionElements = [];
    let i = 0;

    for (let j = 1; j <= numberOfRows; j++) {
      const rowElements = [];
      for (; i < Math.min(itemsPerRow * j, sections.length); i++) {
        const refIndex = i;
        rowElements.push(
          <React.Fragment key={i}>
            <div
              className="font-thin px-[14px] cursor-pointer"
              onClick={() => {
                setOpen(false);
                scrollToSelectedSection(refIndex);
              }}
            >
              {sections[i]}
            </div>
            |
          </React.Fragment>
        );
      }
      const rowBlock = (
        <div key={j} className="flex flex-wrap justify-center items-center mb-3">
          |{rowElements}
        </div>
      );
      sectionElements.push(rowBlock);
    }

    return sectionElements;
  };

  useEffect(() => {
    const handleResize = () => setOpen(false);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  ///

  return (
    <div className="w-screen max-sm:relative">
      {/* Mobile case */}
      <div
        className="p-1 bg-gradient-to-b from-custom-blue-100 to-transparent
        sm:hidden size-fit absolute top-0 right-0"
      >
        <Hamburger
          direction="right"
          color="#fff"
          size={26}
          distance="lg"
          toggled={open}
          toggle={setOpen}
        />
      </div>

      <Drawer
        anchor="top"
        open={open}
        style={{ zIndex: 50 }}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            backgroundImage: "linear-gradient(to bottom, rgba(40, 178, 230, 1), 70%, transparent)",
            backgroundColor: "transparent",
            boxShadow: "none",
          },
        }}
        slotProps={{ backdrop: { sx: { backgroundColor: "rgba(255, 255, 255, .5)" } } }}
      >
        <div
          className="flex flex-col items-center justify-center w-full pt-[16%] pb-[20%]
          font-seasons text-white font-semibold text-lg 2xs:text-xl xs:text-2xl
          bg-gradient-to-b from-custom-blue-100 to-transparent"
        >
          {renderSections()}
        </div>
      </Drawer>

      {/* PC case */}
      <div
        className="relative size-full max-sm:hidden pt-[.6%] pb-[1.2%]
        bg-gradient-to-b from-custom-blue-100 to-transparent
        flex items-center justify-center select-none text-center font-semibold
        tracking-widest text-[1em] font-seasons text-white"
      >
        {/* Header logo */}
        <div
          className={`w-24 lg:w-[6%] h-full absolute left-0 bg-white py-[.4%] px-[.8%] ml-[1%]
          flex justify-center items-center cursor-pointer max-md:invisible
          ${showHeaderLogo ? "opacity-100 visible" : "opacity-0 invisible"}
          transition-all ease-in-out duration-500
          `}
          onClick={() => scrollToSelectedSection(0)} // Scroll to top
        >
          <img src={anemoi_logo_bk} sizes="100%" />
        </div>
        <div className="flex items-center justify-center w-full">
          |
          {sections.map((section, index) => (
            <React.Fragment key={index}>
              <div
                className="font-thin px-[30px] cursor-pointer"
                onClick={() => scrollToSelectedSection(index)}
              >
                {section}
              </div>
              |
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
