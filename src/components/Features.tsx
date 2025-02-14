import { FeaturesTimeline } from "./ui/features-timeline";
import image from "../assets/growth.png";
import image3 from "../assets/reflecting.png";
import image4 from "../assets/looking-ahead.png";

export function Features() {
  const data = [
    {
      title: "Prevención y Gestión",
      content: (
        <div className="space-y-6">
          <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-lg font-medium tracking-wide mb-2">
            Soluciones integrales para la prevención de BC/FT y gestión de riesgos
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group rounded-xl bg-neutral-50 dark:bg-neutral-900/90 p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-neutral-200/50 dark:border-neutral-800">
              <h4 className="text-lg md:text-xl font-bold mb-3 text-primary group-hover:text-primary/90 transition-colors">
                Prevención de BC/FT
              </h4>
              <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Diseño e implementación de sistemas de gestión de riesgos adaptados a las normativas vigentes, asegurando el cumplimiento efectivo.
              </p>
              <div className="relative overflow-hidden rounded-lg mt-4">
                <img
                  src={image4}
                  alt="Prevención BC/FT"
                  className="w-[160px] mx-auto transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="group rounded-xl bg-neutral-50 dark:bg-neutral-900/90 p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-neutral-200/50 dark:border-neutral-800">
              <h4 className="text-lg md:text-xl font-bold mb-3 text-primary group-hover:text-primary/90 transition-colors">
                Gestión de Riesgos
              </h4>
              <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Implementación y auditoría de normas internacionales ISO para gestión de riesgos y continuidad de negocio.
              </p>
              <div className="relative overflow-hidden rounded-lg mt-4">
                <img
                  src={image3}
                  alt="Gestión de Riesgos"
                  className="w-[160px] mx-auto transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Debida Diligencia",
      content: (
        <div className="space-y-6">
          <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-lg font-medium tracking-wide mb-2">
            Herramientas avanzadas para conocer y verificar a tus clientes
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group rounded-xl bg-neutral-50 dark:bg-neutral-900/90 p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-neutral-200/50 dark:border-neutral-800">
              <h4 className="text-lg md:text-xl font-bold mb-3 text-primary group-hover:text-primary/90 transition-colors">
                Verificación de Datos
              </h4>
              <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Formularios inteligentes y software especializado para la verificación de datos y elaboración de reportes regulatorios.
              </p>
              <div className="relative overflow-hidden rounded-lg mt-4">
                <img
                  src={image}
                  alt="Verificación de Datos"
                  className="w-[160px] mx-auto transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="group rounded-xl bg-neutral-50 dark:bg-neutral-900/90 p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-neutral-200/50 dark:border-neutral-800">
              <h4 className="text-lg md:text-xl font-bold mb-3 text-primary group-hover:text-primary/90 transition-colors">
                Canal de Denuncias
              </h4>
              <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Sistema anónimo y accesible para reportar irregularidades y prevenir conductas no éticas.
              </p>
              <div className="relative overflow-hidden rounded-lg mt-4">
                <img
                  src={image3}
                  alt="Canal de Denuncias"
                  className="w-[160px] mx-auto transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Capacitación",
      content: (
        <div className="space-y-6">
          <p className="text-neutral-800 dark:text-neutral-200 text-base md:text-lg font-medium tracking-wide mb-2">
            Formación especializada para tu equipo
          </p>
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-neutral-50 dark:bg-neutral-900/90 rounded-xl p-6 md:p-8 mb-6 border border-neutral-200/50 dark:border-neutral-800">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex gap-3 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
                    <span className="text-primary">✓</span> Legislación y normativas vigentes
                  </div>
                  <div className="flex gap-3 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
                    <span className="text-primary">✓</span> Tipologías BC/FT y casos prácticos
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex gap-3 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
                    <span className="text-primary">✓</span> Gestión de riesgos y controles internos
                  </div>
                  <div className="flex gap-3 items-center text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
                    <span className="text-primary">✓</span> Actualización continua y certificaciones
                  </div>
                </div>
              </div>
            </div>
            <div className="group rounded-xl bg-neutral-50 dark:bg-neutral-900/90 p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-neutral-200/50 dark:border-neutral-800">
              <h4 className="text-lg md:text-xl font-bold mb-3 text-primary group-hover:text-primary/90 transition-colors">
                Cursos y Talleres
              </h4>
              <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Programas diseñados para mantener a tu equipo actualizado y preparado en cumplimiento normativo.
              </p>
              <div className="relative overflow-hidden rounded-lg mt-4">
                <img
                  src={image3}
                  alt="Capacitación"
                  className="w-[160px] mx-auto transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="timeline" className="w-full">
      <FeaturesTimeline data={data} />
    </section>
  );
}