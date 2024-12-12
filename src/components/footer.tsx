import { anemoi_logo_bk } from '@/constants/images';
import { SocialMediaArr } from '@/constants/social_media';
import LeafBox from './leaf_box';

export default function Footer() {
  return (
    <footer className="bg-white py-6 flex flex-col items-center justify-center relative">
      {/* Logo */}
      <img src={anemoi_logo_bk} alt="anemoi_logo_bk" className="md:w-[15%] sm:w-[30%] w-1/2 z-50" />

      {/* Social media */}
      <div className="flex items-center justify-center mt-10 md:space-x-3 space-x-5 z-50">
        {SocialMediaArr.map((socialMedia, index) => (
          <a
            aria-label={`Go to ${socialMedia.label}`}
            key={index}
            href={socialMedia.href}
            target="_blank"
            rel="noopener noreferrer">
            <img src={socialMedia.icon} className="w-7" alt={socialMedia.label} />
          </a>
        ))}
      </div>

      {/* Copyright */}
      <p className="text-center font-serif mt-5">&copy; VISUAL ARTS/Key</p>

      {/* Leaf box */}
      <div className="absolute size-full">
        <LeafBox />
      </div>
    </footer>
  );
}
