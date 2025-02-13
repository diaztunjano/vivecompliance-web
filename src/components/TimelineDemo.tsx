import { Timeline } from "./ui/timeline";
import image from "../assets/growth.png";
import image3 from "../assets/reflecting.png";
import image4 from "../assets/looking-ahead.png";

export function TimelineDemo() {
  const data = [
    {
      title: "Prevención y Gestión",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Soluciones integrales para la prevención de BC/FT y gestión de riesgos
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-lg bg-neutral-100 dark:bg-neutral-900 p-6">
              <h4 className="text-sm font-semibold mb-2">Prevención de BC/FT</h4>
              <p className="text-xs text-neutral-600 dark:text-neutral-400">
                Diseño e implementación de sistemas de gestión de riesgos adaptados a las normativas vigentes, asegurando el cumplimiento efectivo.
              </p>
              <img
                src={image4}
                alt="Prevención BC/FT"
                className="w-[150px] mt-4 mx-auto"
              />
            </div>
            <div className="rounded-lg bg-neutral-100 dark:bg-neutral-900 p-6">
              <h4 className="text-sm font-semibold mb-2">Gestión de Riesgos</h4>
              <p className="text-xs text-neutral-600 dark:text-neutral-400">
                Implementación y auditoría de normas internacionales ISO para gestión de riesgos y continuidad de negocio.
              </p>
              <img
                src={image3}
                alt="Gestión de Riesgos"
                className="w-[150px] mt-4 mx-auto"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Debida Diligencia",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Herramientas avanzadas para conocer y verificar a tus clientes
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-lg bg-neutral-100 dark:bg-neutral-900 p-6">
              <h4 className="text-sm font-semibold mb-2">Verificación de Datos</h4>
              <p className="text-xs text-neutral-600 dark:text-neutral-400">
                Formularios inteligentes y software especializado para la verificación de datos y elaboración de reportes regulatorios.
              </p>
              <img
                src={image}
                alt="Verificación de Datos"
                className="w-[150px] mt-4 mx-auto"
              />
            </div>
            <div className="rounded-lg bg-neutral-100 dark:bg-neutral-900 p-6">
              <h4 className="text-sm font-semibold mb-2">Canal de Denuncias</h4>
              <p className="text-xs text-neutral-600 dark:text-neutral-400">
                Sistema anónimo y accesible para reportar irregularidades y prevenir conductas no éticas.
              </p>
              <img
                src={image3}
                alt="Canal de Denuncias"
                className="w-[150px] mt-4 mx-auto"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Capacitación",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Formación especializada para tu equipo
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Legislación y normativas vigentes
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Tipologías BC/FT y casos prácticos
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Gestión de riesgos y controles internos
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Actualización continua y certificaciones
            </div>
          </div>
          <div className="rounded-lg bg-neutral-100 dark:bg-neutral-900 p-6">
            <h4 className="text-sm font-semibold mb-2">Cursos y Talleres</h4>
            <p className="text-xs text-neutral-600 dark:text-neutral-400">
              Programas diseñados para mantener a tu equipo actualizado y preparado en cumplimiento normativo.
            </p>
            <img
              src={image3}
              alt="Capacitación"
              className="w-[150px] mt-4 mx-auto"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="timeline" className="w-full">
      <Timeline data={data} />
    </section>
  );
}