import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.webp";

const Footer = () => {
  return (
    <footer className="gradient-hero text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="md:col-span-2">
            <img src={logo} alt="AgriFerti Brasil" className="h-12 mb-4 brightness-0 invert" />
            <p className="text-sm text-white/80 mb-4">
              Conectando o agronegócio brasileiro aos principais mercados globais
              com segurança, eficiência e credibilidade.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm text-white/80 hover:text-white transition-colors"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  to="/quem-somos"
                  className="text-sm text-white/80 hover:text-white transition-colors"
                >
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link
                  to="/produtos"
                  className="text-sm text-white/80 hover:text-white transition-colors"
                >
                  Produtos
                </Link>
              </li>
              <li>
                <Link
                  to="/contato"
                  className="text-sm text-white/80 hover:text-white transition-colors"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Phone className="w-4 h-4 mt-1 text-white flex-shrink-0" />
                <span className="text-sm text-white/80">
                  +55 (44) 3265-3966
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="w-4 h-4 mt-1 text-white flex-shrink-0" />
                <span className="text-sm text-white/80">
                  ceo@agriferti.com
                </span>
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
            © {new Date().getFullYear()} AgriFerti Brasil. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
