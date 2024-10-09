import { anemoi_logo_anime1, anemoi_logo_anime2 } from '@/constants/images';

export default function Loading() {
  return (
    <div className="w-full h-screen flex items-center justify-center select-none">
      <div className="sm:size-[60%] lg:size-[40%] xl:size-1/2 size-full relative flex items-center justify-center">
        <img className="w-1/2" src={anemoi_logo_anime2} />
        <div className="absolute w-1/4 left-1/2 top-1/2 -translate-x-1/4 -translate-y-2/3">
          <img src={anemoi_logo_anime1} className="w-full animate-spin-slow" />
        </div>
      </div>
    </div>
  );
}
