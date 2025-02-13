import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import image from "../assets/growth.png";
import image3 from "../assets/reflecting.png";
import image4 from "../assets/looking-ahead.png";


interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "Prevención de BC/FT",
    description:
      "Diseño e implementación de sistemas de gestión de riesgos adaptados a las normativas vigentes, asegurando el cumplimiento efectivo en la prevención de Blanqueo de Capitales y Financiamiento del Terrorismo.",
    image: image4,
  },
  {
    title: "Certificaciones ISO",
    description:
      "Implementación y auditoría de normas internacionales ISO 37001 (Antisoborno), 9001 (Calidad), 37301 (Cumplimiento), 31000 (Riesgos) y 22301 (Continuidad de Negocio).",
    image: image3,
  },
  {
    title: "Debida Diligencia",
    description:
      "Formularios inteligentes y software especializado para la verificación de datos, elaboración de reportes regulatorios y gestión efectiva del proceso 'Conoce a Tu Cliente'.",
    image: image,
  },
  {
    title: "Capacitación y Formación",
    description:
      "Cursos y talleres especializados en legislación, tipologías BC/FT, gestión de riesgos y controles internos, diseñados para mantener a tu equipo actualizado y preparado.",
    image: image3,
  },
  {
    title: "Canal de Denuncias",
    description:
      "Sistema anónimo y accesible para reportar irregularidades y prevenir conductas no éticas, garantizando la confidencialidad y seguridad en el proceso de denuncia.",
    image: image3,
  },
];

const featureList: string[] = [
  "Canal de Denuncias",
  "Gestión de Riesgos",
  "Auditoría ISO",
  "Capacitación",
  "Debida Diligencia",
  "Prevención BC/FT",
  "Cumplimiento Normativo",
];

export const Features = () => {
  return (
    <section
      id="features"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Nuestros{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Servicios
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge
              variant="secondary"
              className="text-sm"
            >
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle className="text-xl font-bold">{title}</CardTitle>
            </CardHeader>

            <CardContent>
              <p className="text-muted-foreground">{description}</p>
            </CardContent>

            <CardFooter>
              <img
                src={image}
                alt={`Ilustración de ${title}`}
                className="w-[200px] lg:w-[300px] mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
