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
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-hero relative overflow-hidden">
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
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 gradient-secondary rounded-full"></div>
        
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
        <div className="absolute top-0 right-0 w-20 h-20 gradient-secondary opacity-20 rounded-bl-full"></div>
        
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
