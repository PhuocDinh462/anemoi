import { IconButton, styled } from '@mui/material';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { anemoi_logo_anime1, language_ic } from '@/constants/images';
import { useEffect, useState, MouseEvent } from 'react';
import LANGUAGES from '@/constants/languages';
import i18n from '@/i18n';
import { changeLanguage } from '@/i18n';
import Language from '@/models/language.model';

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center'
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right'
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 160,
    color: 'rgb(55, 65, 81)',
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0'
    },
    ...theme.applyStyles('dark', {
      color: theme.palette.grey[300]
    })
  }
}));

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: theme.palette.action.hover
  }
}));

export default function LanguageMenu() {
  const currentLanguage = i18n.language;

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [open, setOpen] = useState(Boolean(anchorEl));

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleChange = (lng: Language) => {
    changeLanguage(lng.getCode());
    handleClose();
  };

  useEffect(() => {
    window.addEventListener('resize', handleClose);
    return () => window.removeEventListener('resize', handleClose);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleClose);
    return () => window.removeEventListener('scroll', handleClose);
  }, []);

  return (
    <>
      <IconButton
        id="change-language-button"
        aria-label="Change language"
        sx={{ p: 0 }}
        size="small"
        onClick={handleClick}>
        <img
          className="cursor-pointer py-4 size-14
          hover:scale-110 transition-all duration-300"
          alt="language_ic"
          src={language_ic}
        />
      </IconButton>
      <StyledMenu
        id="change-language-menu"
        MenuListProps={{
          'aria-labelledby': 'change-language-button'
        }}
        disableScrollLock
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}>
        {LANGUAGES.map((lng, index) => (
          <StyledMenuItem key={index} onClick={() => handleChange(lng)} disableRipple>
            <div className="flex items-center justify-between w-full">
              <div
                className={`${currentLanguage === lng.getCode() && 'text-custom-blue-100'}`}
                style={{ fontFamily: lng.getFont() }}>
                {lng.getName()}
              </div>
              {currentLanguage === lng.getCode() && (
                <img
                  className="ml-5 animate-spin"
                  src={anemoi_logo_anime1}
                  width={26}
                  alt="anemoi_logo_anime1"
                />
              )}
            </div>
          </StyledMenuItem>
        ))}
      </StyledMenu>
    </>
  );
}
