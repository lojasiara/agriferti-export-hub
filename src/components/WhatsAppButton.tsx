import whatsappIcon from "@/assets/whatsapp-logo-white.png";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5544999599964"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] rounded-full shadow-strong flex items-center justify-center transition-all duration-300 hover:scale-110 group"
      aria-label="Fale conosco no WhatsApp"
    >
      <img src={whatsappIcon} alt="WhatsApp" className="w-7 h-7" />
      <span className="absolute right-full mr-3 px-4 py-2 bg-[#25D366] text-white text-sm font-medium rounded-lg shadow-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Fale Conosco
      </span>
    </a>
  );
};

export default WhatsAppButton;
