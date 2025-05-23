import { anemoi_logo, fv_main_bg_sp, key_logo_black, key_logo_white } from '@/constants/images';
import { BG_RATIO, WIDTH_MD, WIDTH_SM, WIDTH_XL } from '@/constants/size';
import { useEffect, useRef, useState, Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { showLogo, hideLogo } from '@/redux/slices/navbar.slice';
import { useTranslation } from 'react-i18next';

export default function Cover() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [tabletMode, setTabletMode] = useState(false);
  const [mobileMode, setMobileMode] = useState(false);
  const [checkScreenModeComplete, setCheckScreenModeComplete] = useState(false);
  const mobileModeRatio = 0.8; // A ratio to determine mobile mode

  const blockRef = useRef(null);
  const dispatch = useDispatch();

  const handleResize = () => {
    try {
      setWindowWidth(window.innerWidth);
      setTabletMode(window.innerWidth < window.innerHeight && window.innerWidth > WIDTH_MD);
      setMobileMode(
        window.innerWidth / window.innerHeight < mobileModeRatio || window.innerWidth <= WIDTH_SM
      );
    } finally {
      setCheckScreenModeComplete(true);
    }
  };

  useEffect(() => {
    handleResize();
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
  }, [dispatch, checkScreenModeComplete]);

  const { i18n } = useTranslation();
  const t = i18n.t;
  const currentLanguage = i18n.language;

  const logo = (
    <div
      className={`min-w-64 mx-14
      ${tabletMode ? 'w-1/2' : 'md:w-100 w-1/2 sm:w-2/5'}
      ${currentLanguage !== 'jp' && tabletMode && '!size-[60%]'}`}>
      <img src={anemoi_logo} alt="anemoi アネモイ" className="object-cover drop-shadow-logo" />
    </div>
  );

  const sloganJp = (
    <div
      className={`xs:text-lg/9 xs2:text-base/7 text-sm/6 xs2:mt-6 mt-2 [writing-mode:vertical-rl] font-light
    text-white tracking-[0.25em] drop-shadow-slogan font-mincho
      ${tabletMode && '!text-2xl/10'}`}>
      {t('title')
        .split('\n')
        .map((value, index) => (
          <Fragment key={index}>
            {index !== 0 && <br />}
            {value}
          </Fragment>
        ))}
      <span className="tracking-wider"> ――</span>
    </div>
  );

  return (
    <>
      {checkScreenModeComplete ? (
        <div
          className={`relative overflow-hidden md:h-screen bg-cover bg-no-repeat
          sm:bg-bottom sm:min-h-[900px] sm:bg-main-bg-sp
          ${!tabletMode && 'md:bg-top md:bg-main-bg'}`}
          style={windowWidth >= WIDTH_XL ? { minHeight: `${windowWidth / BG_RATIO}px` } : {}}
          ref={blockRef}>
          {/* BG */}
          {windowWidth < WIDTH_SM && (
            <div className="-z-50">
              <img src={fv_main_bg_sp} alt="fv_main_bg_sp" className="object-cover object-top" />
            </div>
          )}

          {/* Slogan & Logo */}
          <div
            className={`absolute xs2:top-11 top-5 w-full flex items-center justify-center animate-fadeDown
            ${mobileMode && 'flex-col-reverse'}`}>
            {currentLanguage === 'jp' && sloganJp}

            {currentLanguage === 'jp' ? (
              logo
            ) : (
              <div className={`flex flex-col justify-center items-center`}>
                {logo}
                <div
                  className={`drop-shadow-slogan text-white font-mongolia tracking-widest
              md:text-5xl xs:text-6xl xs2:text-5xl text-4xl
              ${tabletMode && '!text-7xl'}`}>
                  {t('title')}
                </div>
              </div>
            )}

            {/* Dummy component for logo's center alignment */}
            {currentLanguage === 'jp' && (
              <div className={`${mobileMode ? 'hidden' : 'invisible'}`}>{sloganJp}</div>
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
            <a
              href="https://key.visualarts.gr.jp/"
              target="_blank"
              rel="noopener noreferrer"
              className={`relative w-[12%]
              md:w-[4%] md:bottom-[30px]
              sm:absolute sm:w-[8%] sm:bottom-[10%] sm:right-[50px]
              ${tabletMode && '!w-[8%]'}`}>
              <img
                src={`${tabletMode ? key_logo_black : windowWidth < WIDTH_MD ? key_logo_black : key_logo_white}`}
                alt="Key"
                className="align-bottom"
              />
            </a>
          </div>

          {/* Scroll */}
          <div
            className="max-sm:hidden absolute left-1/2 -translate-x-1/2
            flex flex-col items-center bottom-0 h-[70px] font-seasons w-10 overflow-hidden">
            <span className="text-xs tracking-widest italic pb-2">Scroll</span>
            <div className="h-8 w-[.5px] bg-black animate-pathMove" />
          </div>
        </div>
      ) : (
        // Dummy component to prevent text box fade down animation in Intro component
        <div className="h-screen" />
      )}
    </>
  );
}
