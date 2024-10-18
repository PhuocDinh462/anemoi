import React, { useEffect, useState } from 'react';
import { Fade as Hamburger } from 'hamburger-react';
import { Drawer } from '@mui/material';
import { anemoi_logo_bk, language_ic } from '@/constants/images';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

export default function Navbar(props: {
  sections: string[];
  refs: React.RefObject<HTMLDivElement>[];
}) {
  const { sections, refs } = props;
  const showLogo = useSelector((state: RootState) => state.navbar.showLogo);

  const scrollToSelectedSection = (index: number) => {
    if (refs[index].current) refs[index].current.scrollIntoView({ behavior: 'smooth' });
  };

  // For mobile only
  const [openNavbar, setOpenNavbar] = useState(false);
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
                setOpenNavbar(false);
                scrollToSelectedSection(refIndex);
              }}>
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
    const handleResize = () => setOpenNavbar(false);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  ///

  return (
    <div className="w-screen max-bm:relative">
      {/* Mobile case */}
      <div
        className="p-1 bg-gradient-to-b from-custom-blue-100 to-transparent
        bm:hidden size-fit absolute top-0 right-0">
        <Hamburger
          direction="right"
          color="#fff"
          size={26}
          distance="lg"
          toggled={openNavbar}
          toggle={setOpenNavbar}
        />
      </div>

      <Drawer
        anchor="top"
        open={openNavbar}
        style={{ zIndex: 50 }}
        onClose={() => setOpenNavbar(false)}
        PaperProps={{
          sx: {
            backgroundImage: 'linear-gradient(to bottom, rgba(40, 178, 230, 1), 70%, transparent)',
            backgroundColor: 'transparent',
            boxShadow: 'none'
          }
        }}
        slotProps={{ backdrop: { sx: { backgroundColor: 'rgba(255, 255, 255, .5)' } } }}>
        <div
          className="relative flex flex-col items-center justify-center w-full pt-[16%] pb-[20%]
          font-seasons text-white font-semibold text-lg 2xs:text-xl xs:text-2xl
          bg-gradient-to-b from-custom-blue-100 to-transparent">
          {/* Change language button */}
          <img
            className="absolute top-4 right-12 cursor-pointer size-[26px] mr-3 animate-dropDown"
            src={language_ic}
          />
          {/* Sections */}
          {renderSections()}
        </div>
      </Drawer>

      {/* PC case */}
      <div
        className="relative size-full max-bm:hidden pt-[10px] pb-[15px]
        bg-gradient-to-b from-custom-blue-100 to-transparent
        flex items-center justify-center select-none text-center font-semibold
        tracking-widest text-[1em] font-seasons text-white">
        {/* Header logo */}
        <div
          className={`w-24 lg:w-[6%] h-full absolute left-0 bg-white py-[.4%] px-[.8%] ml-[1%]
          flex justify-center items-center cursor-pointer max-md:invisible
          ${showLogo ? 'opacity-100 visible' : 'opacity-0 invisible'}
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
                onClick={() => scrollToSelectedSection(index)}>
                {section}
              </div>
              |
            </React.Fragment>
          ))}
        </div>

        <img
          className="cursor-pointer py-4 size-14 absolute right-3
          hover:scale-110 transition-all duration-300"
          src={language_ic}
        />
      </div>
    </div>
  );
}
