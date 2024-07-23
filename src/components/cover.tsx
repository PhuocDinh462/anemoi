export default function Cover() {
  return (
    <div
      className="bg-cover bg-no-repeat md:bg-top md:h-225 2xl:min-h-screen md:bg-cover-bg 
      sm:h-screen sm:bg-bottom-4 bg-cover-bg-sp"
    >
      {/* BG */}
      <div className="-z-50 sm:hidden absolute">
        <img
          src="./src/assets/fv_main_bg_sp.png"
          alt="fv_main_bg_sp.jpg"
          className="w-screen object-cover object-top"
        />
      </div>
      {/* Slogan & Logo */}
      <div className="absolute mt-12 w-full flex items-center justify-center max-sm:flex-col-reverse">
        <div
          className="sm:mr-14 2sm:text-lg/9 text-base/7 mt-6 [writing-mode:vertical-rl] font-light
        text-white tracking-[0.25em] drop-shadow-slogan"
        >
          約束は
          <span>、</span>
          <br />
          風のなかに
          <span className="tracking-normal"> ――</span>
        </div>

        <div className="sm:mr-32 min-w-64 w-1/2 md:w-100 sm:w-2/5">
          <img
            src="./src/assets/anemoi_logo.png"
            alt="anemoi アネモイ"
            className="object-cover drop-shadow-logo"
          />
        </div>
      </div>
    </div>
  );
}
