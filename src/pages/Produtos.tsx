import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTranslation } from "react-i18next";
import Layout from "@/components/Layout";
import sojaImage from "@/assets/soja.jpg";
import milhoImage from "@/assets/milho.jpg";
import cafeImage from "@/assets/cafe.jpg";
import carneImage from "@/assets/carne-bovina.jpg";
import acucarImage from "@/assets/acucar.jpg";
import fertilizantesImage from "@/assets/fertilizantes-minerais-banner.png";
import algodaoImage from "@/assets/algodao.jpg";
import frangoImage from "@/assets/frango.jpg";
import carneSuinaImage from "@/assets/carne-suina.jpg";
import sucoLaranjaImage from "@/assets/suco-laranja.jpg";
import frutasImage from "@/assets/frutas.jpg";
import melImage from "@/assets/mel.jpg";
import trigoImage from "@/assets/trigo.jpg";
import ureiaImage from "@/assets/fertilizante-ureia.jpg";
import sulfatoAmonioImage from "@/assets/fertilizante-sulfato-amonio.jpg";
import sspImage from "@/assets/fertilizante-ssp.jpg";
import tspImage from "@/assets/fertilizante-tsp.jpg";
import rochaFosfaticaImage from "@/assets/fertilizante-rocha-fosfatica.jpg";
import ferroImage from "@/assets/mineral-ferro.jpg";
import manganesImage from "@/assets/mineral-manganes.jpg";
import bauxitaImage from "@/assets/mineral-bauxita.jpg";
import niobioImage from "@/assets/mineral-niobio.jpg";
import cobreImage from "@/assets/mineral-cobre.jpg";
import ouroImage from "@/assets/mineral-ouro.jpg";
import zincoChumboImage from "@/assets/mineral-zinco-chumbo.jpg";
import ptBRProducts from "@/i18n/locales/pt-BR-products.json";
import enUSProducts from "@/i18n/locales/en-US-products.json";

const Produtos = () => {
  const { t, i18n } = useTranslation();
  const [activeTab, setActiveTab] = useState("agro");

  const productImages = [sojaImage, milhoImage, cafeImage, carneImage, acucarImage, algodaoImage, frangoImage, carneSuinaImage, sucoLaranjaImage, frutasImage, melImage, trigoImage];
  const fertilizerImages = [ureiaImage, sulfatoAmonioImage, sspImage, tspImage, rochaFosfaticaImage];
  const mineralImages = [ferroImage, manganesImage, bauxitaImage, niobioImage, cobreImage, ouroImage, zincoChumboImage];

  const productsData = i18n.language === 'pt-BR' ? ptBRProducts : enUSProducts;
  
  const agroProducts = productsData.agroProducts.map((product: any, index: number) => ({
    ...product,
    image: productImages[index]
  }));

  const fertilizers = productsData.fertilizers.map((fertilizer: any, index: number) => ({
    ...fertilizer,
    image: fertilizerImages[index]
  }));

  const minerals = productsData.minerals.map((mineral: any, index: number) => ({
    ...mineral,
    image: mineralImages[index]
  }));

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
          <source src="/videos/produtos-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/50 via-primary/40 to-secondary/50" />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="mb-6 text-white">{t('products.hero.title')}</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            {t('products.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="agro">{t('products.tabs.agro')}</TabsTrigger>
              <TabsTrigger value="fertilizers">{t('products.tabs.fertilizers')}</TabsTrigger>
            </TabsList>

            <TabsContent value="agro" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {agroProducts.map((product, index) => (
                  <Card
                    key={index}
                    className="overflow-hidden border-none shadow-soft hover:shadow-medium transition-all duration-300 group"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                      <h3 className="absolute bottom-4 left-4 text-white">
                        {product.name}
                      </h3>
                    </div>
                    <CardContent className="p-6 space-y-4">
                      <p className="font-semibold text-primary">
                        {product.description}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {product.details}
                      </p>
                      <div>
                        <p className="text-sm font-semibold mb-2">
                          {t('products.markets')}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {product.markets.map((market, idx) => (
                            <span
                              key={idx}
                              className="text-xs bg-muted px-2 py-1 rounded"
                            >
                              {market}
                            </span>
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <strong>{t('products.harvest')}</strong> {product.harvest}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="fertilizers" className="space-y-12">
              {/* Hero Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-medium">
                <img
                  src={fertilizantesImage}
                  alt="Fertilizantes e Minerais"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end">
                  <div className="p-8">
                    <h2 className="text-white mb-2">{t('products.fertilizersSection.title')}</h2>
                    <p className="text-white/90 text-lg">{t('products.fertilizersSection.subtitle')}</p>
                  </div>
                </div>
              </div>

              {/* Fertilizantes Section */}
              <div className="container mx-auto px-4">
                <Card className="border-none shadow-soft mb-12">
                  <CardHeader>
                    <CardTitle className="text-2xl">{t('products.fertilizersSection.intro.title')}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-lg">
                      {t('products.fertilizersSection.intro.description')}
                    </p>
                  </CardContent>
                </Card>

                <h3 className="mb-8 text-center text-primary">{t('products.fertilizersSection.mainTitle')}</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                  {fertilizers.map((fertilizer, index) => (
                    <Card
                      key={index}
                      className="overflow-hidden border-none shadow-soft hover:shadow-medium transition-all duration-300 group"
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={fertilizer.image}
                          alt={fertilizer.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      </div>
                      <CardContent className="p-6">
                        <h4 className="text-xl font-bold mb-3 text-primary">
                          {fertilizer.name}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {fertilizer.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Minerals Section */}
                <div className="gradient-hero p-8 rounded-2xl mb-12">
                  <h3 className="mb-4 text-white text-center">{t('products.fertilizersSection.minerals.title')}</h3>
                  <p className="text-white/90 text-center max-w-3xl mx-auto">
                    {t('products.fertilizersSection.minerals.description')}
                  </p>
                </div>

                <h3 className="mb-8 text-center text-primary">{t('products.fertilizersSection.minerals.mainTitle')}</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                  {minerals.map((mineral, index) => (
                    <Card
                      key={index}
                      className="overflow-hidden border-none shadow-soft hover:shadow-medium transition-all duration-300 group"
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={mineral.image}
                          alt={mineral.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      </div>
                      <CardContent className="p-6">
                        <h4 className="text-xl font-bold mb-3 text-primary">
                          {mineral.name}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {mineral.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Commitment Section */}
                <Card className="border-none shadow-soft bg-gradient-to-br from-background to-muted/30">
                  <CardContent className="p-8 text-center">
                    <h3 className="mb-4 text-primary">{t('products.fertilizersSection.commitment.title')}</h3>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                      {t('products.fertilizersSection.commitment.description')}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default Produtos;
