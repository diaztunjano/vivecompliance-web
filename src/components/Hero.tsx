import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { BookOpenIcon } from "lucide-react";
export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            Transformamos{" "}
            <span className="inline bg-gradient-to-r from-[#00306b] to-[#0055bb] text-transparent bg-clip-text">
              cumplimiento
            </span>{" "}
            en{" "}
            <span className="inline bg-gradient-to-r from-[#FF9447] via-[#FF7A1F] to-[#FF6B00] text-transparent bg-clip-text">
              reputación
            </span>
          </h1>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Soluciones integrales en cumplimiento normativo, reduciendo al máximo
          los riesgos operativos, legales y reputacionales que puedan surgir en
          las actividades empresariales
        </p>


        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button className="w-full md:w-1/3">Contáctanos</Button>

          <a
            rel="noreferrer noopener"
            href="https://github.com/leoMirandaa/shadcn-landing-page.git"
            target="_blank"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            Publicaciones
            <BookOpenIcon className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>



    </section>
  );
};
