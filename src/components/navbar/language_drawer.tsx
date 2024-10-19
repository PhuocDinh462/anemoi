import LANGUAGES from '@/constants/languages';
import i18n from '@/languages/i18n';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Drawer } from '@mui/material';

export default function LanguageDrawer(props: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenNavbarDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const {
    open: openLanguageDrawer,
    setOpen: setOpenLanguageDrawer,
    setOpenNavbarDrawer: setOpenNavbarDrawer
  } = props;

  return (
    <Drawer
      anchor="top"
      open={openLanguageDrawer}
      style={{ zIndex: 50 }}
      onClose={() => setOpenLanguageDrawer(false)}
      PaperProps={{
        sx: {
          backgroundImage: 'linear-gradient(to bottom, rgba(40, 178, 230, 1), 70%, transparent)',
          backgroundColor: 'transparent',
          boxShadow: 'none'
        }
      }}
      slotProps={{ backdrop: { sx: { backgroundColor: 'rgba(255, 255, 255, .5)' } } }}>
      <div
        className="relative flex flex-col items-center justify-center w-full pt-[16%] pb-[20%]
        font-seasons text-white text-lg 2xs:text-xl xs:text-2xl
        bg-gradient-to-b from-custom-blue-100 to-transparent
        space-y-3 xs:space-y-4 sm:space-y-5">
        <FontAwesomeIcon
          className="absolute top-4 right-12 cursor-pointer size-[24px] mr-3 animate-dropDown"
          icon={faChevronLeft}
          onClick={() => {
            setOpenLanguageDrawer(false);
            setOpenNavbarDrawer(true);
          }}
        />
        {/* Language items */}
        {LANGUAGES.map((lng, index) => (
          <div
            key={index}
            style={{ fontFamily: lng.font }}
            onClick={() => {
              i18n.changeLanguage(lng.code);
              setOpenLanguageDrawer(false);
            }}>
            {lng.name}
          </div>
        ))}
      </div>
    </Drawer>
  );
}
