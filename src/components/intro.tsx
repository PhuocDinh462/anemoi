import { useRef, useEffect, useState } from 'react';
import LeafBox from './leaf_box';
import { LeafType } from '@/models/leaf.model';
import { useTranslation } from 'react-i18next';
import LANGUAGES from '@/constants/languages';
import i18n from '@/i18n';
import { BG_RATIO, WIDTH_XL } from '@/constants/size';

export default function Intro() {
  const componentRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const currentIntroRef = componentRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    );

    if (currentIntroRef) {
      observer.observe(currentIntroRef);
    }

    return () => {
      if (currentIntroRef) {
        observer.unobserve(currentIntroRef);
      }
    };
  }, []);

  const { t } = useTranslation();
  const currentLanguage = LANGUAGES.find((lang) => lang.getCode() === i18n.language);
  const currentFont = currentLanguage?.getFont() ?? 'sans-serif';

  return (
    <div
      className="w-full h-screen min-h-[800px] bg-intro-bg bg-cover bg-no-repeat bg-center
      flex justify-center items-center relative overflow-hidden"
      style={windowWidth >= WIDTH_XL ? { minHeight: `${windowWidth / BG_RATIO}px` } : {}}
      ref={componentRef}>
      {/* Text box */}
      <div
        className={`flex flex-col justify-center items-center z-50 mx-4 ${
          isInView && 'animate-fadeDown'
        }`}>
        <div
          className="font-seasons text-5xl font-light tracking-[.2em] indent-[.2em] 
        max-sm:text-4xl max-xs:text-3xl">
          introduction
        </div>
        <div className="font-thomasita text-[#d7a732] font-semibold text-lg">anemoi</div>

        <div
          className="py-[30px] text-center leading-10 
          max-sm:text-[.875rem]/8"
          style={{ fontFamily: currentFont }}>
          {t('intro.line1')}
          <br />
          {t('intro.line2')}
          <br />
          {t('intro.line3')}
          <br />
          {t('intro.line4')}
        </div>

        <div className="font-thomasita font-semibold text-sm">staff</div>
        <div
          className="text-center leading-10 
          max-sm:text-[.875rem]/8"
          style={{ fontFamily: currentFont }}>
          {`［ ${t('original artwork')} ］Na-Ga ／ ${t('fumuyun')} ／ ${t(
            'nagayama yuunon'
          )} ／ ${t('kimishima ao')}`}
          <br />
          {`［ ${t('scenario')} ］${t('kai')} ／ ${t('niijima yuu')} ／ ${t('hasama')} ／ ${t(
            'sayuki shun'
          )}`}
          <br />
          {`［ ${t('music producer')} ］${t('orito shinji')}　［ ${t('director')}］ ${t('kai')}`}
          <br />
          {`［ ${t('producer')} ］${t('okano touya')}`}
          <br />
          {`［ ${t('genre')} ］${t('romance adventure game')}`}
        </div>
      </div>

      {/* Leaf box */}
      <LeafBox type={LeafType.INTRO_LEAF} />
    </div>
  );
}
