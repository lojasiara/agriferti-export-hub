import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import partnerLbh from "@/assets/partner-lbh-group.png";
import partnerPatzo from "@/assets/partner-patzo.png";
import partnerManoJulio from "@/assets/partner-mano-julio.png";
import partnerCopenhagen from "@/assets/partner-copenhagen.png";
import partnerAndersons from "@/assets/partner-andersons.png";
import partnerBld from "@/assets/partner-bld.png";
import partnerMultiOne from "@/assets/partner-multi-one.png";
import partnerGlenResources from "@/assets/partner-glen-resources.png";
import partnerDesratoxy from "@/assets/partner-desratoxy.png";
import partnerAudcont from "@/assets/partner-audcont.png";
import partnerUnimar from "@/assets/partner-unimar.png";
import partnerMmjv from "@/assets/partner-mmjv.png";
import partnerPetra from "@/assets/partner-petra.png";
import partnerAgronoite from "@/assets/partner-agronoite.png";
import partnerAgroQuality from "@/assets/partner-agroquality.png";
import partnerAgv from "@/assets/partner-agv.png";
import partnerTrinity from "@/assets/partner-trinity.jpeg";
import partnerKwiatkowsky from "@/assets/partner-kwiatkowsky.jpeg";
import partnerKdn from "@/assets/partner-kdn.jpeg";
import partnerDmmjv from "@/assets/partner-dmmjv.png";
import partnerCj from "@/assets/partner-cj.png";
import partnerOzturk from "@/assets/partner-ozturk.png";
import partnerOnetrade from "@/assets/partner-onetrade.png";
import partnerSchroff from "@/assets/partner-schroff.jpeg";
import partnerAgrolog from "@/assets/partner-agrolog.jpeg";
import partnerCentera from "@/assets/partner-centera.jpeg";
import partnerBradesco from "@/assets/partner-bradesco.jpeg";
import partnerAdityaBirla from "@/assets/partner-aditya-birla.jpeg";
import partnerArasco from "@/assets/partner-arasco.jpeg";
import partnerLevelA from "@/assets/partner-level-a.jpeg";
import partnerAnamax from "@/assets/partner-anamax.png";

const Parceiros = () => {
  const partners = [
    {
      name: "LBH Group",
      image: partnerLbh,
    },
    {
      name: "Patzo",
      image: partnerPatzo,
    },
    {
      name: "Mano Julio",
      image: partnerManoJulio,
    },
    {
      name: "Copenhagen Merchants",
      image: partnerCopenhagen,
    },
    {
      name: "The Andersons",
      image: partnerAndersons,
    },
    {
      name: "BLD+",
      image: partnerBld,
    },
    {
      name: "Multi One Group Inc.",
      image: partnerMultiOne,
    },
    {
      name: "Glen Resources",
      image: partnerGlenResources,
    },
    {
      name: "Desratoxy",
      image: partnerDesratoxy,
    },
    {
      name: "Audcont Contadores",
      image: partnerAudcont,
    },
    {
      name: "Unimar International",
      image: partnerUnimar,
    },
    {
      name: "MMJV Grãos",
      image: partnerMmjv,
    },
    {
      name: "Petra Agronegócio",
      image: partnerPetra,
    },
    {
      name: "Agronoite",
      image: partnerAgronoite,
    },
    {
      name: "Agro Quality",
      image: partnerAgroQuality,
    },
    {
      name: "AGV",
      image: partnerAgv,
    },
    {
      name: "Trinity Energia",
      image: partnerTrinity,
    },
    {
      name: "Kwiatkowsky & Corradini",
      image: partnerKwiatkowsky,
    },
    {
      name: "KDN",
      image: partnerKdn,
    },
    {
      name: "DMMJV",
      image: partnerDmmjv,
    },
    {
      name: "CJ",
      image: partnerCj,
    },
    {
      name: "Öztürk Holding",
      image: partnerOzturk,
    },
    {
      name: "OneTrade",
      image: partnerOnetrade,
    },
    {
      name: "Schroff",
      image: partnerSchroff,
    },
    {
      name: "Agrolog Soluções",
      image: partnerAgrolog,
    },
    {
      name: "Centera Soluções Logísticas",
      image: partnerCentera,
    },
    {
      name: "Bradesco",
      image: partnerBradesco,
    },
    {
      name: "Aditya Birla Group",
      image: partnerAdityaBirla,
    },
    {
      name: "Arasco",
      image: partnerArasco,
    },
    {
      name: "Level A Commodities",
      image: partnerLevelA,
    },
    {
      name: "Anamax Trading",
      image: partnerAnamax,
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-1 gradient-primary z-20"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/parceiros-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/50 via-primary/40 to-secondary/50"></div>
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-white/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 text-center text-white relative z-10">
          <h1 className="mb-6 text-white animate-fade-in">Nossos Parceiros</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90 animate-fade-in">
            Trabalhamos com líderes globais que compartilham nosso compromisso com a excelência e a inovação no agronegócio
          </p>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-20 relative">
        
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-primary">Parcerias Estratégicas</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Construímos relacionamentos sólidos com empresas de renome mundial para garantir as melhores soluções aos nossos clientes
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <Card
                key={index}
                className="group p-8 flex items-center justify-center border-none shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105 bg-white"
              >
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="max-w-full max-h-24 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-muted/30 relative">
        <div className="absolute top-0 left-0 w-20 h-20 gradient-primary opacity-20 rounded-br-full"></div>
        <div className="absolute top-0 right-0 w-20 h-20 gradient-primary opacity-20 rounded-bl-full"></div>
        
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6">Confiança e Credibilidade</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Nossa rede de parceiros reflete nosso compromisso com a qualidade e a confiabilidade. Cada parceria é construída com base em valores compartilhados de excelência, sustentabilidade e crescimento mútuo no mercado global do agronegócio.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Parceiros;
