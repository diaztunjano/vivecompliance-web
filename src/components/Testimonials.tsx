import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TestimonialProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: "/testimonials/maria-rodriguez.jpg",
    name: "María Rodriguez",
    userName: "Gerente de Cumplimiento",
    comment: "La implementación del sistema de gestión antisoborno ISO 37001 con Vive Compliance transformó nuestra cultura organizacional. Su equipo demostró un profundo conocimiento y profesionalismo excepcional durante todo el proceso. Los resultados superaron nuestras expectativas.",
  },
  {
    image: "/testimonials/carlos-mendoza.jpg",
    name: "Carlos Mendoza",
    userName: "Director de Riesgos",
    comment: "El programa de capacitación en prevención de blanqueo de capitales fue extraordinario. La metodología práctica y el conocimiento compartido por los expertos de Vive Compliance nos permitió fortalecer nuestros controles internos de manera significativa.",
  },
  {
    image: "/testimonials/ana-martinez.jpg",
    name: "Ana Martinez",
    userName: "CEO Fintech Solutions",
    comment: "La asesoría en cumplimiento normativo de Vive Compliance fue fundamental para nuestra expansión regional. Su equipo demostró una dedicación excepcional y un profundo entendimiento de las regulaciones internacionales. Altamente recomendados.",
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
      className="container py-24 sm:py-32 relative"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 opacity-5 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/30 rounded-full blur-3xl" />
      </div>

      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Descubre por qué las empresas
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            {" "}
            confían en{" "}
          </span>
          Vive Compliance
        </h2>

        <p className="text-xl text-muted-foreground">
          Nuestros clientes respaldan nuestro compromiso con la excelencia en servicios de compliance y gestión de riesgos
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map(
          ({ image, name, userName, comment }: TestimonialProps) => (
            <Card
              key={userName}
              className="relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-gradient-to-b from-card to-card/40"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar className="h-14 w-14 ring-2 ring-primary/20">
                  <AvatarImage
                    alt={`Foto de ${name}`}
                    src={image}
                  />
                  <AvatarFallback className="bg-primary/5 text-primary">
                    {getInitials(name)}
                  </AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <CardTitle className="text-xl font-semibold">{name}</CardTitle>
                  <CardDescription className="text-primary/80">{userName}</CardDescription>
                </div>
              </CardHeader>

              <CardContent className="pt-4 text-muted-foreground leading-relaxed">
                "{comment}"
              </CardContent>

              {/* Decorative quote icon */}
              <div className="absolute top-4 right-4 text-4xl text-primary/10">
                "
              </div>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
