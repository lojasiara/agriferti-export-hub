import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Layout from "@/components/Layout";
import sojaImage from "@/assets/soja.jpg";
import milhoImage from "@/assets/milho.jpg";
import cafeImage from "@/assets/cafe.jpg";
import carneImage from "@/assets/carne-bovina.jpg";
import acucarImage from "@/assets/acucar.jpg";
import fertilizantesImage from "@/assets/fertilizantes.jpg";
import algodaoImage from "@/assets/algodao.jpg";

const Produtos = () => {
  const [activeTab, setActiveTab] = useState("agro");

  const agroProducts = [
    {
      name: "Soja",
      image: sojaImage,
      description: "A potência que move o agronegócio brasileiro",
      details:
        "O Brasil ocupa posição de destaque no comércio global de soja, respondendo por quase metade das exportações mundiais.",
      markets: ["China", "União Europeia", "Sudeste Asiático", "Oriente Médio"],
      harvest: "Janeiro a Maio",
    },
    {
      name: "Milho",
      image: milhoImage,
      description: "Competitividade e qualidade do Brasil para o mundo",
      details:
        "Cultivado em duas safras anuais, garantindo abastecimento contínuo aos mercados internacionais.",
      markets: ["Japão", "México", "Vietnã", "Irã", "União Europeia"],
      harvest: "Fevereiro a Maio e Junho a Agosto",
    },
    {
      name: "Café",
      image: cafeImage,
      description: "Tradição e qualidade reconhecidas mundialmente",
      details:
        "Brasil é o maior produtor e exportador de café do mundo, responsável por quase um terço da produção global.",
      markets: [
        "Estados Unidos",
        "Alemanha",
        "Japão",
        "Itália",
        "Bélgica",
      ],
      harvest: "Maio a Setembro",
    },
    {
      name: "Carne Bovina",
      image: carneImage,
      description: "Referência mundial em qualidade e segurança",
      details:
        "Reconhecida por sua qualidade, maciez, sabor e padrões de segurança alimentar.",
      markets: [
        "China",
        "Hong Kong",
        "Emirados Árabes Unidos",
        "Chile",
        "União Europeia",
      ],
      harvest: "Produção contínua",
    },
    {
      name: "Açúcar",
      image: acucarImage,
      description: "Maior produtor e exportador mundial",
      details:
        "Liderança consolidada nas variantes VHP, cristal e refinado.",
      markets: [
        "China",
        "Argélia",
        "Bangladesh",
        "Indonésia",
        "União Europeia",
      ],
      harvest: "Abril a Novembro",
    },
    {
      name: "Algodão",
      image: algodaoImage,
      description: "Alta qualidade da fibra brasileira",
      details:
        "Reconhecido pela eficiência na colheita mecanizada e rastreabilidade.",
      markets: ["China", "Vietnã", "Turquia", "Europa"],
      harvest: "Junho a Setembro",
    },
  ];

  const fertilizers = [
    {
      name: "Ureia",
      description: "Fertilizante nitrogenado de alta concentração",
    },
    {
      name: "Sulfato de Amônio",
      description: "Fornecedor de nitrogênio e enxofre",
    },
    {
      name: "Superfosfato Simples",
      description: "Fonte de fósforo e cálcio",
    },
    {
      name: "Superfosfato Triplo",
      description: "Alta concentração de fósforo",
    },
    {
      name: "Rocha Fosfática",
      description: "Matéria-prima para fertilizantes fosfatados",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
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
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="mb-6 text-white">Nossos Produtos</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Conectamos o Brasil aos principais mercados globais com uma ampla
            linha de commodities agrícolas e fertilizantes
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="agro">Agronegócio</TabsTrigger>
              <TabsTrigger value="fertilizers">Fertilizantes</TabsTrigger>
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
                          Principais Mercados:
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
                        <strong>Safra:</strong> {product.harvest}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="fertilizers">
              <div className="max-w-4xl mx-auto">
                <div className="mb-12">
                  <img
                    src={fertilizantesImage}
                    alt="Fertilizantes"
                    className="w-full h-96 object-cover rounded-2xl shadow-medium"
                  />
                </div>

                <Card className="border-none shadow-soft mb-8">
                  <CardHeader>
                    <CardTitle>
                      Fertilizantes: A Base da Produção Agrícola
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6">
                      O setor de fertilizantes é estratégico para a
                      competitividade do agronegócio brasileiro, e a AgriFerti
                      se destaca como fornecedora confiável de insumos de alto
                      padrão. Representamos fabricantes internacionais e
                      oferecemos soluções essenciais para maximizar a
                      produtividade.
                    </p>
                  </CardContent>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {fertilizers.map((fertilizer, index) => (
                    <Card
                      key={index}
                      className="border-none shadow-soft hover:shadow-medium transition-all duration-300"
                    >
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2 text-primary">
                          {fertilizer.name}
                        </h3>
                        <p className="text-muted-foreground">
                          {fertilizer.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="mt-12 gradient-hero p-8 rounded-2xl text-white text-center">
                  <h3 className="mb-4 text-white">Nosso Compromisso</h3>
                  <p className="text-lg opacity-90">
                    Entregar qualidade, previsibilidade e parcerias duradouras,
                    fortalecendo toda a cadeia produtiva agrícola.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default Produtos;
