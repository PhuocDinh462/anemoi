import { LeafType } from '@/models/leaf.model';
import { useRef, useEffect, useState } from 'react';
import LeafBox from './leaf_box';
import { useTranslation } from 'react-i18next';
import LANGUAGES from '@/constants/languages';
import i18n from '@/i18n';
import { WIDTH_XS } from '@/constants/size';
import React from 'react';

export default function Story() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const componentRef = useRef(null);
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
  const currentLanguage = LANGUAGES.find((lang) => lang.code === i18n.language);
  const currentFont = currentLanguage?.font ?? 'sans-serif';

  const numberOfLines = 10;
  const lines = Array.from({ length: numberOfLines }, (_, index) => t(`story.line${index + 1}`));

  return (
    <div
      className="w-full h-screen min-h-[800px] bg-story-bg bg-cover bg-no-repeat bg-center
      flex justify-center items-center relative overflow-hidden"
      ref={componentRef}>
      {/* Text box */}
      <div
        className={`flex flex-col justify-center items-center z-50 mx-4 ${
          isInView && 'animate-fadeDown'
        }`}>
        <div
          className="font-seasons text-5xl font-light tracking-[.2em] indent-[.2em] text-white
        max-sm:text-4xl max-xs:text-3xl">
          story
        </div>
        <div className="font-thomasita text-[#cc719c] font-semibold text-lg">anemoi</div>

        <div
          className="py-[30px] text-center leading-8 text-white
          max-xs:text-[.875rem]/7"
          style={{ fontFamily: currentFont }}>
          {lines.map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index % 2 !== 0 ? (
                <>
                  <br />
                  <br />
                </>
              ) : currentLanguage?.code !== 'jp' && windowWidth < WIDTH_XS ? (
                ' '
              ) : (
                <br />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Leaf box */}
      <LeafBox type={LeafType.STORY_LEAF} />
    </div>
  );
}
