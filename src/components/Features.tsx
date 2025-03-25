import { FeaturesTimeline } from "./ui/features-timeline";
// Eliminamos la importación de iconos que ya no usaremos
// import { ChartIcon, MagnifierIcon, MapIcon, WalletIcon, MedalIcon } from "./Icons";

// Importamos las imágenes placeholder para cada servicio
// Nota: Estas rutas son placeholders y deberán ser reemplazadas por las imágenes reales
const preventionImage = "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=600&auto=format&fit=crop";
const riskManagementImage = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop";
const identificationImage = "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=600&auto=format&fit=crop";
const whistleblowingImage = "https://images.unsplash.com/photo-1521791055366-0d553872125f?q=80&w=600&auto=format&fit=crop";
const trainingImage = "/seminarios/seminario_1.jpg";

// Definimos el color azul para acentos
// const accentBlueLight = "from-[#00306b] to-[#0055bb]";
// const accentBlueDark = "from-[#0055bb] to-[#00306b]";

export function Features() {
  const data = [
    {
      title: "Prevención y Gestión",
      subtitle: "Soluciones integrales para la prevención de BC/FT y gestión de riesgos.",
      content: (
        <div className="space-y-8">
          <div className="flex flex-col space-y-8">
            <div className="group rounded-xl bg-neutral-50 dark:bg-neutral-900/90 overflow-hidden shadow-md hover:shadow-[0_0_30px_-5px_rgba(0,48,107,0.3)] transition-all duration-500 border border-neutral-200/50 dark:border-neutral-800 hover:border-[#00306b]/20">
              <div className="flex flex-col lg:flex-row">
                <div className="relative lg:w-64 xl:w-72 flex-shrink-0">
                  <div className="aspect-[4/3] w-full h-full">
                    <img
                      src={preventionImage}
                      alt="Sistema de Prevención BC/FT"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#00306b]/30 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                  </div>
                </div>
                <div className="flex-1 p-6 md:p-8">
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="h-5 w-1 rounded-full bg-gradient-to-b from-[#00306b] to-[#0055bb]"></div>
                    <h4 className="text-lg md:text-xl font-bold bg-gradient-to-r from-[#00306b] to-[#0055bb] text-transparent bg-clip-text group-hover:from-[#00306b] group-hover:to-[#0055bb] transition-colors">
                      Sistema de Prevención BC/FT
                    </h4>
                  </div>
                  <div className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-3">
                    <div className="flex items-start space-x-3">
                      <span className="text-[#00306b] text-lg mt-0.5 flex-shrink-0">✓</span>
                      <div>
                        <span className="font-semibold">Diseño e implementación</span>
                        <p className="mt-1 text-neutral-500 dark:text-neutral-400 text-sm">
                          Sistema de prevención BC/FT/FP adaptado al tamaño y operación de tu empresa
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <span className="text-[#00306b] text-lg mt-0.5 flex-shrink-0">✓</span>
                      <div>
                        <span className="font-semibold">Prevención especializada</span>
                        <div className="mt-2 space-y-1.5 pl-2 border-l-2 border-[#00306b]/20">
                          <p className="flex items-center text-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#00306b] to-[#0055bb] mr-2 flex-shrink-0"></span>
                            <span className="font-medium">Blanqueo de capitales</span>
                          </p>
                          <p className="flex items-center text-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#00306b] to-[#0055bb] mr-2 flex-shrink-0"></span>
                            <span className="font-medium">Financiación del terrorismo</span>
                          </p>
                          <p className="flex items-center text-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#00306b] to-[#0055bb] mr-2 flex-shrink-0"></span>
                            <span className="font-medium">Proliferación de armas</span>
                            <span className="text-neutral-500 dark:text-neutral-400 ml-1">de destrucción masiva</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="group rounded-xl bg-neutral-50 dark:bg-neutral-900/90 overflow-hidden shadow-md hover:shadow-[0_0_30px_-5px_rgba(0,48,107,0.3)] transition-all duration-500 border border-neutral-200/50 dark:border-neutral-800 hover:border-[#00306b]/20">
              <div className="flex flex-col lg:flex-row">
                <div className="relative lg:w-64 xl:w-72 flex-shrink-0">
                  <div className="aspect-[4/3] w-full h-full">
                    <img
                      src={riskManagementImage}
                      alt="Gestión de Riesgos BC/FT/FP"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#00306b]/30 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                  </div>
                </div>
                <div className="flex-1 p-6 md:p-8">
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="h-5 w-1 rounded-full bg-gradient-to-b from-[#00306b] to-[#0055bb]"></div>
                    <h4 className="text-lg md:text-xl font-bold bg-gradient-to-r from-[#00306b] to-[#0055bb] text-transparent bg-clip-text group-hover:from-[#00306b] group-hover:to-[#0055bb] transition-colors">
                      Gestión de Riesgos BC/FT/FP
                    </h4>
                  </div>
                  <div className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-3">
                    <div className="flex items-start space-x-3">
                      <span className="text-[#00306b] text-lg mt-0.5 flex-shrink-0">✓</span>
                      <div>
                        <span className="font-semibold">Sistema integral de gestión de riesgos BC/FT</span>
                        <p className="mt-1 text-neutral-500 dark:text-neutral-400 text-sm">
                          Para la prevención y cumplimiento normativo
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <span className="text-[#00306b] text-lg mt-0.5 flex-shrink-0">✓</span>
                      <div>
                        <span className="font-semibold">Identificación y mapeo</span>
                        <p className="mt-1 text-neutral-500 dark:text-neutral-400 text-sm">
                          De eventos de riesgo en tu organización
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <span className="text-[#00306b] text-lg mt-0.5 flex-shrink-0">✓</span>
                      <div>
                        <span className="font-semibold">Matrices personalizadas</span>
                        <p className="mt-1 text-neutral-500 dark:text-neutral-400 text-sm">
                          Para la autoevaluación y evaluación de clientes
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <span className="text-[#00306b] text-lg mt-0.5 flex-shrink-0">✓</span>
                      <div>
                        <span className="font-semibold">Metodologías especializadas</span>
                        <p className="mt-1 text-neutral-500 dark:text-neutral-400 text-sm">
                          Adaptadas a tu sector y modelo de negocio
                        </p>
                      </div>
                    </div>
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
        <div className="space-y-8">
          <div className="flex flex-col space-y-8">
            <div className="group rounded-xl bg-neutral-50 dark:bg-neutral-900/90 overflow-hidden shadow-md hover:shadow-[0_0_30px_-5px_rgba(0,48,107,0.3)] transition-all duration-500 border border-neutral-200/50 dark:border-neutral-800 hover:border-[#00306b]/20">
              <div className="flex flex-col lg:flex-row">
                <div className="relative lg:w-64 xl:w-72 flex-shrink-0">
                  <div className="aspect-[4/3] w-full h-full">
                    <img
                      src={identificationImage}
                      alt="Identificación de contrapartes BC/FT/FP"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#00306b]/30 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                  </div>
                </div>
                <div className="flex-1 p-6 md:p-8">
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="h-5 w-1 rounded-full bg-gradient-to-b from-[#00306b] to-[#0055bb]"></div>
                    <h4 className="text-lg md:text-xl font-bold bg-gradient-to-r from-[#00306b] to-[#0055bb] text-transparent bg-clip-text group-hover:from-[#00306b] group-hover:to-[#0055bb] transition-colors">
                      Identificación de contrapartes BC/FT/FP
                    </h4>
                  </div>
                  <div className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-3">
                    <div className="flex items-start space-x-3">
                      <span className="text-[#00306b] text-lg mt-0.5 flex-shrink-0">✓</span>
                      <div>
                        <span className="font-semibold">Formularios inteligentes</span>
                        <p className="mt-1 text-neutral-500 dark:text-neutral-400 text-sm">
                          Para la verificación de datos
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <span className="text-[#00306b] text-lg mt-0.5 flex-shrink-0">✓</span>
                      <div>
                        <span className="font-semibold">Software especializado</span>
                        <p className="mt-1 text-neutral-500 dark:text-neutral-400 text-sm">
                          Para elaboración de reportes regulatorios
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <span className="text-[#00306b] text-lg mt-0.5 flex-shrink-0">✓</span>
                      <div>
                        <span className="font-semibold">Verificación automatizada</span>
                        <p className="mt-1 text-neutral-500 dark:text-neutral-400 text-sm">
                          De contrapartes en tiempo real
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="group rounded-xl bg-neutral-50 dark:bg-neutral-900/90 overflow-hidden shadow-md hover:shadow-[0_0_30px_-5px_rgba(0,48,107,0.3)] transition-all duration-500 border border-neutral-200/50 dark:border-neutral-800 hover:border-[#00306b]/20">
              <div className="flex flex-col lg:flex-row">
                <div className="relative lg:w-64 xl:w-72 flex-shrink-0">
                  <div className="aspect-[4/3] w-full h-full">
                    <img
                      src={whistleblowingImage}
                      alt="Canal de Denuncias"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#00306b]/30 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                  </div>
                </div>
                <div className="flex-1 p-6 md:p-8">
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="h-5 w-1 rounded-full bg-gradient-to-b from-[#00306b] to-[#0055bb]"></div>
                    <h4 className="text-lg md:text-xl font-bold bg-gradient-to-r from-[#00306b] to-[#0055bb] text-transparent bg-clip-text group-hover:from-[#00306b] group-hover:to-[#0055bb] transition-colors">
                      Canal de Denuncias
                    </h4>
                  </div>
                  <div className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-3">
                    <div className="flex items-start space-x-3">
                      <span className="text-[#00306b] text-lg mt-0.5 flex-shrink-0">✓</span>
                      <div>
                        <span className="font-semibold">Sistema anónimo y accesible</span>
                        <p className="mt-1 text-neutral-500 dark:text-neutral-400 text-sm">
                          Para reportar irregularidades de forma segura
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <span className="text-[#00306b] text-lg mt-0.5 flex-shrink-0">✓</span>
                      <div>
                        <span className="font-semibold">Gestión confidencial</span>
                        <p className="mt-1 text-neutral-500 dark:text-neutral-400 text-sm">
                          De denuncias y reportes con máxima seguridad
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <span className="text-[#00306b] text-lg mt-0.5 flex-shrink-0">✓</span>
                      <div>
                        <span className="font-semibold">Seguimiento y trazabilidad</span>
                        <p className="mt-1 text-neutral-500 dark:text-neutral-400 text-sm">
                          De casos reportados con actualizaciones en tiempo real
                        </p>
                      </div>
                    </div>
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
        <div className="space-y-8">
          <div className="flex flex-col space-y-8">
            <div className="group rounded-xl bg-neutral-50 dark:bg-neutral-900/90 overflow-hidden shadow-md hover:shadow-[0_0_30px_-5px_rgba(0,48,107,0.3)] transition-all duration-500 border border-neutral-200/50 dark:border-neutral-800 hover:border-[#00306b]/20">
              <div className="flex flex-col lg:flex-row">
                <div className="relative lg:w-64 xl:w-72 flex-shrink-0">
                  <div className="aspect-[4/3] w-full h-full">
                    <img
                      src={trainingImage}
                      alt="Cursos y Talleres"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#00306b]/30 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                  </div>
                </div>
                <div className="flex-1 p-6 md:p-8">
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="h-5 w-1 rounded-full bg-gradient-to-b from-[#00306b] to-[#0055bb]"></div>
                    <h4 className="text-lg md:text-xl font-bold bg-gradient-to-r from-[#00306b] to-[#0055bb] text-transparent bg-clip-text group-hover:from-[#00306b] group-hover:to-[#0055bb] transition-colors">
                      Cursos y Talleres
                    </h4>
                  </div>
                  <div className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-3">
                    <div className="flex items-start space-x-3">
                      <span className="text-[#00306b] text-lg mt-0.5 flex-shrink-0">✓</span>
                      <div>
                        <span className="font-semibold">Legislación y normativas vigentes</span>
                        <p className="mt-1 text-neutral-500 dark:text-neutral-400 text-sm">
                          Para el cumplimiento regulatorio actualizado
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <span className="text-[#00306b] text-lg mt-0.5 flex-shrink-0">✓</span>
                      <div>
                        <span className="font-semibold">Tipologías BC/FT y casos prácticos</span>
                        <p className="mt-1 text-neutral-500 dark:text-neutral-400 text-sm">
                          Aplicados a tu sector específico
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <span className="text-[#00306b] text-lg mt-0.5 flex-shrink-0">✓</span>
                      <div>
                        <span className="font-semibold">Gestión de riesgos y controles internos</span>
                        <p className="mt-1 text-neutral-500 dark:text-neutral-400 text-sm">
                          Para la prevención efectiva
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <span className="text-[#00306b] text-lg mt-0.5 flex-shrink-0">✓</span>
                      <div>
                        <span className="font-semibold">Actualización continua y certificaciones</span>
                        <p className="mt-1 text-neutral-500 dark:text-neutral-400 text-sm">
                          Para mantener a tu equipo al día con las mejores prácticas
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 p-3 bg-gradient-to-r from-[#00306b]/5 to-[#0055bb]/5 rounded-lg border border-[#0055bb]/10">
                      <p className="text-[#00306b] dark:text-[#4d8eff] text-sm italic">
                        Programas diseñados para mantener a tu equipo actualizado y preparado en cumplimiento normativo.
                      </p>
                    </div>
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
    <section id="servicios" className="w-full">
      <FeaturesTimeline data={data} />
    </section>
  );
}