export default function Intro() {
  return (
    <div
      className="w-full min-h-[800px] bg-intro-bg bg-cover bg-no-repeat bg-center
      flex flex-col justify-center items-center"
    >
      <div
        className="font-seasons text-5xl font-light tracking-[.2em] indent-[.2em] 
        max-sm:text-4xl max-xs:text-3xl"
      >
        introduction
      </div>
      <div className="font-thomasita text-[#d7a732] font-semibold text-lg">anemoi</div>

      <div
        className="py-[30px] text-center font-tsukumin leading-10 
        max-sm:text-[.875rem] max-xs:text-[.75rem] max-xs:leading-8"
      >
        {"黄金色の海がそよいだ"}
        <br />
        {"ゆるりと過ぎゆく時間に包まれながら"}
        <br />
        {"懐かしいささめきに包まれながら"}
        <br />
        {"約束は、風のなかに ――"}
      </div>

      <div className="font-thomasita font-semibold text-sm">staff</div>
      <div
        className="text-center font-tsukumin leading-10 
        max-sm:text-[.875rem] max-xs:text-[.75rem] max-xs:leading-8"
      >
        {"［ 原画 ］Na-Ga ／ ふむゆん ／ 永山ゆうのん ／ きみしま青"}
        <br />
        {"［ シナリオ ］魁 ／ 新島 夕 ／ ハサマ ／ 佐雪 隼"}
        <br />
        {"［ 音楽プロデューサー ］折戸伸治　［ ディレクター ］魁"}
        <br />
        {"［ プロデューサー ］丘野塔也 ――"}
        <br />
        {"［ ジャンル ］恋愛アドベンチャーゲーム"}
      </div>
    </div>
  );
}
