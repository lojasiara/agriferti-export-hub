import { Link } from "react-router-dom";
import { ArrowRight, Globe, Shield, TrendingUp, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-agro.jpg";
import sojaImage from "@/assets/soja.jpg";
import milhoImage from "@/assets/milho.jpg";
import cafeImage from "@/assets/cafe.jpg";
import carneImage from "@/assets/carne-bovina.jpg";

const Home = () => {
  const featuredProducts = [
    {
      name: "Soja",
      image: sojaImage,
      description: "Líder de exportação com forte demanda internacional",
    },
    {
      name: "Milho",
      image: milhoImage,
      description: "Ampla aceitação em mercados da Ásia e Europa",
    },
    {
      name: "Café",
      image: cafeImage,
      description: "Produto premium com tradição e demanda global",
    },
    {
      name: "Carne Bovina",
      image: carneImage,
      description: "Alto valor agregado com mercados rigorosos",
    },
  ];

  const benefits = [
    {
      icon: Globe,
      title: "Presença Global",
      description:
        "Conectamos sua produção aos maiores players nacionais e internacionais",
    },
    {
      icon: Shield,
      title: "Segurança Total",
      description:
        "Contratos claros, condições justas e gestão completa de riscos",
    },
    {
      icon: TrendingUp,
      title: "Máxima Rentabilidade",
      description:
        "Negociações estratégicas que maximizam seus resultados",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-secondary/80" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="mb-6 animate-fade-in font-bold text-white">
            Conectando o Agronegócio Brasileiro ao Mundo
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in opacity-90">
            Transformamos commodities em negócios globais de alto valor com
            segurança, eficiência e credibilidade
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Link to="/produtos">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-medium">
                Nossos Produtos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contato">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-primary hover:bg-white/10"
              >
                Fale Conosco
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-primary">Por que escolher a AgriFerti?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Somos mais do que intermediadores: atuamos como parceiros
              estratégicos em todas as etapas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="border-none shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 rounded-full gradient-primary mx-auto mb-6 flex items-center justify-center">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-4">Produtos em Destaque</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conectamos o Brasil aos principais mercados globais
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {featuredProducts.map((product, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-none shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 text-white">
                    {product.name}
                  </h3>
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">
                    {product.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/produtos">
              <Button size="lg" className="gradient-primary text-white">
                Ver Todos os Produtos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6 text-center">Muito Além da Intermediação</h2>
              <p className="text-lg text-muted-foreground mb-6">
                O agronegócio brasileiro é reconhecido mundialmente pela sua
                produtividade e qualidade. Mas transformar uma safra em
                resultados exige mais do que produzir: requer estratégia
                comercial, acesso aos mercados certos e domínio de processos
                logísticos e burocráticos.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Acesso a mercados globais",
                  "Negociação segura e transparente",
                  "Gestão de riscos e compliance",
                  "Logística eficiente",
                  "Burocracia simplificada",
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/quem-somos">
                <Button size="lg" className="gradient-primary text-white">
                  Conheça Nossa História
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-strong">
              <img
                src={heroImage}
                alt="Agronegócio"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="mb-6 text-white">Pronto para Expandir Seus Negócios?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Entre em contato com nossa equipe e descubra como podemos
            transformar sua produção em oportunidades globais
          </p>
          <Link to="/contato">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-medium">
              Fale com Nossos Especialistas
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
