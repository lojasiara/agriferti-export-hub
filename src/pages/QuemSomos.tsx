import { Globe, Target, Award, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import Layout from "@/components/Layout";

const QuemSomos = () => {
  const { t } = useTranslation();
  
  const values = [
    {
      icon: Globe,
      title: t('about.values.global.title'),
      description: t('about.values.global.description'),
    },
    {
      icon: Target,
      title: t('about.values.results.title'),
      description: t('about.values.results.description'),
    },
    {
      icon: Award,
      title: t('about.values.excellence.title'),
      description: t('about.values.excellence.description'),
    },
    {
      icon: Users,
      title: t('about.values.partnership.title'),
      description: t('about.values.partnership.description'),
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-1 gradient-primary z-20"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/quem-somos-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/50 via-primary/40 to-secondary/50" />

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="mb-6 animate-fade-in text-white">{t('about.hero.title')}</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto animate-fade-in">
            {t('about.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="mb-6 text-center">{t('about.title')}</h2>
            <p className="text-lg text-muted-foreground mb-6">
              {t('about.intro')}
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
              <h3 className="mb-4">{t('about.beyond.title')}</h3>
              <p className="text-muted-foreground mb-4">
                {t('about.beyond.description1')}
              </p>
              <p className="text-muted-foreground mb-6">
                {t('about.beyond.description2')}
              </p>
              <ul className="space-y-3">
                {[
                  {
                    title: t('about.beyond.items.markets.title'),
                    desc: t('about.beyond.items.markets.desc'),
                  },
                  {
                    title: t('about.beyond.items.negotiation.title'),
                    desc: t('about.beyond.items.negotiation.desc'),
                  },
                  {
                    title: t('about.beyond.items.risk.title'),
                    desc: t('about.beyond.items.risk.desc'),
                  },
                  {
                    title: t('about.beyond.items.logistics.title'),
                    desc: t('about.beyond.items.logistics.desc'),
                  },
                  {
                    title: t('about.beyond.items.bureaucracy.title'),
                    desc: t('about.beyond.items.bureaucracy.desc'),
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
              <h3 className="mb-4">{t('about.fertilizers.title')}</h3>
              <p className="text-muted-foreground mb-4">
                {t('about.fertilizers.description')}
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {t('about.fertilizers.items', { returnObjects: true }).map((item: string, index: number) => (
                  <li key={index} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-4">{t('about.commodities.title')}</h3>
              <p className="text-muted-foreground">
                {t('about.commodities.description')}
              </p>
            </div>

            <div className="gradient-hero p-8 rounded-2xl text-white text-center">
              <h3 className="mb-4 text-white">{t('about.commitment.title')}</h3>
              <p className="text-lg opacity-90">
                {t('about.commitment.description')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default QuemSomos;
