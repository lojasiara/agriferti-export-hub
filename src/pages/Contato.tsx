import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";
import whatsappIcon from "@/assets/whatsapp-logo-white.png";

const Contato = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      content: "+55 (44) 3265-3966",
      link: "tel:+554432653966",
    },
    {
      icon: "whatsapp" as any,
      title: "WhatsApp",
      content: "+55 44 9959-9964",
      link: "https://wa.me/5544995999964",
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "ceo@agriferti.com",
      link: "mailto:ceo@agriferti.com",
    },
    {
      icon: MapPin,
      title: "Endereço",
      content:
        "Av. Horácio Raccanello Filho, 6326 – Sl 01\nCentro Empresarial Torre Gêmea – Novo Centro\nCEP 87050-130 Maringá / PR",
    },
    {
      icon: Clock,
      title: "Horário de Atendimento",
      content: "Segunda a Sexta: 8h às 18h",
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
          <source src="/videos/contato-hero.mp4?v=3" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/50 via-primary/40 to-secondary/50" />
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="mb-6 text-white">Fale Conosco</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Entre em contato com nossa equipe de especialistas e descubra como
            podemos impulsionar seu negócio
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="mb-6">Informações de Contato</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Estamos prontos para atender você e transformar sua produção
                  em oportunidades globais.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    className="border-none shadow-soft hover:shadow-medium transition-all duration-300"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                          {info.icon === "whatsapp" ? (
                            <img src={whatsappIcon} alt="WhatsApp" className="w-6 h-6" />
                          ) : (
                            <info.icon className="w-6 h-6 text-white" />
                          )}
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">{info.title}</h3>
                          {info.link ? (
                            <a
                              href={info.link}
                              className="text-muted-foreground hover:text-primary transition-colors whitespace-pre-line underline cursor-pointer"
                            >
                              {info.content}
                            </a>
                          ) : (
                            <p className="text-muted-foreground whitespace-pre-line">
                              {info.content}
                            </p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="border-none gradient-hero text-white">
                <CardContent className="p-8">
                  <h3 className="mb-4 text-white">Por que nos escolher?</h3>
                  <ul className="space-y-3">
                    {[
                      "Experiência consolidada no mercado internacional",
                      "Equipe especializada e bilíngue",
                      "Rede exclusiva de compradores qualificados",
                      "Transparência total em todas as operações",
                      "Foco em resultados reais e duradouros",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0" />
                        <span className="opacity-90">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="border-none shadow-medium">
                <CardContent className="p-8">
                  <h3 className="mb-6">Envie sua Mensagem</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2"
                      >
                        Nome Completo
                      </label>
                      <Input
                        id="name"
                        placeholder="Seu nome"
                        required
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2"
                      >
                        E-mail
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="seu@email.com"
                        required
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium mb-2"
                      >
                        Telefone
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(00) 00000-0000"
                        required
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium mb-2"
                      >
                        Empresa
                      </label>
                      <Input
                        id="company"
                        placeholder="Nome da sua empresa"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium mb-2"
                      >
                        Mensagem
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Como podemos ajudar você?"
                        rows={5}
                        required
                        className="w-full resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full gradient-primary text-white"
                    >
                      Enviar Mensagem
                    </Button>
                    
                    <a
                      href="https://wa.me/5544995999964"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full"
                    >
                      <Button
                        type="button"
                        size="lg"
                        variant="outline"
                        className="w-full"
                      >
                        Fale Conosco pelo WhatsApp
                      </Button>
                    </a>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">Nossa Localização</h2>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              <Card className="border-none shadow-soft hover:shadow-medium transition-all duration-300 lg:col-span-3">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2">Endereço Completo</h3>
                      <p className="text-muted-foreground">
                        Av. Horácio Raccanello Filho, 6326 – Sl 01<br />
                        Centro Empresarial Torre Gêmea – Novo Centro<br />
                        CEP 87050-130 Maringá / PR
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card className="border-none shadow-strong overflow-hidden">
              <CardContent className="p-0">
                <div className="h-[500px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660.4289676586!2d-51.94!3d-23.42!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDI1JzEyLjAiUyA1McKwNTYnMjQuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização AgriFerti Brasil"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contato;
