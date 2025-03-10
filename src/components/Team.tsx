import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Facebook, Instagram, Linkedin } from "lucide-react";

interface TeamProps {
  imageUrl: string;
  name: string;
  position: string;
  highlights: string[];
  socialNetworks: SociaNetworkslProps[];
}

interface SociaNetworkslProps {
  name: string;
  url: string;
}

const teamList: TeamProps[] = [
  {
    imageUrl: "https://i.pravatar.cc/150?img=35",
    name: "Yudy Tunjano",
    position: "Directora de Vive Compliance",
    highlights: [
      "Abogada colombiana y chilena con Magister en Derecho de la Empresa (PUC Chile)",
      "Máster Compliance Officer (UCM Madrid) y Diplomada en SARLAFT",
      "Certificada como Auditora en ISO 9001, 31000, 37001 y 37301",
      "Miembro del Comité Espejo ISO/TC en Panamá",
      "20+ años de experiencia en compliance y sistemas de gestión"
    ],
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/leopoldo-miranda/",
      },
    ],
  },
  {
    imageUrl: "https://i.pravatar.cc/150?img=60",
    name: "Carlos Boschell",
    position: "Comité editorial",
    highlights: [
      "Oficial de la Reserva Activa de la Policía Nacional Colombiana",
      "Especialista en Investigación Criminal y Alta Dirección",
      "Auditor Internacional Certificado BASC y Risk Manager ISO 31000",
      "Certificado en ISO 17024, 37001, 22301, 37301, 18788",
      "35+ años en Proyectos de Seguridad e Investigaciones"
    ],
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/leopoldo-miranda/",
      },
    ],
  },
  {
    imageUrl: "https://i.pravatar.cc/150?img=36",
    name: "Erik Maldonado",
    position: "Comité editorial",
    highlights: [
      "Magister en Leyes LLM (PUC Chile) y Abogado",
      "Especialista en Compliance y Gestión de Riesgos (GWU)",
      "Business & Life Coach Certificado (ICMF)",
      "Consultor en Cumplimiento Corporativo",
      "Impulsor de iniciativas de ley en cultura de cumplimiento"
    ],
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/leopoldo-miranda/",
      },
    ],
  },
];

export const Team = () => {
  const socialIcon = (iconName: string) => {
    switch (iconName) {
      case "Linkedin":
        return <Linkedin size="20" />;

      case "Facebook":
        return <Facebook size="20" />;

      case "Instagram":
        return <Instagram size="20" />;
    }
  };

  return (
    <section
      id="team"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Nuestro Equipo{" "}
        </span>
        Experto
      </h2>

      <p className="mt-4 mb-10 text-xl text-muted-foreground">
        Profesionales altamente calificados con amplia experiencia en compliance y gestión de riesgos.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-10">
        {teamList.map(
          ({ imageUrl, name, position, highlights, socialNetworks }: TeamProps) => (
            <Card
              key={name}
              className="bg-muted/50 relative mt-8 flex flex-col justify-between h-full"
            >
              <CardHeader className="mt-8 flex justify-center items-center pb-2">
                <img
                  src={imageUrl}
                  alt={`${name} ${position}`}
                  className="absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover shadow-lg border-2 border-primary/20"
                />
                <CardTitle className="text-center">{name}</CardTitle>
                <CardDescription className="text-primary font-medium">
                  {position}
                </CardDescription>
              </CardHeader>

              <CardContent className="text-sm space-y-2">
                <ul className="list-none space-y-2">
                  {highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-muted-foreground">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="flex justify-center gap-2 pt-4">
                {socialNetworks.map(({ name, url }: SociaNetworkslProps) => (
                  <div key={name}>
                    <a
                      rel="noreferrer noopener"
                      href={url}
                      target="_blank"
                      className={buttonVariants({
                        variant: "ghost",
                        size: "sm",
                      })}
                    >
                      <span className="sr-only">{name} icon</span>
                      {socialIcon(name)}
                    </a>
                  </div>
                ))}
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
