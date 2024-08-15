import { anemoi_logo_anime1, anemoi_logo_anime2 } from "@/constants/images";

export function Loading() {
  return (
    <div className="w-full h-screen flex items-center justify-center relative select-none">
      <div className="size-[300px] relative">
        <img
          className="absolute w-[300px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          src={anemoi_logo_anime2}
        />
        <img
          className="absolute w-[180px] left-[32%] top-[15%] animate-spin-slow"
          src={anemoi_logo_anime1}
        />
      </div>
    </div>
  );
}
