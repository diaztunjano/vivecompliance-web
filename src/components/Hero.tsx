import { Button } from "./ui/button";
import { ArrowRightIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { Typewriter } from "./ui/typewriter";

export const Hero = () => {
  const titles = ["reputación", "confianza", "valor", "seguridad", "excelencia"];
  const substackUrl = "yudytunjano.substack.com";

  const handleScroll = (e: React.MouseEvent<HTMLButtonElement>, target: string) => {
    e.preventDefault();
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
          <div>
            <Button variant="secondary" size="sm" className="gap-2" asChild>
              <a
                href={`https://${substackUrl}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Lee nuestro último artículo <ArrowRightIcon className="w-4 h-4" />
              </a>
            </Button>
          </div>

          <div className="flex gap-4 flex-col items-center max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <h1 className="text-5xl md:text-6xl tracking-tighter text-center font-bold leading-[1.1]">
                Transformamos{" "}
                <span className="bg-gradient-to-r from-[#00306b] to-[#0055bb] text-transparent bg-clip-text">
                  cumplimiento
                </span>
              </h1>
              <div className="flex items-center justify-center text-5xl md:text-6xl tracking-tighter font-bold w-full leading-[1.1] -mt-2">
                <div className="flex items-center justify-center">
                  <span className="bg-gradient-to-r from-[#00306b] to-[#0055bb] text-transparent bg-clip-text">
                    en
                  </span>
                  <div className="ml-3">
                    <Typewriter
                      text={titles}
                      className="bg-gradient-to-r from-[#FF9447] via-[#FF7A1F] to-[#FF6B00] text-transparent bg-clip-text"
                      speed={100}
                      deleteSpeed={50}
                      delay={1500}
                      loop={true}
                      cursor="|"
                    />
                  </div>
                </div>
              </div>
            </div>

            <p className="text-xl text-muted-foreground max-w-2xl text-center mx-auto mt-6">
              Soluciones integrales en cumplimiento normativo, reduciendo al máximo
              los riesgos operativos, legales y reputacionales que puedan surgir en
              las actividades empresariales
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-3">
            <Button size="lg" className="gap-2" variant="outline" onClick={(e) => handleScroll(e, "#contact")}>
              Contáctanos <PhoneIcon className="w-4 h-4" />
            </Button>
            <Button size="lg" className="gap-2" asChild>
              <a
                href={`https://${substackUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="gap-2"
              >
                Publicaciones <ArrowRightIcon className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
