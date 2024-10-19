import i18n from '@/languages/i18n';
import Language from '@/models/language.model';

const LANGUAGES: Array<Language> = [
  new Language('jp', '日本語', 'tsukumin'),
  new Language('vi', 'Tiếng Việt', 'jura')
];

const CURRENT_LANGUAGE = LANGUAGES.find((lang) => lang.code === i18n.language);

export { LANGUAGES, CURRENT_LANGUAGE };
