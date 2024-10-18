import LANGUAGES from '@/constants/languages';
import i18n from '@/languages/i18n';
import { Drawer } from '@mui/material';

export default function LanguageDrawer(props: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { open: openLanguageDrawer, setOpen: setOpenLanguageDrawer } = props;

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
        className="relative flex flex-col space-y-3 items-center justify-center w-full pt-[16%] pb-[20%]
    font-seasons text-white text-lg 2xs:text-xl xs:text-2xl
    bg-gradient-to-b from-custom-blue-100 to-transparent">
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
