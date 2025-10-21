import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";
import logoWhite from "@/assets/logo-white.png";

const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="gradient-hero text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="md:col-span-2">
            <img src={logoWhite} alt="AgriFerti Brasil" className="h-12 mb-4" />
            <p className="text-sm text-white/80 mb-4">
              {t('footer.description')}
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-semibold mb-4 text-white">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm text-white/80 hover:text-white transition-colors"
                >
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link
                  to="/quem-somos"
                  className="text-sm text-white/80 hover:text-white transition-colors"
                >
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link
                  to="/produtos"
                  className="text-sm text-white/80 hover:text-white transition-colors"
                >
                  {t('nav.products')}
                </Link>
              </li>
              <li>
                <Link
                  to="/contato"
                  className="text-sm text-white/80 hover:text-white transition-colors"
                >
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-semibold mb-4 text-white">{t('footer.contact')}</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Phone className="w-4 h-4 mt-1 text-white flex-shrink-0" />
                <a 
                  href="tel:+554432653966" 
                  className="text-sm text-white/80 hover:text-white transition-colors"
                >
                  +55 (44) 3265-3966
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="w-4 h-4 mt-1 text-white flex-shrink-0" />
                <a 
                  href="https://wa.me/5544995999964" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/80 hover:text-white transition-colors"
                >
                  +55 (44) 9 9599-9964 ({t('footer.whatsapp')})
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="w-4 h-4 mt-1 text-white flex-shrink-0" />
                <a 
                  href="mailto:ceo@agriferti.com" 
                  className="text-sm text-white/80 hover:text-white transition-colors"
                >
                  ceo@agriferti.com
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 text-white flex-shrink-0" />
                <span className="text-sm text-white/80">
                  Av. Horácio Raccanello Filho, 6326 – Sl 01
                  <br />
                  Maringá / PR - CEP 87050-130
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-sm text-white/80">
            © {new Date().getFullYear()} {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
