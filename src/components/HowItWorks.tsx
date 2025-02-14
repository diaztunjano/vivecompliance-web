import { Card, CardContent } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
  steps: string[];
  stepNumber: number;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "Diagnóstico Inicial",
    description: "Evaluación de la situación actual",
    stepNumber: 1,
    steps: [
      "Evaluación exhaustiva",
      "Identificación de brechas",
      "Análisis de riesgos"
    ]
  },
  {
    icon: <MapIcon />,
    title: "Diseño Estratégico",
    description: "Planificación detallada del proceso",
    stepNumber: 2,
    steps: [
      "Planificación personalizada",
      "Definición de objetivos",
      "Establecimiento de KPIs"
    ]
  },
  {
    icon: <PlaneIcon />,
    title: "Implementación",
    description: "Ejecución del plan estratégico",
    stepNumber: 3,
    steps: [
      "Desarrollo de programas",
      "Capacitación del personal",
      "Integración de sistemas"
    ]
  },
  {
    icon: <GiftIcon />,
    title: "Seguimiento",
    description: "Monitoreo y mejora continua",
    stepNumber: 4,
    steps: [
      "Monitoreo continuo",
      "Auditorías periódicas",
      "Actualización de programas"
    ]
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container py-24 lg:py-32"
    >
      <div className="text-center mb-16 lg:mb-24">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-primary/80 to-primary text-transparent bg-clip-text">
            Metodología
          </span>
        </h2>
        <p className="md:w-2/3 mx-auto mt-6 text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
          Enfoque adaptado a las necesidades específicas de tu empresa
        </p>
      </div>

      <div className="max-w-[1400px] mx-auto px-4">
        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-8 relative">
          {features.map(({ icon, title, description, steps, stepNumber }: FeatureProps) => (
            <div key={title} className="relative group h-full">
              <Card className="relative bg-background border-2 border-border/20 dark:bg-card/95 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden h-full">
                <CardContent className="p-6 lg:p-8 flex flex-col h-full">
                  {/* Step Number and Icon */}
                  <div className="flex flex-col items-center mb-8">
                    <div className="relative flex items-center justify-center w-full">
                      <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent flex items-center justify-center mb-4 group-hover:scale-105 transition-all duration-300">
                        <div className="w-12 h-12 text-primary group-hover:text-primary/80 transition-colors duration-300">
                          {icon}
                        </div>
                      </div>
                      <span className="absolute -left-2 -top-2 w-8 h-8 rounded-xl bg-gradient-to-r from-primary/80 to-primary text-primary-foreground text-lg font-medium flex items-center justify-center shadow-[0_4px_10px_rgba(var(--primary-rgb),0.3)]">
                        {stepNumber}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center flex-1 flex flex-col">
                    <h3 className="text-xl font-semibold bg-gradient-to-r from-primary/80 to-primary text-transparent bg-clip-text mb-3 tracking-tight">
                      {title}
                    </h3>
                    <p className="text-muted-foreground mb-6 font-light text-base leading-relaxed">
                      {description}
                    </p>
                    <ul className="space-y-3 text-left mt-auto">
                      {steps.map((step, index) => (
                        <li key={index} className="flex items-start gap-3 group/item">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary border border-primary/20 group-hover/item:bg-primary transition-colors duration-300 flex-shrink-0 mt-2" />
                          <span className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors duration-300">
                            {step}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Tablet Layout */}
        <div className="hidden md:grid lg:hidden md:grid-cols-2 gap-6">
          {features.map(({ icon, title, description, steps, stepNumber }: FeatureProps) => (
            <div key={title} className="relative group h-full">
              <Card className="relative bg-background border-2 border-border/20 dark:bg-card/95 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden h-full">
                <CardContent className="p-6">
                  <div className="flex items-start gap-6">
                    {/* Step Number and Icon */}
                    <div className="flex-shrink-0 relative flex items-center justify-center">
                      <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-primary/10 to-transparent flex items-center justify-center">
                        <div className="w-10 h-10 text-primary">
                          {icon}
                        </div>
                      </div>
                      <span className="absolute -left-2 -top-2 w-7 h-7 rounded-lg bg-gradient-to-r from-primary/80 to-primary text-primary-foreground text-base font-medium flex items-center justify-center shadow-[0_4px_10px_rgba(var(--primary-rgb),0.3)]">
                        {stepNumber}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold bg-gradient-to-r from-primary/80 to-primary text-transparent bg-clip-text mb-2 tracking-tight">
                        {title}
                      </h3>
                      <p className="text-muted-foreground mb-4 font-light text-sm leading-relaxed">
                        {description}
                      </p>
                      <ul className="space-y-2">
                        {steps.map((step, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary border border-primary/20 flex-shrink-0 mt-2" />
                            <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                              {step}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-6">
          {features.map(({ icon, title, description, steps, stepNumber }: FeatureProps) => (
            <div key={title} className="relative group">
              <Card className="relative bg-background border-2 border-border/20 dark:bg-card/95 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden">
                <CardContent className="p-5">
                  <div className="flex items-start gap-6">
                    {/* Step Number and Icon */}
                    <div className="flex-shrink-0 relative flex items-center justify-center">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/10 to-transparent flex items-center justify-center">
                        <div className="w-8 h-8 text-primary">
                          {icon}
                        </div>
                      </div>
                      <span className="absolute -left-2 -top-2 w-6 h-6 rounded-lg bg-gradient-to-r from-primary/80 to-primary text-primary-foreground text-sm font-medium flex items-center justify-center shadow-[0_4px_10px_rgba(var(--primary-rgb),0.3)]">
                        {stepNumber}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pt-1">
                      <h3 className="text-lg font-semibold bg-gradient-to-r from-primary/80 to-primary text-transparent bg-clip-text mb-2 tracking-tight">
                        {title}
                      </h3>
                      <p className="text-muted-foreground mb-3 font-light text-sm leading-relaxed">
                        {description}
                      </p>
                      <ul className="space-y-2">
                        {steps.map((step, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary border border-primary/20 flex-shrink-0 mt-2" />
                            <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                              {step}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
