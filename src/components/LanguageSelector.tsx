import { useTranslation } from 'react-i18next';
import { Button } from './ui/button';
import flagBrazil from '@/assets/flag-brazil.png';
import flagUSA from '@/assets/flag-usa.png';

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
        className="w-10 h-10 p-1 rounded-md overflow-hidden"
        title="Português"
      >
        <img src={flagBrazil} alt="Português" className="w-full h-full object-cover rounded" />
      </Button>
      <Button
        variant={i18n.language === 'en-US' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => toggleLanguage('en-US')}
        className="w-10 h-10 p-1 rounded-md overflow-hidden"
        title="English"
      >
        <img src={flagUSA} alt="English" className="w-full h-full object-cover rounded" />
      </Button>
    </div>
  );
};

export default LanguageSelector;
