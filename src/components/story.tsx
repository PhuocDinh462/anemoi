import { LeafType } from '@/models/leaf.model';
import { useRef, useEffect, useState } from 'react';
import LeafBox from './leaf_box';
import { useTranslation } from 'react-i18next';
import LANGUAGES from '@/constants/languages';
import i18n from '@/i18n';

export default function Story() {
  const componentRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

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
          {t('story.line1')}
          <br />
          {t('story.line2')}
          <br />
          <br />
          {t('story.line3')}
          <br />
          {t('story.line4')}
          <br />
          <br />
          {t('story.line5')}
          <br />
          {t('story.line6')}
          <br />
          <br />
          {t('story.line7')}
          <br />
          {t('story.line8')}
          <br />
          <br />
          {t('story.line9')}
          <br />
          {t('story.line10')}
          <br />
        </div>
      </div>

      {/* Leaf box */}
      <LeafBox type={LeafType.STORY_LEAF} />
    </div>
  );
}
