"use client";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import AutoScroll from "embla-carousel-auto-scroll";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Linkedin } from "lucide-react";

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  company?: string;
  comment: string;
  linkedinUrl?: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: "/testimonials/Lina_Giraldo.webp",
    name: "Lina Giraldo",
    userName: "Gerente de Cumplimiento",
    company: "Alpha Securities Inc",
    comment: "Vive Compliance nos ayudó a implementar nuestro programa BC/FT con soluciones personalizadas y un equipo profesional. Cumplimos con las normas y establecimos controles efectivos y eficientes. <strong>Altamente recomendados por su enfoque y resultados.</strong>",
    linkedinUrl: "https://www.linkedin.com/in/linagiraldoaml/",
  },
  {
    image: "/testimonials/Maritza_Galindo.jpeg",
    name: "Maritza Galindo",
    userName: "Directora del Centro de Capacitación",
    company: "BASC",
    comment: "Yudy Tunjano fue clave en nuestros programas de formación. Su conocimiento práctico, calificación de 9.9 y habilidad para conectar con estudiantes destacaron. <strong>Nuestros estudiantes se sienten más preparados y seguros en su trabajo.</strong>",
    linkedinUrl: "https://www.linkedin.com/in/maritza-galindo-carvajal-627a5a46/",
  },
  {
    image: "/testimonials/Vanessa_Cure.jpeg",
    name: "Vanessa Cure Anturi",
    userName: "Directora Ejecutiva",
    company: "Asociación Colombiana de Seguridad - ASOSEC®",
    comment: "En el Diplomado de Gestión de Riesgos, la Dra. Tunjano destacó por su claridad, experiencia y dominio normativo. <strong>Su compromiso con la cultura de cumplimiento y la excelencia la posiciona como una referencia en la industria.</strong>",
  },
  {
    image: "/testimonials/Mark_Bartch.jpeg",
    name: "Mark Bartch",
    userName: "Director CIPE Internacional",
    comment: "Implementamos con éxito la norma ISO 37001 gracias a la asesoría de Vive Compliance. <strong>Logramos un sistema anti-soborno que cumplió la norma y fortaleció nuestra cultura organizacional en torno a la ética y la transparencia.</strong>",
    linkedinUrl: "https://www.linkedin.com/in/mark-bartch-49909217a/",
  },
];

export const Testimonials = () => {
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase();
  };

  return (
    <section
      id="testimonials"
      className="w-full bg-background font-sans relative py-10 sm:py-16"
    >
      {/* Background decoration with subtle patterns */}
      <div className="absolute inset-0 -z-10 opacity-5 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/30 rounded-full blur-3xl" />
        <div className="absolute top-3/4 left-1/4 w-[300px] h-[300px] bg-indigo-500/20 rounded-full blur-2xl" />
        <div className="absolute top-1/4 right-1/4 w-[250px] h-[250px] bg-amber-500/10 rounded-full blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-5 mb-10 sm:mb-14"
        >
          <div className="max-w-5xl mx-auto">
            <motion.h2
              className="font-bold tracking-tight leading-tight"
            >
              <span className="text-foreground text-3xl sm:text-4xl lg:text-5xl">
                Descubre por qué las empresas
              </span>
              <br className="sm:hidden" />
              <span className="sm:ml-3 bg-gradient-to-r from-primary/80 to-primary text-transparent bg-clip-text text-3xl sm:text-4xl lg:text-5xl">
                confían en Vive Compliance
              </span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-muted-foreground/90 max-w-2xl mx-auto leading-relaxed"
          >
            Nuestros clientes respaldan nuestro compromiso con la excelencia en servicios de compliance y gestión de riesgos
          </motion.p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative w-full py-6">
          <div className="relative mx-auto flex items-center justify-center">
            <Carousel
              opts={{
                loop: true,
                align: "start",
                dragFree: true,
              }}
              plugins={[
                AutoScroll({
                  playOnInit: true,
                  speed: 0.5,
                }),
              ]}
              className="w-full max-w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-3 lg:-ml-4">
                {testimonials.map((testimonial, index) => (
                  <CarouselItem
                    key={`testimonial-${index}`}
                    className="pl-2 md:pl-3 lg:pl-4 basis-[85vw] sm:basis-[380px] md:basis-[400px] lg:basis-[420px] py-3"
                  >
                    <div className="transition-all duration-300 hover:scale-[1.02] h-full">
                      <Card className="h-full flex flex-col bg-white dark:bg-card/80 border border-border/40 shadow-[0_2px_10px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-500 relative">
                        {testimonial.linkedinUrl && (
                          <a
                            href={testimonial.linkedinUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute top-3 right-3 w-7 h-7 flex items-center justify-center text-[#0077b5] hover:text-[#0077b5] hover:bg-[#0077b5]/10 transition-all duration-300 rounded-full"
                            aria-label={`LinkedIn profile of ${testimonial.name}`}
                          >
                            <Linkedin size="16" />
                          </a>
                        )}
                        <CardHeader className="pb-2 pt-5 px-5">
                          <div className="flex flex-row items-center gap-4">
                            <Avatar className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 rounded-full ring-2 ring-primary/10 shadow-sm">
                              <AvatarImage
                                alt={`Foto de ${testimonial.name}`}
                                src={testimonial.image}
                                className="object-cover"
                              />
                              <AvatarFallback className="bg-primary/5 text-primary font-semibold text-lg">
                                {getInitials(testimonial.name)}
                              </AvatarFallback>
                            </Avatar>

                            <div className="flex flex-col items-start">
                              <CardTitle className="text-lg sm:text-xl font-bold text-primary">
                                {testimonial.name}
                              </CardTitle>
                              <CardDescription className="text-sm sm:text-base text-foreground/90 font-medium mt-0.5">
                                {testimonial.userName}
                              </CardDescription>
                              {testimonial.company && (
                                <CardDescription className="text-xs sm:text-sm text-muted-foreground italic mt-0">
                                  {testimonial.company}
                                </CardDescription>
                              )}
                            </div>
                          </div>
                        </CardHeader>

                        <CardContent className="px-5 pb-5 pt-1 flex-grow">
                          <div className="text-left h-full flex flex-col justify-center">
                            <p
                              className="text-sm text-muted-foreground/90 leading-relaxed"
                              dangerouslySetInnerHTML={{ __html: testimonial.comment }}
                            />
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

          {/* Gradient overlays for fading effect */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-[8%] bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-[8%] bg-gradient-to-l from-background to-transparent" />
        </div>
      </div>
    </section>
  );
};
