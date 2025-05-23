import { useState, useRef, useEffect, Fragment, TouchEvent } from 'react';
import { CHARACTERS } from '@/constants/characters';
import { arrow_chara_left, arrow_chara_right } from '@/constants/images';
import { useTranslation } from 'react-i18next';
import LANGUAGES from '@/constants/languages';
import i18n from '@/i18n';
import { WIDTH_MD } from '@/constants/size';

export default function CharacterBox() {
  const [charaIndex, setCharaIndex] = useState(0);
  const currentChara = CHARACTERS[charaIndex];

  let touchStartX = 0;
  let touchEndX = 0;

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    touchStartX = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    touchEndX = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchEndX === 0) return; // Prevents from tapping
    if (touchStartX - touchEndX > 50) nextChara();
    else if (touchEndX - touchStartX > 50) prevChara();
  };

  const nextChara = () => changeChara((charaIndex + 1) % CHARACTERS.length);
  const prevChara = () => changeChara((charaIndex - 1 + CHARACTERS.length) % CHARACTERS.length);

  const changeChara = async (index: number) => {
    document.body.style.cursor = 'wait';
    await loadCharaImages()
      .then(() => setCharaIndex(index))
      .catch((e) => console.error('Error loading images:', e))
      .finally(() => (document.body.style.cursor = 'auto'));
  };

  const { t } = useTranslation();
  const currentLanguage = LANGUAGES.find((lang) => lang.getCode() === i18n.language);
  const currentFont = currentLanguage?.getFont() ?? 'sans-serif';

  // Preload images
  const preloadedImages = useRef<HTMLImageElement[]>([]);

  /* Use this function to prevent the images from being preloaded multiple times
  when open/close toggle device toolbar in browser's DevTools */
  const loadCharaImages = () => {
    const charaImages = CHARACTERS.map((chara) => [
      chara.getImage(),
      chara.getThumbnail(),
      chara.getThumbnailActive()
    ]).flat();

    return Promise.all(
      charaImages.map((src) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          preloadedImages.current.push(img);
        });
      })
    );
  };

  const [tabletMode, setTabletMode] = useState(false);

  const handleResize = () => {
    setTabletMode(window.innerWidth < window.innerHeight && window.innerWidth > WIDTH_MD);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const textStyle =
    'text-white ' +
    (currentLanguage?.getCode() === 'jp'
      ? 'md:text-base/8 text-xs/7'
      : 'md:text-sm/[1.85rem] text-xs/[1.65rem] tracking-[.1em]');

  return (
    <div
      className="w-[70%] md:min-w-[950px] h-full m-auto relative z-10 md:pt-0
      min-w-[90%] pt-[10%]
      max-sm:w-full
      max-sm:flex max-sm:flex-col"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}>
      {/* Thumbnail box */}
      <div
        className={`flex sm:top-[22%] sm:w-[360px] sm:absolute sm:gap-2
        md:w-[400px] md:gap-3
        w-full top-[20%] left-1/2 max-sm:justify-evenly max-sm:mt-40
        ${
          currentLanguage?.getCode() === 'jp'
            ? 'sm:left-[51%] md:left-[44%] 2md:left-[51%]'
            : 'sm:left-[46%] md:left-[44%] 2md:left-[51%]'
        }`}>
        {CHARACTERS.map((character, index) => (
          <div
            key={index}
            className={`md:size-[70px] size-[60px] bg-cover cursor-pointer
            hover:opacity-70 transition-opacity duration-300`}
            style={{
              backgroundImage: `url('${
                charaIndex === index ? character.getThumbnailActive() : character.getThumbnail()
              }')`
            }}
            onClick={() => changeChara(index)}
          />
        ))}
      </div>

      {/* Animated block */}
      {CHARACTERS.map(
        (character, index) =>
          index === charaIndex && (
            <Fragment key={index}>
              {/* Vertical quote */}
              {currentLanguage?.getCode() === 'jp' && (
                <div
                  className="md:top-[20%] left-[4%] -z-[1]
                  [writing-mode:vertical-rl] font-mincho size-fit
                  sm:text-lg sm:top-[25%] sm:absolute
                  max-sm:ml-10 max-sm:mt-10
                  max-xs:text-sm max-xs:ml-5
                  animate-fadeIn">
                  {t(`${currentChara.getId()}.quote`)
                    .split('\n')
                    .map((value, index) => (
                      <Fragment key={index}>
                        <span className="size-fit bg-white py-[4px] px-[2px]">
                          {value}
                          <br className="sm:hidden" />
                        </span>
                      </Fragment>
                    ))}
                </div>
              )}

              {/* Character image */}
              <div
                className={`max-xl:absolute align-top mt-2 -z-20
                md:w-[54%] sm:w-[70%]
                ${
                  currentLanguage?.getCode() === 'jp'
                    ? 'md:top-[5%] 2sm:top-[10%] sm:top-[12%]'
                    : 'md:top-[8%] 2sm:top-[13%] sm:top-[15%] sm:left-[-5%] md:left-0'
                }
                top-[18%] animate-charaAnime
                ${tabletMode && '!top-[10%]'}`}>
                <img src={character.getImage()} width="100%" alt={character.getId()} />
              </div>

              {/* Text box */}
              <div
                className={`align-top drop-shadow-chara-text-box
                md:top-[30%] md:w-[48%]
                sm:top-[29%] sm:absolute
                ${
                  currentLanguage?.getCode() === 'jp'
                    ? 'sm:left-[52%] md:left-[45%] 2md:left-[52%]'
                    : 'sm:left-[47%] md:left-[45%] 2md:left-[52%]'
                }
                bottom-0 max-sm:w-full max-sm:bg-gradient-to-t from-cb-blue from-50% max-sm:px-10 max-sm:pb-12 max-sm:mt-auto
                max-xs:px-5 max-xs:pb-8
                animate-fadeIn`}>
                <div
                  className="sm:text-lg/10 text-white tracking-[.2em]
                  max-sm:text-xl/10"
                  style={{ fontFamily: currentFont }}>
                  {t(`${currentChara.getId()}.alias`)}
                </div>
                <div className="h-[1px] w-full bg-cover bg-character_border" />

                <div
                  className="md:text-4xl/[4rem] text-white tracking-[.1em]
                  sm:text-2xl/10
                  text-3xl/[3.5rem]">
                  <span className="pr-[10px]" style={{ fontFamily: currentFont }}>
                    {t(`${currentChara.getId()}.name`)}
                  </span>
                  {currentLanguage?.getCode() === 'jp' && (
                    <span className="text-[.4em] align-[8px] whitespace-nowrap font-mincho">
                      {currentChara.getFurigana()}
                    </span>
                  )}
                </div>

                {/* Horizontal quote */}
                {currentLanguage?.getCode() !== 'jp' && (
                  <div
                    className="mt-3 py-3 px-5 size-fit text-white font-voyage relative
                    md:text-xl 2sm:text-lg sm:text-base xs:text-xl text-base">
                    {t(`${currentChara.getId()}.quote`)}
                    <div
                      className="h-10 w-5 border-white absolute top-0 left-0
                      border-t xs:border-t-2
                      border-l xs:border-l-2"
                    />
                    <div
                      className="h-10 w-5 border-white absolute bottom-0 right-0
                      border-b xs:border-b-2
                      border-r xs:border-r-2"
                    />
                  </div>
                )}

                <div className="text-xs font-seasons text-white italic mt-6 mb-[.35rem]">
                  profile
                </div>
                <div className={textStyle} style={{ fontFamily: currentFont }}>
                  {t(`${currentChara.getId()}.profile`)
                    .split('\n')
                    .map((value, index) => (
                      <Fragment key={index}>
                        {value}
                        <br />
                      </Fragment>
                    ))}
                </div>

                <div className={`${textStyle} flex gap-x-4 flex-wrap`}>
                  <div style={{ fontFamily: currentFont }}>
                    <span className="text-xs font-seasons italic mr-4">spec</span>
                    {`${t('height')}${t('colon')}${currentChara.getHeight()}cm`}
                  </div>
                  <div
                    style={{
                      fontFamily: currentFont
                    }}>{`${t('weight')}${t('colon')}${currentChara.getWeight()}kg`}</div>
                  <div
                    style={{
                      fontFamily: currentFont
                    }}>{`${t('b/w/h')}${t('colon')}${currentChara.getThreeSize()}`}</div>
                </div>

                <div
                  className="text-white tracking-[.1em] md:text-base
                  sm:text-sm
                  text-xs">
                  <span className="text-xs font-seasons italic mr-4">illustration</span>
                  <span className={textStyle} style={{ fontFamily: currentFont }}>{`${t(
                    'original artwork'
                  )}${t('colon')}${t(`${currentChara.getId()}.artwork`)}`}</span>
                </div>
              </div>

              {/* Character latin */}
              <div
                className={`absolute left-[44%] md:bottom-[20%] font-thomasita sm:text-8xl -z-10 select-none
                sm:bottom-[10%]
                bottom-[40%] max-sm:[writing-mode:vertical-rl] max-sm:right-5 text-7xl
                animate-fadeIn`}
                style={{
                  color: `${currentChara.getLatinColor()}`
                }}>
                {currentChara.getLatin()}
              </div>
            </Fragment>
          )
      )}

      {/* Arrow right */}
      <div
        className="w-[69px] cursor-pointer absolute top-1/2 -translate-y-1/2  -right-[10%]
        max-sm:hidden"
        onClick={() => nextChara()}>
        <img src={arrow_chara_right} alt="arrow_chara_right" />
      </div>

      {/* Arrow left */}
      <div
        className="w-[69px] cursor-pointer absolute top-1/2 -translate-y-1/2  -left-[10%]
        max-sm:hidden"
        onClick={() => prevChara()}>
        <img src={arrow_chara_left} alt="arrow_chara_left" />
      </div>
    </div>
  );
}
