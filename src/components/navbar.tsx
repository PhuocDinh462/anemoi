import React from "react";

export default function Navbar(props: {
  sections: string[];
  refs: React.RefObject<HTMLDivElement>[];
}) {
  const { sections, refs } = props;

  const scrollToSelectedSection = (index: number) => {
    if (refs[index].current) {
      refs[index].current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="relative pt-2 pb-5 bg-gradient-to-b from-custom-blue-100 to-transparent 
      flex items-center justify-center select-none text-center text-white font-semibold
      font-seasons tracking-widest text-[1em]"
    >
      <div
        className="w-[6%] h-full absolute left-0 bg-white py-[.4%] px-[.8%] ml-[1%]
        flex justify-center items-center cursor-pointer"
        onClick={() => scrollToSelectedSection(0)} // Scroll to top
      >
        <img src="src/assets/images/anemoi_logo_bk.png" sizes="100%" />
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
  );
}
