import { Link } from "react-router-dom";
import { ArrowRight, Globe, Shield, TrendingUp, CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-agro.jpg";
import aboutPreviewImage from "@/assets/about-preview.png";
import sojaImage from "@/assets/soja.jpg";
import milhoImage from "@/assets/milho.jpg";
import cafeImage from "@/assets/cafe.jpg";
import carneImage from "@/assets/carne-bovina.jpg";
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

const Home = () => {
  const { t } = useTranslation();
  
  const featuredProducts = [
    {
      name: t('home.products.soy.name'),
      image: sojaImage,
      description: t('home.products.soy.description'),
    },
    {
      name: t('home.products.corn.name'),
      image: milhoImage,
      description: t('home.products.corn.description'),
    },
    {
      name: t('home.products.coffee.name'),
      image: cafeImage,
      description: t('home.products.coffee.description'),
    },
    {
      name: t('home.products.beef.name'),
      image: carneImage,
      description: t('home.products.beef.description'),
    },
  ];

  const benefits = [
    {
      icon: Globe,
      title: t('home.benefits.global.title'),
      description: t('home.benefits.global.description'),
    },
    {
      icon: Shield,
      title: t('home.benefits.security.title'),
      description: t('home.benefits.security.description'),
    },
    {
      icon: TrendingUp,
      title: t('home.benefits.profitability.title'),
      description: t('home.benefits.profitability.description'),
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-1 gradient-primary z-20"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero-agro.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/50 via-primary/40 to-secondary/50" />

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="mb-6 animate-fade-in font-bold text-white">
            {t('home.hero.title')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in opacity-90">
            {t('home.hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Link to="/produtos">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-medium">
                {t('home.hero.productsBtn')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contato">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-primary hover:bg-white/10"
              >
                {t('home.hero.contactBtn')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30 relative">
        {/* Decorative divider top */}
        <div className="absolute top-0 left-0 right-0 h-1 gradient-primary"></div>
        
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-primary">{t('home.benefits.title')}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('home.benefits.subtitle')}
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
      <section className="py-20 relative">
        {/* Decorative divider */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 gradient-primary rounded-full"></div>
        
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-4">{t('home.products.title')}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('home.products.subtitle')}
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
                {t('home.products.viewAll')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-muted/30 relative">
        {/* Decorative corner elements */}
        <div className="absolute top-0 left-0 w-20 h-20 gradient-primary opacity-20 rounded-br-full"></div>
        <div className="absolute top-0 right-0 w-20 h-20 gradient-primary opacity-20 rounded-bl-full"></div>
        
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6 text-center">{t('home.about.title')}</h2>
              <p className="text-lg text-muted-foreground mb-6">
                {t('home.about.description')}
              </p>
              <div className="space-y-4 mb-8">
                {[
                  t('home.about.items.markets'),
                  t('home.about.items.negotiation'),
                  t('home.about.items.risk'),
                  t('home.about.items.logistics'),
                  t('home.about.items.bureaucracy'),
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/quem-somos">
                <Button size="lg" className="gradient-primary text-white">
                  {t('home.about.btn')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-strong">
              <img
                src={aboutPreviewImage}
                alt="Agronegócio"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 gradient-primary rounded-full"></div>
        
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-primary">{t('home.partners.title')}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('home.partners.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
            {[
              { name: "LBH Group", image: partnerLbh },
              { name: "Patzo", image: partnerPatzo },
              { name: "Mano Julio", image: partnerManoJulio },
              { name: "Copenhagen Merchants", image: partnerCopenhagen },
              { name: "The Andersons", image: partnerAndersons },
              { name: "BLD+", image: partnerBld },
              { name: "Multi One Group Inc.", image: partnerMultiOne },
              { name: "Glen Resources", image: partnerGlenResources },
              { name: "Desratoxy", image: partnerDesratoxy },
              { name: "Audcont Contadores", image: partnerAudcont },
              { name: "Unimar International", image: partnerUnimar },
              { name: "MMJV Grãos", image: partnerMmjv },
            ].map((partner, index) => (
              <Card
                key={index}
                className="group p-6 flex items-center justify-center border-none shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105 bg-white"
              >
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="max-w-full max-h-16 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/parceiros">
              <Button size="lg" className="gradient-primary text-white">
                {t('home.partners.viewAll')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-white/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 text-center text-white relative z-10">
          <h2 className="mb-6 text-white">{t('home.cta.title')}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            {t('home.cta.subtitle')}
          </p>
          <Link to="/contato">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-medium">
              {t('home.cta.btn')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
