import { anemoi_logo_anime1, anemoi_logo_anime2 } from "@/constants/images";

export function Loading() {
  return (
    <div className="w-full h-screen flex items-center justify-center relative select-none">
      <div className="size-[300px] relative">
        <img
          className="absolute xs:w-[300px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
          w-[200px]"
          src={anemoi_logo_anime2}
        />
        <img
          className="absolute xs:w-[180px] xs:left-[32%] xs:top-[15%] animate-spin-slow
          w-[120px] left-[38%] top-[26%]"
          src={anemoi_logo_anime1}
        />
      </div>
    </div>
  );
}
