export default function CharacterBox() {
  return (
    <div
      className="w-[70%] md:min-w-[950px] h-full m-auto relative z-10 md:pt-0
    min-w-[90%] pt-[10%]"
    >
      {/* Character slogan */}
      <div
        className="absolute top-[16%] left-[4%] z-[1] bg-white py-[4px] px-[2px]
        [writing-mode:vertical-rl] text-lg font-tsukumin"
      >
        「私はただ風に吹かれていることにするわ」
      </div>

      {/* Character image */}
      <div className="absolute align-top w-[70%] md:w-[54%] mt-2 -z-20">
        <img src="./src/assets/images/character_1.png" width="100%" />
      </div>

      {/* Thumbnail box */}
      <div
        className="flex absolute left-[51%] top-[24%] md:top-[19%] md:w-[400px]
      w-[360px]"
      >
        <div className="size-[70px] bg-cover mr-auto bg-character-bt-1_a" />
        <div className="size-[70px] bg-cover mr-auto bg-character-bt-2" />
        <div className="size-[70px] bg-cover mr-auto bg-character-bt-3" />
        <div className="size-[70px] bg-cover mr-auto bg-character-bt-4" />
        <div className="size-[70px] bg-cover mr-auto bg-character-bt-5" />
      </div>

      {/* Text box */}
      <div
        className="absolute left-[52%] md:top-[27%] align-top drop-shadow-text
      top-[34%]"
      >
        <div className="text-lg font-tsukumin text-white tracking-[.2em] leading-10">
          風をまとった少女
        </div>
        <div className="h-[1px] w-full bg-cover bg-character_border" />

        <div
          className="md:text-4xl font-tsukumin text-white tracking-[.1em] leading-[3.5rem]
        text-2xl"
        >
          辻倉朱比華
          <span className="text-[.4em] align-[8px] pl-[10px]">つじくら すぴか</span>
        </div>

        <div className="text-xs font-seasons text-white italic pt-8">profile</div>
        <div
          className="font-tsukumin text-white tracking-[.1em] leading-9
        max-md:text-sm max-md:leading-8"
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
          className="font-tsukumin text-white tracking-[.1em] leading-9
        max-md:leading-8"
        >
          <span className="text-xs font-seasons italic">spec</span>
          <span className="max-md:text-xs">{"　身長：148cm　体重：40kg　B/W/H：74/52/75"}</span>
        </div>

        <div className="font-tsukumin text-white tracking-[.1em] leading-9">
          <span className="text-xs font-seasons italic">illustration</span>
          <span className="max-md:text-xs">{"　原画：Na-Ga"}</span>
        </div>
      </div>

      {/* Character name */}
      <div
        className="absolute left-[44%] md:bottom-[20%] font-thomasita text-8xl -z-10 text-[#8fdbe9]
      bottom-[10%]"
      >
        Spica
      </div>

      {/* Arrow right */}
      <div className="w-[69px] cursor-pointer absolute top-1/2 -translate-y-1/2  -right-[10%]">
        <img src="./src/assets/images/arrow_chara_right.png" />
      </div>

      {/* Arrow left */}
      <div className="w-[69px] cursor-pointer absolute top-1/2 -translate-y-1/2  -left-[10%]">
        <img src="./src/assets/images/arrow_chara_left.png" />
      </div>
    </div>
  );
}
