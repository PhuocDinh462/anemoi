export default function CharacterBox() {
  return (
    <div
      className="w-[70%] md:min-w-[950px] h-full m-auto relative z-10 md:pt-0
    min-w-[90%] pt-[10%]
    max-sm:w-full"
    >
      {/* Character slogan */}
      <div
        className="absolute md:top-[16%] left-[4%] -z-[1] bg-white py-[4px] px-[2px]
        [writing-mode:vertical-rl] font-tsukumin
        sm:top-[25%] sm:text-lg
        top-[30%]
        max-xs:text-sm"
      >
        「私はただ風に吹かれていることにするわ」
      </div>

      {/* Character image */}
      <div
        className="absolute align-top sm:w-[70%] mt-2 -z-20 sm:top-[10%]
        md:w-[54%] md:top-[1%]
        top-[20%]"
      >
        <img src="./src/assets/images/character_1.png" width="100%" />
      </div>

      {/* Thumbnail box */}
      <div
        className="flex absolute sm:left-[51%] sm:top-[24%] sm:w-[360px]
        md:top-[22%] md:w-[400px]
        w-full top-[20%] left-1/2 max-sm:-translate-x-1/2 justify-evenly"
      >
        <div className="size-[70px] max-xs:size-[60px] bg-cover bg-character-bt-1_a" />
        <div className="size-[70px] max-xs:size-[60px] bg-cover bg-character-bt-2" />
        <div className="size-[70px] max-xs:size-[60px] bg-cover bg-character-bt-3" />
        <div className="size-[70px] max-xs:size-[60px] bg-cover bg-character-bt-4" />
        <div className="size-[70px] max-xs:size-[60px] bg-cover bg-character-bt-5" />
      </div>

      {/* Text box */}
      <div
        className="absolute md:top-[30%] align-top drop-shadow-text
        sm:top-[34%] sm:left-[52%]
        bottom-0 max-sm:w-full bg-gradient-to-t max-sm:from-cb-blue from-50% max-sm:px-10 max-sm:pb-12"
      >
        <div
          className="sm:text-lg/10 font-tsukumin text-white tracking-[.2em]
        max-sm:text-xl/10"
        >
          風をまとった少女
        </div>
        <div className="h-[1px] w-full bg-cover bg-character_border" />

        <div
          className="md:text-4xl/[4rem] font-tsukumin text-white tracking-[.1em] 
        sm:text-2xl/10
        text-3xl/[3.5rem]"
        >
          <span className="pr-[10px]">辻倉朱比華</span>
          <span className="text-[.4em] align-[8px] whitespace-nowrap">つじくら すぴか</span>
        </div>

        <div className="text-xs font-seasons text-white italic pt-8">profile</div>
        <div
          className="font-tsukumin text-white tracking-[.1em] md:text-base/9
        sm:text-sm/8
        text-xs/7"
        >
          町外れのトレーラーハウスで生活している謎めいた少女。
          <br />
          町の人達からは距離を置いて生活している。
          <br />
          麦畑の世話が仕事で、収穫された麦を使って、
          <br />
          絶品と言われるピザを焼いている。
          <br />
          が、なかなか食べさせて貰えない。
          <br />
          口はだいぶ悪いが、動物やお年寄りには優しい。
          <br />
          夜、風に吹かれながら草笛を吹く姿がよく目撃されている。
          <br />
        </div>

        <div
          className="font-tsukumin text-white tracking-[.1em] md:text-base/9
        sm:text-sm/8
        text-xs/7"
        >
          <span className="text-xs font-seasons italic">spec</span>
          <span>{"　身長：148cm　体重：40kg　B/W/H：74/52/75"}</span>
        </div>

        <div
          className="font-tsukumin text-white tracking-[.1em] md:text-base/9
        sm:text-sm/8
        text-xs/7"
        >
          <span className="text-xs font-seasons italic">illustration</span>
          <span>{"　原画：Na-Ga"}</span>
        </div>
      </div>

      {/* Character name */}
      <div
        className="absolute left-[44%] md:bottom-[20%] font-thomasita sm:text-8xl -z-10 text-[#8fdbe9]
      sm:bottom-[10%]
      bottom-[40%] max-sm:[writing-mode:vertical-rl] max-sm:right-5 text-7xl"
      >
        Spica
      </div>

      {/* Arrow right */}
      <div
        className="w-[69px] cursor-pointer absolute top-1/2 -translate-y-1/2  -right-[10%]
      max-sm:hidden"
      >
        <img src="./src/assets/images/arrow_chara_right.png" />
      </div>

      {/* Arrow left */}
      <div
        className="w-[69px] cursor-pointer absolute top-1/2 -translate-y-1/2  -left-[10%]
      max-sm:hidden"
      >
        <img src="./src/assets/images/arrow_chara_left.png" />
      </div>
    </div>
  );
}
