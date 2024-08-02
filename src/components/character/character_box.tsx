import { useState } from "react";
import { CHARACTERS } from "@/constants/characters";
import React from "react";

export default function CharacterBox(props: { isInView: boolean }) {
  const [characterIndex, setCharacterIndex] = useState(0);
  const { isInView } = props;

  return (
    <div
      className="w-[70%] md:min-w-[950px] h-full m-auto relative z-10 md:pt-0
    min-w-[90%] pt-[10%]
    max-sm:w-full
    max-sm:flex max-sm:flex-col"
    >
      {/* Thumbnail box */}
      <div
        className="flex sm:left-[51%] sm:top-[24%] sm:w-[360px] sm:absolute
        md:top-[22%] md:w-[400px]
        w-full top-[20%] left-1/2 justify-evenly max-sm:mt-40"
      >
        {CHARACTERS.map((character, index) => (
          <div
            key={index}
            className={`size-[70px] max-xs:size-[60px] bg-cover cursor-pointer
            hover:opacity-70 transition-opacity duration-300`}
            style={{
              backgroundImage: `url('./src/assets/images/${
                characterIndex === index ? character.thumbnailActive : character.thumbnail
              }')`,
            }}
            onClick={() => setCharacterIndex(index)}
          />
        ))}
      </div>

      {/* Animated block */}
      <div className={`size-full ${isInView && "animate-fadeUp"}`}>
        {CHARACTERS.map(
          (character, index) =>
            index === characterIndex && (
              <>
                {/* Character catchphrase */}
                <div
                  className="md:top-[16%] left-[4%] -z-[1]
                  [writing-mode:vertical-rl] font-tsukumin size-fit
                  sm:text-lg sm:top-[25%] sm:absolute
                  max-sm:ml-10 max-sm:mt-10
                  max-xs:text-sm max-xs:ml-5
                  animate-fadeIn"
                >
                  {CHARACTERS[characterIndex].catchphrase.split("<br/>").map((part, index) => (
                    <React.Fragment key={index}>
                      <span className="size-fit bg-white py-[4px] px-[2px]">
                        {part}
                        <br className="sm:hidden" />
                      </span>
                    </React.Fragment>
                  ))}
                </div>

                {/* Character image */}
                <div
                  className="absolute align-top sm:w-[70%] mt-2 -z-20 sm:top-[10%]
                  md:w-[54%] md:top-[1%]
                  top-[18%] animate-charaAnime"
                >
                  <img src={`./src/assets/images/${character.image}`} width="100%" />
                </div>

                {/* Text box */}
                <div
                  className="md:top-[30%] align-top drop-shadow-text
                  sm:top-[34%] sm:left-[52%] sm:absolute
                  bottom-0 max-sm:w-full bg-gradient-to-t max-sm:from-cb-blue from-50% max-sm:px-10 max-sm:pb-12 max-sm:mt-auto
                  max-xs:px-5 max-xs:pb-8
                  animate-fadeIn"
                >
                  <div
                    className="sm:text-lg/10 font-tsukumin text-white tracking-[.2em]
                    max-sm:text-xl/10"
                  >
                    {CHARACTERS[characterIndex].alias}
                  </div>
                  <div className="h-[1px] w-full bg-cover bg-character_border" />

                  <div
                    className="md:text-4xl/[4rem] font-tsukumin text-white tracking-[.1em] 
                    sm:text-2xl/10
                    text-3xl/[3.5rem]"
                  >
                    <span className="pr-[10px]">{CHARACTERS[characterIndex].kanji}</span>
                    <span className="text-[.4em] align-[8px] whitespace-nowrap">
                      {CHARACTERS[characterIndex].furigana}
                    </span>
                  </div>

                  <div className="text-xs font-seasons text-white italic pt-8">profile</div>
                  <div
                    className="font-tsukumin text-white tracking-[.1em] md:text-base/9
                    sm:text-sm/8
                    text-xs/7"
                  >
                    {CHARACTERS[characterIndex].profile.split("<br/>").map((part, index) => (
                      <React.Fragment key={index}>
                        {part}
                        <br />
                      </React.Fragment>
                    ))}
                  </div>

                  <div
                    className="font-tsukumin text-white tracking-[.1em] md:text-base/9
                    sm:text-sm/8
                    text-xs/7"
                  >
                    <span className="text-xs font-seasons italic">spec</span>
                    <span>{`　身長：${CHARACTERS[characterIndex].height}cm　
                    体重：${CHARACTERS[characterIndex].weight}kg　
                    B/W/H：${CHARACTERS[characterIndex].threeSize}`}</span>
                  </div>

                  <div
                    className="font-tsukumin text-white tracking-[.1em] md:text-base/9
                    sm:text-sm/8
                    text-xs/7"
                  >
                    <span className="text-xs font-seasons italic">illustration</span>
                    <span>{`　原画：${CHARACTERS[characterIndex].illustration}`}</span>
                  </div>
                </div>

                {/* Character name */}
                <div
                  className={`absolute left-[44%] md:bottom-[20%] font-thomasita sm:text-8xl -z-10 
                  sm:bottom-[10%]
                  bottom-[40%] max-sm:[writing-mode:vertical-rl] max-sm:right-5 text-7xl
                  animate-fadeIn`}
                  style={{
                    color: `${CHARACTERS[characterIndex].catchphraseColor}`,
                  }}
                >
                  {CHARACTERS[characterIndex].latin}
                </div>
              </>
            )
        )}
      </div>

      {/* Arrow right */}
      <div
        className="w-[69px] cursor-pointer absolute top-1/2 -translate-y-1/2  -right-[10%]
        max-sm:hidden"
        onClick={() => setCharacterIndex((characterIndex + 1) % CHARACTERS.length)}
      >
        <img src="./src/assets/images/arrow_chara_right.png" />
      </div>

      {/* Arrow left */}
      <div
        className="w-[69px] cursor-pointer absolute top-1/2 -translate-y-1/2  -left-[10%]
        max-sm:hidden"
        onClick={() =>
          setCharacterIndex((characterIndex - 1 + CHARACTERS.length) % CHARACTERS.length)
        }
      >
        <img src="./src/assets/images/arrow_chara_left.png" />
      </div>
    </div>
  );
}
