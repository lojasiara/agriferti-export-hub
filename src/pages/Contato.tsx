import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";
import Layout from "@/components/Layout";
import whatsappIcon from "@/assets/whatsapp-logo-white.png";

const Contato = () => {
  const { toast } = useToast();
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: t('contact.form.success.title'),
      description: t('contact.form.success.description'),
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: t('contact.info.phone'),
      content: "+55 (44) 3265-3966",
      link: "tel:+554432653966",
    },
    {
      icon: "whatsapp" as any,
      title: t('contact.info.whatsapp'),
      content: "+55 44 9959-9964",
      link: "https://wa.me/5544999599964",
    },
    {
      icon: Mail,
      title: t('contact.info.email'),
      content: "ceo@agriferti.com",
      link: "mailto:ceo@agriferti.com",
    },
    {
      icon: MapPin,
      title: t('contact.info.address'),
      content:
        "Av. Horácio Raccanello Filho, 6326 – Sl 01\nCentro Empresarial Torre Gêmea – Novo Centro\nCEP 87050-130 Maringá / PR",
    },
    {
      icon: Clock,
      title: t('contact.info.hours'),
      content: t('contact.info.hoursValue'),
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
          <h1 className="mb-6 text-white">{t('contact.hero.title')}</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            {t('contact.hero.subtitle')}
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
                <h2 className="mb-6">{t('contact.info.title')}</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  {t('contact.info.subtitle')}
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
                  <h3 className="mb-4 text-white">{t('contact.why.title')}</h3>
                  <ul className="space-y-3">
                    {(t('contact.why.items', { returnObjects: true }) as string[]).map((item: string, index: number) => (
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
                  <h3 className="mb-6">{t('contact.form.title')}</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2"
                      >
                        {t('contact.form.name')}
                      </label>
                      <Input
                        id="name"
                        placeholder={t('contact.form.namePlaceholder')}
                        required
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2"
                      >
                        {t('contact.form.email')}
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder={t('contact.form.emailPlaceholder')}
                        required
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium mb-2"
                      >
                        {t('contact.form.phone')}
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder={t('contact.form.phonePlaceholder')}
                        required
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium mb-2"
                      >
                        {t('contact.form.company')}
                      </label>
                      <Input
                        id="company"
                        placeholder={t('contact.form.companyPlaceholder')}
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium mb-2"
                      >
                        {t('contact.form.message')}
                      </label>
                      <Textarea
                        id="message"
                        placeholder={t('contact.form.messagePlaceholder')}
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
                      {t('contact.form.submit')}
                    </Button>
                    
                    <a
                      href="https://wa.me/5544999599964"
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
                        {t('contact.form.whatsappBtn')}
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
            <h2 className="mb-4">{t('contact.location.title')}</h2>
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
                      <h3 className="font-semibold mb-2">{t('contact.location.fullAddress')}</h3>
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
