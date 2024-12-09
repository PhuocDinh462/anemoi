import React, { useEffect, useState } from 'react';
import { Fade as Hamburger } from 'hamburger-react';
import { Drawer } from '@mui/material';
import { anemoi_logo_bk, language_ic } from '@/constants/images';
import LanguageMenu from './language_menu';
import LanguageDrawer from './language_drawer';
import { WIDTH_MIN } from '@/constants/size';
import { selectLogoStatus } from '@/redux/slices/navbar.slice';
import { useSelector } from 'react-redux';

export default function Navbar(props: {
  sections: string[];
  refs: React.RefObject<HTMLDivElement>[];
}) {
  const { sections, refs } = props;
  const logoStatus = useSelector(selectLogoStatus);

  const scrollToSelectedSection = (index: number) => {
    if (refs[index].current) refs[index].current.scrollIntoView({ behavior: 'smooth' });
  };

  // For mobile only
  const [openNavbarDrawer, setOpenNavbarDrawer] = useState(false);
  const [openLanguageDrawer, setOpenLanguageDrawer] = useState(false);
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
                setAllDrawers(false);
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
    const handleResize = () => setAllDrawers(false);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const setAllDrawers = (value: boolean) => {
    setOpenNavbarDrawer(value);
    setOpenLanguageDrawer(value);
  };
  /// End for mobile only

  return (
    <div className="w-screen max-2sm:relative" style={{ minWidth: WIDTH_MIN }}>
      {/* Mobile case */}
      <div
        className="p-1 bg-gradient-to-b from-custom-blue-100 to-transparent
        2sm:hidden size-fit absolute top-0 right-0">
        <Hamburger
          direction="right"
          label="Show menu"
          color="#fff"
          size={26}
          distance="lg"
          toggled={openNavbarDrawer || openLanguageDrawer}
          toggle={setOpenNavbarDrawer}
          onToggle={() => setOpenLanguageDrawer(false)}
        />
      </div>

      <Drawer
        anchor="top"
        open={openNavbarDrawer}
        style={{ zIndex: 51 }}
        onClose={() => setOpenNavbarDrawer(false)}
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
          font-seasons text-white font-semibold text-lg xs2:text-xl xs:text-2xl
          bg-gradient-to-b from-custom-blue-100 to-transparent">
          {/* Change language button */}
          <img
            className="absolute top-4 right-12 cursor-pointer size-[26px] mr-3 animate-dropDown"
            src={language_ic}
            alt="language_ic"
            onClick={() => {
              setOpenNavbarDrawer(false);
              setOpenLanguageDrawer(true);
            }}
          />
          {/* Sections */}
          {renderSections()}
        </div>
      </Drawer>

      <LanguageDrawer
        open={openLanguageDrawer}
        setOpen={setOpenLanguageDrawer}
        setOpenNavbarDrawer={setOpenNavbarDrawer}
      />

      {/* PC case */}
      <div
        className="relative size-full max-2sm:hidden pt-[16px] pb-[20px]
        bg-gradient-to-b from-custom-blue-100 to-transparent
        flex items-center justify-center select-none text-center font-semibold
        tracking-widest text-[1em] font-seasons text-white">
        {/* Header logo */}
        <div
          className={`w-24 lg:w-[6%] h-full absolute left-0 bg-white py-[.4%] px-[.8%] ml-[1%]
          flex justify-center items-center cursor-pointer max-md:invisible
          ${logoStatus ? 'opacity-100 visible' : 'opacity-0 invisible'}
          transition-all ease-in-out duration-500
          `}
          onClick={() => scrollToSelectedSection(0)} // Scroll to top
        >
          <img src={anemoi_logo_bk} sizes="100%" alt="anemoi_logo_bk" />
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

        <div className="absolute right-4">
          <LanguageMenu />
        </div>
      </div>
    </div>
  );
}
