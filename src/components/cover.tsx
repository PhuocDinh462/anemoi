import { anemoi_logo, fv_main_bg_sp, key_logo_black, key_logo_white } from '@/constants/images';
import { WIDTH_SM } from '@/constants/size';
import { Link } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { showLogo, hideLogo } from '@/redux/slices/navbar.slice';
import { useTranslation } from 'react-i18next';

export default function Cover() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const blockRef = useRef(null);
  const dispatch = useDispatch();

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const currentRef = blockRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            dispatch(hideLogo());
          } else {
            dispatch(showLogo());
          }
        });
      },
      {
        threshold: 0.1
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [dispatch]);

  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const logoComponent = (
    <div className={`${currentLanguage === 'jp' && 'bm:mr-32'} min-w-64 w-1/2 md:w-100 sm:w-2/5`}>
      <img src={anemoi_logo} alt="anemoi アネモイ" className="object-cover drop-shadow-logo" />
    </div>
  );

  return (
    <div
      className="relative overflow-hidden h-[auto] md:h-screen min-h-[auto] bg-cover bg-no-repeat md:bg-top md:bg-main-bg
      sm:bg-bottom sm:bg-main-bg-sp sm:min-h-[900px]"
      ref={blockRef}>
      {/* BG */}
      {windowWidth < WIDTH_SM && (
        <div className="-z-50">
          <img src={fv_main_bg_sp} alt="fv_main_bg_sp" className="object-cover object-top" />
        </div>
      )}

      {/* Slogan & Logo */}
      <div
        className="absolute 2xs:top-11 top-5 w-full flex items-center justify-center 
        max-bm:flex-col-reverse animate-fadeDown">
        {currentLanguage === 'jp' && (
          <div
            className="bm:mr-14 xs:text-lg/9 2xs:text-base/7 text-sm/6 2xs:mt-6 mt-2 [writing-mode:vertical-rl] font-light
          text-white tracking-[0.25em] drop-shadow-slogan font-mincho">
            約束は、
            <br />
            風のなかに
            <span className="tracking-wider"> ――</span>
          </div>
        )}

        {currentLanguage === 'jp' ? (
          logoComponent
        ) : (
          <div className="flex flex-col justify-center items-center">
            {logoComponent}
            <div
              className="drop-shadow-slogan text-white font-mongolia tracking-widest
              md:text-5xl xs:text-6xl 2xs:text-5xl text-4xl">
              Lời hẹn ước trong gió
            </div>
          </div>
        )}
      </div>

      {/* Coming 2025 */}
      <div
        className="absolute bottom-[14%] sm:bottom-[22.5%] left-1/2 
        -translate-x-1/2 text-4xl text-[#7ca0d1] font-thomasita">
        Coming
      </div>
      <div
        className="absolute bottom-[8%] sm:bottom-[18%] left-1/2 
        -translate-x-1/2 tracking-[0.42em] indent-[0.42em]
        font-seasons font-thin text-5xl text-custom-black-900">
        2025
      </div>

      {/* Key logo */}
      <div className="flex justify-end pr-[4%] pb-[4%]">
        <Link
          href="https://key.visualarts.gr.jp/"
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-[12%]
          md:w-[4%] md:bottom-[30px]
          sm:absolute sm:w-[8%] sm:bottom-[10%] sm:right-[50px]">
          <img
            src={`${windowWidth >= WIDTH_SM ? key_logo_white : key_logo_black}`}
            alt="Key"
            className="align-bottom"
          />
        </Link>
      </div>

      {/* Scroll */}
      <div
        className="max-sm:hidden absolute left-1/2 -translate-x-1/2 
        flex flex-col items-center bottom-0 h-[70px] font-seasons w-10 overflow-hidden">
        <span className="text-xs tracking-widest italic pb-2">Scroll</span>
        <div className="h-8 w-[.5px] bg-black animate-pathMove" />
      </div>
    </div>
  );
}
