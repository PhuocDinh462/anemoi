export default function CharacterBox() {
  return (
    <div className="flex justify-center items-center">
      {/* Arrow left */}
      <div className="w-[69px] cursor-pointer absolute top-1/2 -translate-y-1/2  left-5">
        <img src="./src/assets/images/arrow_chara_left.png" />
      </div>

      {/* Character box */}
      <div className="flex relative">
        <div
          className="[writing-mode:vertical-rl] font-tsukumin py-[4px] px-[2px] bg-white h-fit text-xl
          absolute z-[1] top-[16%] left-[4%]"
        >
          「私はただ風に吹かれていることにするわ」
        </div>
        <img src="./src/assets/images/character_1.png" className="w-[54%] align-top" />
      </div>

      {/* Thumbnail box */}
      <div className="flex absolute left-[51%] top-[19%]">
        <div className="size-[70px] bg-contain mr-3 bg-character-bt-1" />
        <div className="size-[70px] bg-contain mr-3 bg-character-bt-2" />
        <div className="size-[70px] bg-contain mr-3 bg-character-bt-3" />
        <div className="size-[70px] bg-contain mr-3 bg-character-bt-4" />
        <div className="size-[70px] bg-contain mr-3 bg-character-bt-5" />
      </div>

      {/* Text box */}
      <div className="absolute left-[52%] top-[27%] align-top drop-shadow-text">
        <div className="text-lg font-tsukumin text-white tracking-[.2em] leading-10">
          風をまとった少女
        </div>
        <div className="h-[1px] w-full bg-cover bg-character_border" />

        <div className="text-4xl font-tsukumin text-white tracking-[.1em] leading-[3.5rem]">
          辻倉朱比華
          <span className="text-[.4em] align-[8px] pl-[10px]">つじくら すぴか</span>
        </div>

        <div className="text-xs font-seasons text-white italic pt-8">profile</div>
        <div className="font-tsukumin text-white tracking-[.1em] leading-9">
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

        <div className="font-tsukumin text-white tracking-[.1em] leading-9">
          <span className="text-xs font-seasons italic">spec</span>
          {"　身長：148cm　体重：40kg　B/W/H：74/52/75"}
        </div>

        <div className="font-tsukumin text-white tracking-[.1em] leading-9">
          <span className="text-xs font-seasons italic">illustration</span>
          {"　原画：Na-Ga"}
        </div>
      </div>

      {/* Arrow right */}
      <div className="w-[69px] cursor-pointer absolute top-1/2 -translate-y-1/2  right-5">
        <img src="./src/assets/images/arrow_chara_right.png" />
      </div>
    </div>
  );
}
