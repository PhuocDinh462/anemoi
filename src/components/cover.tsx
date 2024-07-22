export default function Cover() {
  return (
    // BG
    <div className={"flex justify-center bg-cover bg-top h-225 2xl:min-h-screen md:bg-cover-bg"}>
      <div className="-z-50 md:hidden">
        <img
          src="./src/assets/fv_main_bg_sp.png"
          alt="fv_main_bg_sp.jpg"
          className="w-screen object-cover object-top sm:relative sm:bottom-[28rem]"
        />
      </div>

      {/* Slogan & Logo */}
      <div className="absolute mt-12 flex items-center justify-center max-sm:flex-col-reverse">
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
