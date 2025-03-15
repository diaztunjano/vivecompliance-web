import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { MagnifierIcon, WalletIcon, ChartIcon } from "./Icons";
import cubeLeg from "../assets/cube-leg.png";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "Comunidad Global de Expertos",
    description:
      "Más de 100 expertos y una audiencia de 5,000+ profesionales en compliance. Conecta con líderes de opinión, oficiales de cumplimiento y consultores internacionales.",
    icon: <ChartIcon />,
  },
  {
    title: "Contenido Especializado",
    description:
      "Publicación trimestral con análisis profundos, casos de estudio y entrevistas exclusivas sobre compliance, ética empresarial y gobierno corporativo en América Latina.",
    icon: <WalletIcon />,
  },
  {
    title: "Recursos y Capacitación",
    description:
      "Acceso a webinars, guías prácticas y herramientas de evaluación impartidos por expertos líderes en compliance y ética empresarial.",
    icon: <MagnifierIcon />,
  },
];

export const ViveComplianceMagazine = () => {
  return (
    <section id="magazine"  className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-12 place-items-center">
        <div>
          <div className="max-w-[500px]">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                Vive Compliance{" "}
              </span>
              Magazine
            </h2>

            <p className="text-muted-foreground text-xl mt-4 mb-12">
              El medio de actualidad del Compliance en Latinoamérica.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title} className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-6">
                  <div className="mt-1 bg-primary/10 p-3 rounded-2xl">
                    <div className="text-primary">
                      {icon}
                    </div>
                  </div>
                  <div>
                    <CardTitle className="text-xl mb-2">{title}</CardTitle>
                    <CardDescription className="text-md leading-relaxed">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-primary/5 rounded-full blur-3xl"></div>
          <img
            src={cubeLeg}
            className="w-[300px] md:w-[500px] lg:w-[600px] object-contain relative z-10"
            alt="Acerca de Vive Compliance Magazine"
          />
        </div>
      </div>
    </section>
  );
};
