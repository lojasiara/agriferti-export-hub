import { Globe, Target, Award, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-agro.jpg";

const QuemSomos = () => {
  const values = [
    {
      icon: Globe,
      title: "Presença Global",
      description:
        "Networking sólido e experiência internacional nas principais regiões produtoras do Brasil",
    },
    {
      icon: Target,
      title: "Foco em Resultados",
      description:
        "Compromisso total em entregar qualidade, previsibilidade e parcerias duradouras",
    },
    {
      icon: Award,
      title: "Excelência",
      description:
        "Desde 2020, consolidamos nossa reputação em excelência, inovação e confiabilidade",
    },
    {
      icon: Users,
      title: "Parceria Estratégica",
      description:
        "Somos mais do que intermediadores: atuamos como parceiros em todas as etapas",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 gradient-hero" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="mb-6 animate-fade-in text-white">Quem Somos</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-fade-in">
            Conectando Mercados, Gerando Resultados
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="mb-6 text-center">AgriFerti Brasil</h2>
            <p className="text-lg text-muted-foreground mb-6">
              A AgriFerti Brasil nasceu com o propósito de transformar o
              agronegócio em negócios globais de alto valor. Somos mais do que
              intermediadores: atuamos como parceiros estratégicos, conectando
              produtores, cooperativas, indústrias e tradings brasileiras aos
              principais compradores internacionais, sempre com segurança,
              eficiência e credibilidade.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {values.map((value, index) => (
              <Card
                key={index}
                className="border-none shadow-soft hover:shadow-medium transition-all duration-300"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 rounded-full gradient-primary mx-auto mb-4 flex items-center justify-center">
                    <value.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Detailed Sections */}
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h3 className="mb-4">Muito além da intermediação</h3>
              <p className="text-muted-foreground mb-4">
                O agronegócio brasileiro é reconhecido mundialmente pela sua
                produtividade e qualidade. Mas transformar uma safra em
                resultados exige mais do que produzir: requer estratégia
                comercial, acesso aos mercados certos e domínio de processos
                logísticos e burocráticos.
              </p>
              <p className="text-muted-foreground mb-6">
                É aqui que a AgriFerti faz a diferença. Nossa equipe atua em
                todas as etapas da cadeia agrícola, oferecendo:
              </p>
              <ul className="space-y-3">
                {[
                  {
                    title: "Acesso a mercados globais",
                    desc: "Conectamos sua produção aos maiores players nacionais e internacionais",
                  },
                  {
                    title: "Negociação segura e transparente",
                    desc: "Garantimos contratos claros, condições justas e alinhamento entre oferta e demanda",
                  },
                  {
                    title: "Gestão de riscos",
                    desc: "Atuamos com compliance, checagem de crédito e viabilidade operacional",
                  },
                  {
                    title: "Logística eficiente",
                    desc: "Cuidamos de transporte, armazenagem e embarque, assegurando agilidade e confiabilidade",
                  },
                  {
                    title: "Burocracia simplificada",
                    desc: "Assumimos toda a documentação necessária para exportações e importações",
                  },
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <div>
                      <strong className="text-foreground">{item.title}</strong>
                      <span className="text-muted-foreground"> – {item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-muted/30 p-8 rounded-2xl">
              <h3 className="mb-4">Fertilizantes: a base da produção</h3>
              <p className="text-muted-foreground mb-4">
                O setor de fertilizantes é estratégico para a competitividade
                do agronegócio brasileiro, e a AgriFerti se destaca como
                fornecedora confiável de insumos de alto padrão. Representamos
                fabricantes internacionais e oferecemos soluções como:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {[
                  "Ureia",
                  "Sulfato de Amônio",
                  "Superfosfato Simples e Triplo",
                  "Rocha Fosfática",
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4">Commodities em que atuamos</h3>
              <p className="text-muted-foreground">
                O Brasil é um dos maiores exportadores mundiais de commodities,
                e a AgriFerti conecta essa produção ao mercado global. Atuamos
                com grãos, proteínas, insumos e subprodutos, oferecendo
                soluções que aumentam a competitividade e ampliam oportunidades
                de negócios.
              </p>
            </div>

            <div className="gradient-hero p-8 rounded-2xl text-white text-center">
              <h3 className="mb-4 text-white">Nosso Compromisso</h3>
              <p className="text-lg opacity-90">
                Entregar qualidade, previsibilidade e parcerias duradouras,
                fortalecendo toda a cadeia produtiva agrícola.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default QuemSomos;
