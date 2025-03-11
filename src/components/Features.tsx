import { FeaturesTimeline } from "./ui/features-timeline";
import { ChartIcon, MagnifierIcon, MapIcon, WalletIcon, MedalIcon } from "./Icons";

export function Features() {
  const data = [
    {
      title: "Prevención y Gestión",
      subtitle: "Soluciones integrales para la prevención de BC/FT y gestión de riesgos.",
      content: (
        <div className="space-y-6">
          <div className="flex flex-col space-y-6">
            <div className="group rounded-xl bg-neutral-50 dark:bg-neutral-900/90 p-6 md:p-8 shadow-md hover:shadow-[0_0_25px_-5px_rgba(255,149,77,0.25)] transition-all duration-300 border border-neutral-200/50 dark:border-neutral-800">
              <div className="flex flex-col lg:flex-row lg:items-start lg:gap-8">
                <div className="flex-1 space-y-3">
                  <h4 className="text-lg md:text-xl font-bold mb-3 text-primary group-hover:text-primary/90 transition-colors">
                    Sistema de Prevención BC/FT
                  </h4>
                  <div className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-2">
                    <p><span className="text-primary">✓</span> <span className="font-semibold">Diseño e implementación</span> de sistema de prevención BC/FT/FP de acuerdo con el tamaño y operación de la empresa</p>
                    <div className="space-y-1">
                      <p><span className="text-primary">✓</span> <span className="font-semibold">Prevención especializada</span> en:</p>
                      <div className="pl-6 space-y-1">
                        <p>• <span className="font-semibold">Blanqueo de capitales</span></p>
                        <p>• <span className="font-semibold">Financiación del terrorismo</span></p>
                        <p>• <span className="font-semibold">Proliferación de armas</span> de destrucción masiva</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-lg mt-6 lg:mt-0 lg:w-56 xl:w-64 flex-shrink-0 flex items-center justify-center p-8 group-hover:scale-110 transition-transform duration-500">
                  <div className="w-full h-full flex items-center justify-center text-primary group-hover:text-primary/80 transition-colors">
                    <WalletIcon />
                  </div>
                </div>
              </div>
            </div>
            <div className="group rounded-xl bg-neutral-50 dark:bg-neutral-900/90 p-6 md:p-8 shadow-md hover:shadow-[0_0_25px_-5px_rgba(255,149,77,0.25)] transition-all duration-300 border border-neutral-200/50 dark:border-neutral-800">
              <div className="flex flex-col lg:flex-row lg:items-start lg:gap-8">
                <div className="flex-1 space-y-3">
                  <h4 className="text-lg md:text-xl font-bold mb-3 text-primary group-hover:text-primary/90 transition-colors">
                    Gestión de Riesgos BC/FT/FP
                  </h4>
                  <div className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-2">
                    <p><span className="text-primary">✓</span> <span className="font-semibold">Sistema integral de gestión de riesgos BC/FT</span> para la prevención y cumplimiento normativo</p>
                    <p><span className="text-primary">✓</span> <span className="font-semibold">Identificación y mapeo</span> de eventos de riesgo en tu organización</p>
                    <p><span className="text-primary">✓</span> <span className="font-semibold">Matrices personalizadas</span> para la autoevaluación y evaluación de clientes</p>
                    <p><span className="text-primary">✓</span> <span className="font-semibold">Metodologías especializadas</span> adaptadas a tu sector y modelo de negocio</p>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-lg mt-6 lg:mt-0 lg:w-56 xl:w-64 flex-shrink-0 flex items-center justify-center p-8 group-hover:scale-110 transition-transform duration-500">
                  <div className="w-full h-full flex items-center justify-center text-primary group-hover:text-primary/80 transition-colors">
                    <ChartIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Debida Diligencia",
      subtitle: "Verifica y conoce a tus contrapartes con herramientas avanzadas.",
      content: (
        <div className="space-y-6">
          <div className="flex flex-col space-y-6">
            <div className="group rounded-xl bg-neutral-50 dark:bg-neutral-900/90 p-6 md:p-8 shadow-md hover:shadow-[0_0_25px_-5px_rgba(255,149,77,0.25)] transition-all duration-300 border border-neutral-200/50 dark:border-neutral-800">
              <div className="flex flex-col lg:flex-row lg:items-start lg:gap-8">
                <div className="flex-1 space-y-3">
                  <h4 className="text-lg md:text-xl font-bold mb-3 text-primary group-hover:text-primary/90 transition-colors">
                    Identificación de contrapartes BC/FT/FP
                  </h4>
                  <div className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-2">
                    <p><span className="text-primary">✓</span> <span className="font-semibold">Formularios inteligentes</span> para la verificación de datos</p>
                    <p><span className="text-primary">✓</span> <span className="font-semibold">Software especializado</span> para elaboración de reportes regulatorios</p>
                    <p><span className="text-primary">✓</span> <span className="font-semibold">Verificación automatizada</span> de contrapartes</p>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-lg mt-6 lg:mt-0 lg:w-56 xl:w-64 flex-shrink-0 flex items-center justify-center p-8 group-hover:scale-110 transition-transform duration-500">
                  <div className="w-full h-full flex items-center justify-center text-primary group-hover:text-primary/80 transition-colors">
                    <MagnifierIcon />
                  </div>
                </div>
              </div>
            </div>
            <div className="group rounded-xl bg-neutral-50 dark:bg-neutral-900/90 p-6 md:p-8 shadow-md hover:shadow-[0_0_25px_-5px_rgba(255,149,77,0.25)] transition-all duration-300 border border-neutral-200/50 dark:border-neutral-800">
              <div className="flex flex-col lg:flex-row lg:items-start lg:gap-8">
                <div className="flex-1 space-y-3">
                  <h4 className="text-lg md:text-xl font-bold mb-3 text-primary group-hover:text-primary/90 transition-colors">
                    Canal de Denuncias
                  </h4>
                  <div className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-2">
                    <p><span className="text-primary">✓</span> <span className="font-semibold">Sistema anónimo y accesible</span> para reportar irregularidades</p>
                    <p><span className="text-primary">✓</span> <span className="font-semibold">Gestión confidencial</span> de denuncias y reportes</p>
                    <p><span className="text-primary">✓</span> <span className="font-semibold">Seguimiento y trazabilidad</span> de casos reportados</p>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-lg mt-6 lg:mt-0 lg:w-56 xl:w-64 flex-shrink-0 flex items-center justify-center p-8 group-hover:scale-110 transition-transform duration-500">
                  <div className="w-full h-full flex items-center justify-center text-primary group-hover:text-primary/80 transition-colors">
                    <MapIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Capacitación",
      subtitle: "Formación especializada para tu equipo",
      content: (
        <div className="space-y-6">
          <div className="flex flex-col space-y-6">
            <div className="group rounded-xl bg-neutral-50 dark:bg-neutral-900/90 p-6 md:p-8 shadow-md hover:shadow-[0_0_25px_-5px_rgba(255,149,77,0.25)] transition-all duration-300 border border-neutral-200/50 dark:border-neutral-800">
              <div className="flex flex-col lg:flex-row lg:items-start lg:gap-8">
                <div className="flex-1 space-y-3">
                  <h4 className="text-lg md:text-xl font-bold mb-3 text-primary group-hover:text-primary/90 transition-colors">
                    Cursos y Talleres
                  </h4>
                  <div className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-2">
                    <p><span className="text-primary">✓</span> <span className="font-semibold">Legislación y normativas vigentes</span> para el cumplimiento regulatorio</p>
                    <p><span className="text-primary">✓</span> <span className="font-semibold">Tipologías BC/FT y casos prácticos</span> aplicados a su sector</p>
                    <p><span className="text-primary">✓</span> <span className="font-semibold">Gestión de riesgos y controles internos</span> para la prevención</p>
                    <p><span className="text-primary">✓</span> <span className="font-semibold">Actualización continua y certificaciones</span> para su equipo</p>
                    <p className="mt-4 text-neutral-600 dark:text-neutral-400">
                      Programas diseñados para mantener a tu equipo actualizado y preparado en cumplimiento normativo.
                    </p>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-lg mt-6 lg:mt-0 lg:w-56 xl:w-64 flex-shrink-0 flex items-center justify-center p-8 group-hover:scale-110 transition-transform duration-500">
                  <div className="w-full h-full flex items-center justify-center text-primary group-hover:text-primary/80 transition-colors">
                    <MedalIcon />
                  </div>
                </div>
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