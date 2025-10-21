import { useTranslation } from 'react-i18next';
import { Button } from './ui/button';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="flex items-center gap-2">
      <Button
        variant={i18n.language === 'pt-BR' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => toggleLanguage('pt-BR')}
        className="w-10 h-10 p-0 rounded-full overflow-hidden"
        title="Português"
      >
        <span className="text-2xl">🇧🇷</span>
      </Button>
      <Button
        variant={i18n.language === 'en-US' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => toggleLanguage('en-US')}
        className="w-10 h-10 p-0 rounded-full overflow-hidden"
        title="English"
      >
        <span className="text-2xl">🇺🇸</span>
      </Button>
    </div>
  );
};

export default LanguageSelector;
