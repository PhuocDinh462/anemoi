import { useState } from 'react';
import { CHARACTERS } from '@/constants/characters';
import React from 'react';
import { arrow_chara_left, arrow_chara_right } from '@/constants/images';
import { useTranslation } from 'react-i18next';
import LANGUAGES from '@/constants/languages';
import i18n from '@/i18n';

export default function CharacterBox() {
  const [charaIndex, setCharaIndex] = useState(0);
  const currentChara = CHARACTERS[charaIndex];

  let touchStartX = 0;
  let touchEndX = 0;

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    touchEndX = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX === 0 || touchEndX === 0) return;
    if (touchStartX - touchEndX > 50) nextChara();
    else if (touchEndX - touchStartX > 50) prevChara();
  };

  const nextChara = () => setCharaIndex((charaIndex + 1) % CHARACTERS.length);
  const prevChara = () => setCharaIndex((charaIndex - 1 + CHARACTERS.length) % CHARACTERS.length);

  const { t } = useTranslation();
  const currentLanguage = LANGUAGES.find((lang) => lang.code === i18n.language);
  const currentFont = currentLanguage?.font ?? 'sans-serif';

  const textStyle =
    'text-white tracking-[.1em] md:text-sm/8 sm:text-xs/8 text-xs/7 ' +
    (currentLanguage?.code === 'jp' && 'md:text-base/9');

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
        className="flex sm:left-[51%] sm:top-[24%] sm:w-[360px] sm:absolute
        md:top-[22%] md:w-[400px]
        w-full top-[20%] left-1/2 justify-evenly max-sm:mt-40">
        {CHARACTERS.map((character, index) => (
          <div
            key={index}
            className={`size-[70px] max-xs:size-[60px] bg-cover cursor-pointer
            hover:opacity-70 transition-opacity duration-300`}
            style={{
              backgroundImage: `url('${
                charaIndex === index ? character.thumbnailActive : character.thumbnail
              }')`
            }}
            onClick={() => setCharaIndex(index)}
          />
        ))}
      </div>

      {/* Animated block */}
      {CHARACTERS.map(
        (character, index) =>
          index === charaIndex && (
            <React.Fragment key={index}>
              {/* Vertical catchphrase */}
              {currentLanguage?.code === 'jp' && (
                <div
                  className="md:top-[16%] left-[4%] -z-[1]
                  [writing-mode:vertical-rl] font-tsukumin size-fit
                  sm:text-lg sm:top-[25%] sm:absolute
                  max-sm:ml-10 max-sm:mt-10
                  max-xs:text-sm max-xs:ml-5
                  animate-fadeIn">
                  {t(`${currentChara.id}.catchphrase`)
                    .split('\n')
                    .map((part, index) => (
                      <React.Fragment key={index}>
                        <span className="size-fit bg-white py-[4px] px-[2px]">
                          {part}
                          <br className="sm:hidden" />
                        </span>
                      </React.Fragment>
                    ))}
                </div>
              )}

              {/* Character image */}
              <div
                className="absolute align-top sm:w-[70%] mt-2 -z-20 sm:top-[10%]
                md:w-[54%] md:top-[1%]
                top-[18%] animate-charaAnime">
                <img src={character.image} width="100%" />
              </div>

              {/* Text box */}
              <div
                className="md:top-[30%] align-top drop-shadow-chara-text-box
                sm:top-[34%] sm:left-[52%] sm:absolute
                bottom-0 max-sm:w-full bg-gradient-to-t max-sm:from-cb-blue from-50% max-sm:px-10 max-sm:pb-12 max-sm:mt-auto
                max-xs:px-5 max-xs:pb-8
                animate-fadeIn">
                <div
                  className="sm:text-lg/10 text-white tracking-[.2em]
                  max-sm:text-xl/10"
                  style={{ fontFamily: currentFont }}>
                  {t(`${currentChara.id}.alias`)}
                </div>
                <div className="h-[1px] w-full bg-cover bg-character_border" />

                <div
                  className="md:text-4xl/[4rem] text-white tracking-[.1em] 
                  sm:text-2xl/10
                  text-3xl/[3.5rem]">
                  <span className="pr-[10px]" style={{ fontFamily: currentFont }}>
                    {t(`${currentChara.id}.name`)}
                  </span>
                  {currentLanguage?.code === 'jp' && (
                    <span className="text-[.4em] align-[8px] whitespace-nowrap font-tsukumin">
                      {currentChara.furigana}
                    </span>
                  )}
                </div>

                {/* Horizontal catchphrase */}
                {currentLanguage?.code !== 'jp' && (
                  <div
                    className="mt-3 py-3 px-5 size-fit text-white font-voyage relative
                    md:text-xl bm:text-lg sm:text-base xs:text-xl text-base">
                    {t(`${currentChara.id}.catchphrase`)}
                    <div className="h-10 w-5 border-t-2 border-l-2 border-white absolute top-0 left-0" />
                    <div className="h-10 w-5 border-b-2 border-r-2 border-white absolute bottom-0 right-0" />
                  </div>
                )}

                <div className="text-xs font-seasons text-white italic mt-6">profile</div>
                <div className={textStyle} style={{ fontFamily: currentFont }}>
                  {t(`${currentChara.id}.profile`)
                    .split('\n')
                    .map((part, index) => (
                      <React.Fragment key={index}>
                        {part}
                        <br />
                      </React.Fragment>
                    ))}
                </div>

                <div className={`${textStyle} flex gap-x-4 flex-wrap`}>
                  <div style={{ fontFamily: currentFont }}>
                    <span className="text-xs font-seasons italic mr-4">spec</span>
                    {`${t('height')}${t('colon')}${currentChara.height}cm`}
                  </div>
                  <div style={{ fontFamily: currentFont }}>{`${t('weight')}${t('colon')}${
                    currentChara.weight
                  }kg`}</div>
                  <div style={{ fontFamily: currentFont }}>{`${t('b/w/h')}${t('colon')}${
                    currentChara.threeSize
                  }`}</div>
                </div>

                <div
                  className="text-white tracking-[.1em] md:text-base/9
                  sm:text-sm/8
                  text-xs/7">
                  <span className="text-xs font-seasons italic">illustration</span>
                  <span className={textStyle} style={{ fontFamily: currentFont }}>{`　${t(
                    'original artwork'
                  )}${t('colon')}${t(`${currentChara.id}.artwork`)}`}</span>
                </div>
              </div>

              {/* Character name */}
              <div
                className={`absolute left-[44%] md:bottom-[20%] font-thomasita sm:text-8xl -z-10 select-none
                sm:bottom-[10%]
                bottom-[40%] max-sm:[writing-mode:vertical-rl] max-sm:right-5 text-7xl
                animate-fadeIn`}
                style={{
                  color: `${currentChara.latinColor}`
                }}>
                {currentChara.latin}
              </div>
            </React.Fragment>
          )
      )}

      {/* Arrow right */}
      <div
        className="w-[69px] cursor-pointer absolute top-1/2 -translate-y-1/2  -right-[10%]
        max-sm:hidden"
        onClick={() => nextChara()}>
        <img src={arrow_chara_right} />
      </div>

      {/* Arrow left */}
      <div
        className="w-[69px] cursor-pointer absolute top-1/2 -translate-y-1/2  -left-[10%]
        max-sm:hidden"
        onClick={() => prevChara()}>
        <img src={arrow_chara_left} />
      </div>
    </div>
  );
}
