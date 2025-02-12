import { Statistics } from "./Statistics";
import pilot from "../assets/pilot.png";

export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={pilot}
            alt="Vive Compliance Team"
            className="w-[300px] object-contain rounded-lg shadow-lg"
          />
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  Sobre{" "}
                </span>
                Nosotros
              </h2>
              <p className="text-lg text-muted-foreground">
                VIVE COMPLIANCE es el espacio esencial para los profesionales del Compliance en América Latina,
                autorizado mediante Resolución S-EC-023-2021. A través de nuestra revista especializada y servicios
                integrales, potenciamos el profesionalismo en compliance, promoviendo valores fundamentales como
                Gobierno Corporativo, Ética y Transparencia, mientras ayudamos a las organizaciones a fortalecer
                su gestión de cumplimiento normativo.
              </p>
            </div>

            <div className="mt-12">
              <Statistics />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
