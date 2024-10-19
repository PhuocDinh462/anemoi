import { LeafType } from '@/models/leaf.model';
import { useRef, useEffect, useState } from 'react';
import LeafBox from './leaf_box';
import { CURRENT_LANGUAGE } from '@/constants/languages';
import { useTranslation } from 'react-i18next';

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
  const currentFont = CURRENT_LANGUAGE?.font ?? 'sans-serif';

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
          {t('story1')}
          <br />
          {t('story2')}
          <br />
          <br />
          {t('story3')}
          <br />
          {t('story4')}
          <br />
          <br />
          {t('story5')}
          <br />
          {t('story6')}
          <br />
          <br />
          {t('story7')}
          <br />
          {t('story8')}
          <br />
          <br />
          {t('story9')}
          <br />
          {t('story10')}
          <br />
        </div>
      </div>

      {/* Leaf box */}
      <LeafBox type={LeafType.STORY_LEAF} />
    </div>
  );
}
